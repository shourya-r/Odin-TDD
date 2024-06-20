function capitalize(string) {
  const len = string.length;
  const exceptFirstChar = string.substring(1, len);
  return string[0].toUpperCase() + exceptFirstChar;
}

export { capitalize };
