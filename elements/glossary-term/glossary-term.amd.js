define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerElement,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.GlossaryTerm=void 0;function _templateObject_f955a2802f3211e9892e6160c8f99989(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>\n<div>[[name]]</div>"]);_templateObject_f955a2802f3211e9892e6160c8f99989=function _templateObject_f955a2802f3211e9892e6160c8f99989(){return data};return data}var GlossaryTerm=function(_PolymerElement){babelHelpers.inherits(GlossaryTerm,_PolymerElement);function GlossaryTerm(){babelHelpers.classCallCheck(this,GlossaryTerm);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GlossaryTerm).apply(this,arguments))}babelHelpers.createClass(GlossaryTerm,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(GlossaryTerm.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(GlossaryTerm.haxProperties,GlossaryTerm.tag,this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_f955a2802f3211e9892e6160c8f99989())}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Glossary term",description:"Glossary element that connects to the glossary service.",icon:"icons:android",color:"green",groups:["Term"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"heyMP",owner:"PSU"}},settings:{quick:[],configure:[{property:"name",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function get(){return{name:{name:"name",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}},{key:"tag",get:function get(){return"glossary-term"}}]);return GlossaryTerm}(_polymerElement.PolymerElement);_exports.GlossaryTerm=GlossaryTerm;window.customElements.define(GlossaryTerm.tag,GlossaryTerm)});