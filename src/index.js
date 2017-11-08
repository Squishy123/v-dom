const Silk = require('./silk.js');

let silk = new Silk.Weaver();
let doc = silk.createElement("html", {}, [new Silk.Thread("head", {}, [new Silk.Thread("title", {}, "Hey Jude!")]), new Silk.Thread("body", {})]);
console.log(doc.convertToHTML());
