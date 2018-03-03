var recipes = {};
<<<<<<< HEAD

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
 var newObj = Object.assign({}, object);
 delete newObj[key];
 return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
=======
>>>>>>> c4e8087787eea0fd8c931e47bd6e2c3add84f635
