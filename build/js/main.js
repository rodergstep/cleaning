$(document).ready(function() {
  inlineSVG.init({
    svgSelector: 'img.svg', // the class attached to all images that should be inlined
    initClass: 'js-inlinesvg', // class added to <html>
  }, function () {
    console.log('All SVGs inlined');
  });
});
