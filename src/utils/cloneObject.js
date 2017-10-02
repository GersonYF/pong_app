const cloneObject = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

export default cloneObject;
