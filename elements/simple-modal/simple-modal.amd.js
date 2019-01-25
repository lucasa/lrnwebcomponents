define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/polymer/lib/utils/async.js","./node_modules/@polymer/paper-dialog/paper-dialog.js","./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/neon-animation/animations/scale-up-animation.js","./node_modules/@polymer/neon-animation/animations/fade-out-animation.js"],function(_exports,_polymerElement,_polymerDom,async,_paperDialog,_paperDialogScrollable,_paperButton,_ironIcons,_ironIcon,_scaleUpAnimation,_fadeOutAnimation){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleModal=void 0;async=babelHelpers.interopRequireWildcard(async);function _templateObject_12ce5a90206511e9b0619d8d786d508e(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host ::slotted(*) {\n  font-size: 14px;\n  @apply --simple-modal-content;\n}\n\n:host #dialog {\n  display: block;\n  margin: auto;\n  width: auto;\n  height: auto;\n  z-index: 1000;\n  min-width: var(--simple-modal-width, 50vw);\n  min-height: var(--simple-modal-height, 50vh);\n  border-radius: 3px;\n  @apply --simple-modal-dialog;\n}\n\n:host #titlebar {\n  margin-top: 0;\n  padding: 0px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--simple-modal-titlebar-color,#444);\n  background-color: var(--simple-modal-titlebar-background,#ddd);\n  border-radius: 3px 3px 0 0;\n  @apply --simple-modal-top;\n}\n\n:host #headerbar {\n  margin: 0;\n  padding: 0 16px;\n  color: var(--simple-modal-header-color, #222);\n  background-color: var(--simple-modal-header-background, #ccc);\n  @apply --simple-modal-headerbar;\n}\n\n:host h2 {\n  margin-right: 8px;\n  padding: 0;\n  flex: auto;\n  font-size: 18px;\n  line-height: 18px;\n  @apply --simple-modal-title;\n}\n\n:host #close {\n  top: 0;\n  padding: 10px 0;\n  min-width: unset;\n  text-transform: none;\n  color: var(--simple-modal-titlebar-color,#444);\n  background-color: transparent;\n  @apply --simple-modal-close;\n}\n\n:host #close iron-icon {\n  width: 16px;\n  height: 16px;\n  color: var(--simple-modal-titlebar-color,#444);\n  @apply --simple-modal-close-icon;\n}\n\n#simple-modal-content {\n  padding: 8px 16px;\n  margin: 0;\n  color: var(--simple-modal-content-container-color, #222);\n  background-color: var(--simple-modal-content-container-background, #fff);\n  --paper-dialog-scrollable: {\n    padding: 0;\n  }\n  @apply --simple-modal-content-container;\n}\n.buttons {\n  padding: 0;\n  margin: 0;\n  color: var(--simple-modal-buttons-color, unset);\n  background-color: var(--simple-modal-buttons-background,unset);\n  @apply --simple-modal-buttons;\n}\n.buttons ::slotted(*) {\n  padding: 0;\n  margin: 0;\n  color: var(--simple-modal-button-color,--simple-modal-buttons-color);\n  background-color: var(--simple-modal-button-background,--simple-modal-buttons-background);\n  @apply --simple-modal-button;\n}</style>\n<paper-dialog id=\"dialog\" \n  always-on-top\n  aria-describedby=\"simple-modal-content\"\n  aria-label$=\"[[_getAriaLabel(title)]]\"\n  aria-labelledby$=\"[[_getAriaLabelledby(title)]]\"\n  aria-modal=\"true\"\n  entry-animation=\"scale-up-animation\" \n  exit-animation=\"fade-out-animation\" \n  role=\"dialog\"\n  opened=\"{{opened}}\" \n  with-backdrop>\n  <div id=\"titlebar\">\n    <h2 id=\"simple-modal-title\" hidden$=\"[[!title]]\">[[title]]</h2>\n    <div></div>\n    <paper-button id=\"close\" dialog-dismiss hidden$=\"[[!opened]]\" label=\"[[closeLabel]]\">\n      <iron-icon aria-hidden=\"true\" icon=\"[[closeIcon]]\"></iron-icon>\n    </paper-button>\n  </div>\n  <div id=\"headerbar\"><slot name=\"header\"></slot></div>\n  <paper-dialog-scrollable id=\"simple-modal-content\">\n    <slot name=\"content\"></slot>\n  </paper-dialog-scrollable>\n  <div class=\"buttons\">\n    <slot name=\"buttons\"></slot>\n  </div>\n</paper-dialog>"]);_templateObject_12ce5a90206511e9b0619d8d786d508e=function _templateObject_12ce5a90206511e9b0619d8d786d508e(){return data};return data}window.SimpleModal=window.SimpleModal||{};window.SimpleModal.requestAvailability=function(){if(!window.SimpleModal.instance){window.SimpleModal.instance=document.createElement("simple-modal");document.body.appendChild(window.SimpleModal.instance)}return window.SimpleModal.instance};var SimpleModal=function(_PolymerElement){babelHelpers.inherits(SimpleModal,_PolymerElement);function SimpleModal(){babelHelpers.classCallCheck(this,SimpleModal);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleModal).apply(this,arguments))}babelHelpers.createClass(SimpleModal,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleModal.prototype),"connectedCallback",this).call(this);window.addEventListener("simple-modal-hide",this.close.bind(this));window.addEventListener("simple-modal-show",this.showEvent.bind(this));this.shadowRoot.querySelector("#simple-modal-content").addEventListener("neon-animation-finish",this._ironOverlayClosed.bind(this))}},{key:"_resizeContent",value:function _resizeContent(e){async.microTask.run(function(){window.dispatchEvent(new Event("resize"))})}},{key:"showEvent",value:function showEvent(e){var _this=this;if(this.opened){while(null!==(0,_polymerDom.dom)(this).firstChild){(0,_polymerDom.dom)(this).removeChild((0,_polymerDom.dom)(this).firstChild)}setTimeout(function(){_this.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.clone)},100)}else{this.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.clone)}}},{key:"show",value:function show(title,elements,invokedBy){var _this2=this,clone=3<arguments.length&&arguments[3]!==void 0?arguments[3]:!1;this.set("invokedBy",invokedBy);this.title=title;var element,slots=["header","content","buttons"];for(var i in slots){if(elements[slots[i]]){if(clone){element=elements[slots[i]].cloneNode(!0)}else{element=elements[slots[i]]}element.setAttribute("slot",slots[i]);(0,_polymerDom.dom)(this).appendChild(element)}}setTimeout(function(){_this2.opened=!0;_this2._resizeContent()},100)}},{key:"animationEnded",value:function animationEnded(e){var _this3=this;this.title="";while(null!==(0,_polymerDom.dom)(this).firstChild){(0,_polymerDom.dom)(this).removeChild((0,_polymerDom.dom)(this).firstChild)}if(this.invokedBy){async.microTask.run(function(){setTimeout(function(){_this3.invokedBy.focus()},500)})}}},{key:"close",value:function close(){this.$.dialog.close()}},{key:"_openedChanged",value:function _openedChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&!newValue){this.animationEnded();var evt=new CustomEvent("simple-modal-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(evt)}else if(newValue){var _evt=new CustomEvent("simple-modal-opened",{bubbles:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(_evt)}}},{key:"_getAriaLabelledby",value:function _getAriaLabelledby(title){return!title?null:"simple-modal-title"}},{key:"_getAriaLabel",value:function _getAriaLabel(title){return!title?"Modal Dialog":null}},{key:"_ironOverlayClosed",value:function _ironOverlayClosed(e){console.log("i got here..");e.preventDefault();e.stopPropagation()}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleModal.prototype),"disconnectedCallback",this).call(this);window.removeEventListener("simple-modal-hide",this.close.bind(this));window.removeEventListener("simple-modal-show",this.showEvent.bind(this));this.shadowRoot.querySelector("#simple-modal-content").removeEventListener("neon-animation-finish",this._ironOverlayClosed.bind(this))}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_12ce5a90206511e9b0619d8d786d508e())}},{key:"properties",get:function get(){return{title:{name:"title",type:String,value:""},opened:{name:"opened",type:Boolean,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},closeLabel:{name:"closeLabel",type:String,value:"Close"},closeIcon:{name:"closeIcon",type:String,value:"close"},invokedBy:{name:"invokedBy",type:Object}}}},{key:"tag",get:function get(){return"simple-modal"}}]);return SimpleModal}(_polymerElement.PolymerElement);_exports.SimpleModal=SimpleModal;window.customElements.define(SimpleModal.tag,SimpleModal)});