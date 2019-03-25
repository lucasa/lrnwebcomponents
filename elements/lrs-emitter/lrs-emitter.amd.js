define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerElement,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrsEmitter=void 0;function _templateObject_a1fd0d90440211e99d8b2f615f4bf194(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>\n<div>[[verb]]</div>"]);_templateObject_a1fd0d90440211e99d8b2f615f4bf194=function _templateObject_a1fd0d90440211e99d8b2f615f4bf194(){return data};return data}var LrsEmitter=function(_PolymerElement){babelHelpers.inherits(LrsEmitter,_PolymerElement);function LrsEmitter(){babelHelpers.classCallCheck(this,LrsEmitter);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LrsEmitter).apply(this,arguments))}babelHelpers.createClass(LrsEmitter,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LrsEmitter.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(LrsEmitter.haxProperties,LrsEmitter.tag,this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_a1fd0d90440211e99d8b2f615f4bf194())}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Lrs emitter",description:"Emit learning statements occuring in your app.",icon:"icons:android",color:"green",groups:["Emitter"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"heyMP",owner:"PSU"}},settings:{quick:[],configure:[{property:"verb",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function get(){return{verb:{name:"verb",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}},{key:"tag",get:function get(){return"lrs-emitter"}}]);return LrsEmitter}(_polymerElement.PolymerElement);_exports.LrsEmitter=LrsEmitter;window.customElements.define(LrsEmitter.tag,LrsEmitter)});