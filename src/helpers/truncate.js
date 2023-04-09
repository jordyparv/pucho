export default truncate = (text, end) =>
  text.length > end ? text.substring(0, end) + '...' : text;
