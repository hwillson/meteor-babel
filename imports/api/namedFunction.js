function namedFunction (...args) {
  console.log('In anonymous:',...args);
  return [...args];
}

export default namedFunction;
