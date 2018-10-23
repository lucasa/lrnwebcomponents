define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.Logo = void 0;
  function _templateObject_2fe69e00d6f311e89671f92f905c5290() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_2fe69e00d6f311e89671f92f905c5290 = function() {
      return data;
    };
    return data;
  }
  var Logo = (function(_PolymerElement) {
    babelHelpers.inherits(Logo, _PolymerElement);
    function Logo() {
      babelHelpers.classCallCheck(this, Logo);
      return babelHelpers.possibleConstructorReturn(
        this,
        (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      Logo,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                Logo.prototype.__proto__ ||
                  Object.getPrototypeOf(Logo.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(Logo.haxProperties, Logo.tag, this);
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_2fe69e00d6f311e89671f92f905c5290()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Logo",
                description: "Automated conversion of logo/",
                icon: "icons:android",
                color: "green",
                groups: [""],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "logo";
          }
        }
      ]
    );
    return Logo;
  })(_polymerElement.PolymerElement);
  _exports.Logo = Logo;
  window.customElements.define(Logo.tag, Logo);
});
