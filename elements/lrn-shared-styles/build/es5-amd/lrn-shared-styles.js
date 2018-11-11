define([
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js"
], function(_polymerElement) {
  "use strict";
  function _templateObject_83018620e11811e89acc2787708daf0e() {
    var data = babelHelpers.taggedTemplateLiteral([
      '<style include="iron-flex-layout">\n  lrn-icon, iron-icon {\n    --layout-inline: {\n      display: inline-flex;\n    }; \n  }\n  .sr-only {\n    position: absolute;\n    left: -9999999px;\n    top: 0;\n    height: 0;\n    width: 0;\n    overflow: hidden;\n  }\n  @media screen {\n    .print-only {\n      display: none;\n    }\n  }\n  @media print {\n    .screen-only {\n      display: none;\n    }\n  }\n</style>'
    ]);
    _templateObject_83018620e11811e89acc2787708daf0e = function() {
      return data;
    };
    return data;
  }
  var styleElement = document.createElement("dom-module"),
    css = (0, _polymerElement.html)(
      _templateObject_83018620e11811e89acc2787708daf0e()
    );
  console.log(css);
  styleElement.appendChild(css);
  styleElement.register("lrn-shared-styles");
  console.log(styleElement);
});