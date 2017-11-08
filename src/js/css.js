//Figure our what selector is
function checkSelector(selector) {
  let selected = {
    "classList": [],
    "id": []
  };

  //Eventually remove this with regex
  selected.classList = selector.match(/\.\w+/g);
  for (let i = 0; i < selected.classList.length; i++) {
    selected.classList[i] = selected.classList[i].replace(".", "");
  }

  selected.id = selector.match(/\#\w+/g);
    for (let i = 0; i < selected.id.length; i++) {
      selected.id[i] = selected.id[i].replace("#", "");
    }

  return selected;
}

console.log(checkSelector( ".class .intro#ok"));
