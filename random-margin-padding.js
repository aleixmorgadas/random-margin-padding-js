function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var randomMarginPadding = function(node) {
  var style = getComputedStyle(node);

  var marginTop = parseInt(style.marginTop) || 0;
  var marginBottom = parseInt(style.marginBottom) || 0;
  var marginLeft = parseInt(style.marginLeft) || 0;
  var marginRight = parseInt(style.marginRight) || 0;

  var paddingTop = parseInt(style.paddingTop) || 0;
  var paddingBottom = parseInt(style.paddingBottom) || 0;
  var paddingLeft = parseInt(style.paddingLeft) || 0;
  var paddingRight = parseInt(style.paddingRight) || 0;

  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  node.style.marginTop = (marginTop + plusOrMinus * getRandomInt(3)) + 'px'; 
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  node.style.marginBottom = (marginBottom + plusOrMinus * getRandomInt(3)) + 'px' ; 
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  node.style.marginLeft = (marginLeft + plusOrMinus * getRandomInt(3)) + 'px'; 
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  node.style.marginRight = (marginRight + plusOrMinus * getRandomInt(3)) + 'px'; 

  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  node.style.paddingTop = (paddingTop + plusOrMinus * getRandomInt(3)) + 'px'; 
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  node.style.paddingBottom = (paddingBottom + plusOrMinus * getRandomInt(3)) + 'px'; 
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  node.style.paddingLeft = (paddingLeft + plusOrMinus * getRandomInt(3)) + 'px'; 
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  node.style.paddingRight = (paddingRight + plusOrMinus * getRandomInt(3)) + 'px'; 
}

var iterateNodes = function(nodes) {
  nodes.forEach(node => {
    if (node.nodeType === 1) {
      randomMarginPadding(node);
      iterateNodes(node.childNodes);
    }
  });
};

window.onload = function() {
  var body = document.getElementsByTagName('body')[0];
  iterateNodes(body.childNodes);
};

setInterval(() => {
  var body = document.getElementsByTagName('body')[0];
  iterateNodes(body.childNodes);
}, 2000);