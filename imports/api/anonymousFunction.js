const anonymousFunction = (...args) => {
  console.log('In anonymous:',...args);
  return [...args];
}

export default anonymousFunction;
