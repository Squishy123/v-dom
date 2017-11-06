//Figure our what selector is
function checkSelector(element, selector) {
  let selected = {
    "class-list": [],
    "id-list": []
  };
    selected["class-list"] = selector.match(/\.\w+/g);
    selected["id-list"] = selector.match(/\#\w+/g);
  return selected;
}

console.log(checkSelector(null, ".class .intro#ok"));
