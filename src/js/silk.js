class SilkElement {
  constructor(element, properties, value) {
    this.element = element;
    this.properties = properties;
    this.value = value;

    //Array full of children elements
    this.children = [];
  }

  appendChild(childElement) {
    this.children.push(childElement);
  }

  insertChild(childElement, index) {
    this.children.splice(index, 0, childElement);
  }

  querySelector(selector) {
    let selected = null;

    this.children.forEach(function(child) {
      child.properties[selector]
    });

    return selected;
  }
}


class Silk {

  createElement(tagName, options) {

  }
}
