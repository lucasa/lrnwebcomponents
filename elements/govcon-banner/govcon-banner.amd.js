define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerElement,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.GovconBanner=void 0;function _templateObject_c9260500d6ef11e890f0296e8720da27(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_c9260500d6ef11e890f0296e8720da27=function(){return data};return data}var GovconBanner=function(_PolymerElement){babelHelpers.inherits(GovconBanner,_PolymerElement);function GovconBanner(){babelHelpers.classCallCheck(this,GovconBanner);return babelHelpers.possibleConstructorReturn(this,(GovconBanner.__proto__||Object.getPrototypeOf(GovconBanner)).apply(this,arguments))}babelHelpers.createClass(GovconBanner,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(GovconBanner.prototype.__proto__||Object.getPrototypeOf(GovconBanner.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setHaxProperties(GovconBanner.haxProperties,GovconBanner.tag,this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_c9260500d6ef11e890f0296e8720da27())}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Govcon banner",description:"Automated conversion of govcon-banner/",icon:"icons:android",color:"green",groups:["Banner"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[],advanced:[]}}}},{key:"properties",get:function get(){return{}}},{key:"tag",get:function get(){return"govcon-banner"}}]);return GovconBanner}(_polymerElement.PolymerElement);_exports.GovconBanner=GovconBanner;window.customElements.define(GovconBanner.tag,GovconBanner)});