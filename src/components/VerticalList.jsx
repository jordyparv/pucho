import React from 'react';
import {View, VirtualizedList} from 'react-native';
const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

function VerticalList({Item, limit}) {
  const getItemCount = _data => limit;
  return (
    <VirtualizedList
      initialNumToRender={4}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
}
export default VerticalList;
