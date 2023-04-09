import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Container from '../components/Container';
import Message from '../components/Message';
import Lottie from 'lottie-react-native';
import {
  RTCPeerConnection,
  RTCSessionDescription,
  RTCIceCandidate,
} from 'react-native-webrtc';
import {GiftedChat} from 'react-native-gifted-chat';
import io from 'socket.io-client';


// const renderItem = useCallback(
//   ({item}) => <Message msg={item.msg} time={item.hoursMin} id={item.id} />,
//   [],
// );

export default function Listener({route}) {
  const scrollViewRef = useRef();
  const peerRef = useRef();
  const socketRef = useRef();
  const otherUser = useRef();
  const sendChannel = useRef(); // Data channel
  const {roomID} = route.params ?? '146saf';
  const [messages, setMessages] = useState([]); // Chats between the peers will be stored here

  useEffect(() => {
    // Step 1: Connect with the Signal server
    socketRef.current = io.connect('http://10.0.2.2:3000'); // Address of the Signal server

    // Step 2: Join the room. If initiator we will create a new room otherwise we will join a room
    socketRef.current.emit('join room', roomID); // Room ID

    // Step 3: Waiting for the other peer to join the room
    socketRef.current.on('other user', userID => {
      callUser(userID);
      otherUser.current = userID;
    });

    // Signals that both peers have joined the room
    socketRef.current.on('user joined', userID => {
      otherUser.current = userID;
    });

    socketRef.current.on('offer', handleOffer);

    socketRef.current.on('answer', handleAnswer);

    socketRef.current.on('ice-candidate', handleNewICECandidateMsg);
  }, []);

  function callUser(userID) {
    // This will initiate the call for the receiving peer
    console.log('[INFO] Initiated a call');
    peerRef.current = Peer(userID);
    sendChannel.current = peerRef.current.createDataChannel('sendChannel');

    // listen to incoming messages from other peer
    sendChannel.current.onmessage = handleReceiveMessage;
  }

  function Peer(userID) {
    /* 
       Here we are using Turn and Stun server
       (ref: https://blog.ivrpowers.com/post/technologies/what-is-stun-turn-server/)
    */

    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.stunprotocol.org',
        },
        {
          urls: 'turn:numb.viagenie.ca',
          credential: 'muazkh',
          username: 'webrtc@live.com',
        },
      ],
    });
    peer.onicecandidate = handleICECandidateEvent;
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);
    return peer;
  }

  function handleNegotiationNeededEvent(userID) {
    // Offer made by the initiating peer to the receiving peer.
    peerRef.current
      .createOffer()
      .then(offer => {
        return peerRef.current.setLocalDescription(offer);
      })
      .then(() => {
        const payload = {
          target: userID,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit('offer', payload);
      })
      .catch(err =>
        console.log('Error handling negotiation needed event', err),
      );
  }

  function handleOffer(incoming) {
    /*
      Here we are exchanging config information
      between the peers to establish communication
    */
    console.log('[INFO] Handling Offer');
    peerRef.current = Peer();
    peerRef.current.ondatachannel = event => {
      sendChannel.current = event.channel;
      sendChannel.current.onmessage = handleReceiveMessage;
      console.log('[SUCCESS] Connection established');
    };

    /*
      Session Description: It is the config information of the peer
      SDP stands for Session Description Protocol. The exchange
      of config information between the peers happens using this protocol
    */
    const desc = new RTCSessionDescription(incoming.sdp);

    /* 
       Remote Description : Information about the other peer
       Local Description: Information about you 'current peer'
    */

    peerRef.current
      .setRemoteDescription(desc)
      .then(() => {})
      .then(() => {
        return peerRef.current.createAnswer();
      })
      .then(answer => {
        return peerRef.current.setLocalDescription(answer);
      })
      .then(() => {
        const payload = {
          target: incoming.caller,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit('answer', payload);
      });
  }

  function handleAnswer(message) {
    // Handle answer by the receiving peer
    const desc = new RTCSessionDescription(message.sdp);
    peerRef.current
      .setRemoteDescription(desc)
      .catch(e => console.log('Error handle answer', e));
  }

  function handleReceiveMessage(e) {
    // Listener for receiving messages from the peer
    console.log('[INFO] Message received from peer', e.data);
    const msg = [
      {
        _id: Math.random(1000).toString(),
        text: e.data,
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
    ];
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
  }

  function handleICECandidateEvent(e) {
    /*
      ICE stands for Interactive Connectivity Establishment. Using this
      peers exchange information over the intenet. When establishing a
      connection between the peers, peers generally look for several 
      ICE candidates and then decide which to choose best among possible
      candidates
    */
    if (e.candidate) {
      const payload = {
        target: otherUser.current,
        candidate: e.candidate,
      };
      socketRef.current.emit('ice-candidate', payload);
    }
  }

  function handleNewICECandidateMsg(incoming) {
    const candidate = new RTCIceCandidate(incoming);

    peerRef.current.addIceCandidate(candidate).catch(e => console.log(e));
  }

  function sendMessage(messages = []) {
    sendChannel.current.send(messages[0].text);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }

  return (
    <Container>
      <View className="flex-1 my-4">
        <Text className="text-center text-white text-2xl mb-6">
          Kl ki story
        </Text>
        <View className="bg-white/20 w-full h-48 rounded-2xl p-2 justify-center mb-10">
          <Text className="text-white text-3xl">Live </Text>
          <Text className="text-white text-3xl">Live </Text>
          <Text className="text-white text-3xl">Live </Text>
          <Text className="text-white text-3xl">Live </Text>
          <Text className="text-white text-3xl">Live </Text>
        </View>
        <View className="flex-1">
          <GiftedChat
            messages={messages}
            onSend={messages => sendMessage(messages)}
            user={{
              _id: 1,
            }}
            className="flex-1"
          />
        </View>

        <View className="w-full flex flex-row items-center">
          <TextInput
            placeholder="Comment"
            className="flex-1 px-2 font-bold text-white"
            placeholderTextColor={'#6C6C6C'}
          />
          <TouchableOpacity className="p-2">
            <Text className="text-white">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
