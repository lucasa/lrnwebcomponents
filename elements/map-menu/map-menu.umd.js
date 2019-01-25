!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/smooth-scroll/smooth-scroll.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@polymer/iron-collapse/iron-collapse.js"),require("@polymer/iron-behaviors/iron-button-state.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/smooth-scroll/smooth-scroll.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js","@polymer/paper-button/paper-button.js","@polymer/polymer/lib/legacy/polymer.dom.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@polymer/iron-collapse/iron-collapse.js","@polymer/iron-behaviors/iron-button-state.js"],e):e((n=n||self).MapMenu={},n.polymerLegacy_js,null,null,null,null,n.polymer_dom_js)}(this,function(n,e,t,i,a,o,r){"use strict";function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var d;function c(){var n=s(['\n    <style>\n      :host {\n        display: block;\n        --map-menu-item-height: 16px;\n      }\n\n      :host([active]) {\n        background: var(--map-menu-active-color);\n      }\n\n      iron-icon {\n        display: inline-block;\n        --iron-icon-height: var(--map-menu-item-height);\n      }\n\n      #title {\n        text-transform: none;\n      }\n\n      a,\n      a:hover,\n      a:visited,\n      a:focus {\n        color: inherit;\n      }\n    </style>\n    <a href$="[[url]]">\n      <paper-button id="wrapper" role="link" noink>\n        <template is="dom-if" if="[[__hasIcon(icon)]]">\n          <iron-icon icon="[[icon]]"></iron-icon>\n        </template>\n        <span id="title">[[title]]</span>\n      </paper-button>\n    </a>\n  ']);return c=function(){return n},n}function p(){var n=s(['\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([active]) {\n        background: var(--map-menu-active-color);\n      }\n\n      #container {\n        display: flex;\n        align-items: center;\n      }\n\n      #avatarLabel {\n        margin-right: 10px;\n      }\n\n      #center {\n        flex: 1 1 auto;\n      }\n\n      a,\n      a:hover,\n      a:visited,\n      a:focus {\n        color: inherit;\n      }\n\n      lrndesign-avatar {\n        display: inline-block;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\n        padding: 2px;\n        position: relative;\n        margin-top: -2px;\n        transform: translateY(2px);\n      }\n\n      #link {\n        display: flex;\n        justify-content: flex-start;\n        align-items: flex-start;\n        flex-direction: column;\n      }\n\n      #title {\n        font-size: 16px;\n      }\n\n      #right iron-icon {\n        display: inline-block;\n        color: gray;\n      }\n\n      /* @todo this is a hack */\n      #icon iron-icon {\n        display: inline-block;\n        --iron-icon-height: 16px;\n        transform: translateX(10px);\n      }\n\n      paper-button {\n        text-transform: none;\n      }\n    </style>\n    <div id="container">\n      <template is="dom-if" if="[[avatarLabel]]">\n        <div id="avatarLabel">\n          <lrndesign-avatar label="[[avatarLabel]]"></lrndesign-avatar>\n        </div>\n      </template>\n      <template is="dom-if" if="[[icon]]">\n        <div id="icon"><iron-icon icon="[[icon]]"></iron-icon></div>\n      </template>\n      <div id="center">\n        <a href$="[[url]]">\n          <paper-button id="title" noink="" role$="[[__titleRole()]]">\n            <div id="label">[[label]]</div>\n            <div id="title">[[title]]</div>\n          </paper-button>\n        </a>\n      </div>\n      <div id="right">\n        <template is="dom-if" if="[[!opened]]">\n          <iron-icon\n            id="toggle"\n            icon="arrow-drop-down"\n            aria-role="button"\n            aria-label="expand menu"\n            tabindex="0"\n          ></iron-icon>\n        </template>\n        <template is="dom-if" if="[[opened]]">\n          <iron-icon\n            id="toggle"\n            icon="arrow-drop-up"\n            aria-role="button"\n            aria-label="collapse menu"\n            tabindex="0"\n          ></iron-icon>\n        </template>\n      </div>\n    </div>\n  '],['\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([active]) {\n        background: var(--map-menu-active-color);\n      }\n\n      #container {\n        display: flex;\n        align-items: center;\n      }\n\n      #avatarLabel {\n        margin-right: 10px;\n      }\n\n      #center {\n        flex: 1 1 auto;\n      }\n\n      a,\n      a:hover,\n      a:visited,\n      a:focus {\n        color: inherit;\n      }\n\n      lrndesign-avatar {\n        display: inline-block;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\n        padding: 2px;\n        position: relative;\n        margin-top: -2px;\n        transform: translateY(2px);\n      }\n\n      #link {\n        display: flex;\n        justify-content: flex-start;\n        align-items: flex-start;\n        flex-direction: column;\n      }\n\n      #title {\n        font-size: 16px;\n      }\n\n      #right iron-icon {\n        display: inline-block;\n        color: gray;\n      }\n\n      /* @todo this is a hack */\n      #icon iron-icon {\n        display: inline-block;\n        --iron-icon-height: 16px;\n        transform: translateX(10px);\n      }\n\n      paper-button {\n        text-transform: none;\n      }\n    </style>\n    <div id="container">\n      <template is="dom-if" if="[[avatarLabel]]">\n        <div id="avatarLabel">\n          <lrndesign-avatar label="[[avatarLabel]]"></lrndesign-avatar>\n        </div>\n      </template>\n      <template is="dom-if" if="[[icon]]">\n        <div id="icon"><iron-icon icon="[[icon]]"></iron-icon></div>\n      </template>\n      <div id="center">\n        <a href$="[[url]]">\n          <paper-button id="title" noink="" role\\$="[[__titleRole()]]">\n            <div id="label">[[label]]</div>\n            <div id="title">[[title]]</div>\n          </paper-button>\n        </a>\n      </div>\n      <div id="right">\n        <template is="dom-if" if="[[!opened]]">\n          <iron-icon\n            id="toggle"\n            icon="arrow-drop-down"\n            aria-role="button"\n            aria-label="expand menu"\n            tabindex="0"\n          ></iron-icon>\n        </template>\n        <template is="dom-if" if="[[opened]]">\n          <iron-icon\n            id="toggle"\n            icon="arrow-drop-up"\n            aria-role="button"\n            aria-label="collapse menu"\n            tabindex="0"\n          ></iron-icon>\n        </template>\n      </div>\n    </div>\n  ']);return p=function(){return n},n}function m(){var n=s(['\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([collapsable]) > map-menu-header {\n        cursor: pointer;\n        display: block;\n      }\n\n      #container {\n        margin-left: 16px;\n      }\n\n      #container ::slotted(map-menu-item) {\n        margin-top: 0.4em;\n      }\n    </style>\n    <map-menu-header\n      avatar-label="[[avatarLabel]]"\n      id="[[id]]"\n      title="[[title]]"\n      label="[[label]]"\n      opened="[[opened]]"\n      url="[[url]]"\n      icon="[[icon]]"\n      selected="[[selected]]"\n    ></map-menu-header>\n    <iron-collapse id="container"> <slot></slot> </iron-collapse>\n  ']);return m=function(){return n},n}function u(){var n=s(["\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        padding: 16px 32px;\n      }\n      :host > ::slotted(map-menu-submenu + map-menu-submenu) {\n        margin-top: 16px;\n      }\n    </style>\n    <slot></slot>\n  "]);return u=function(){return n},n}function h(){var n=s(['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <template id="domRepeat" is="dom-repeat" items="[[items]]" as="item">\n      <template is="dom-if" if="[[__hasChildren(item)]]">\n        <map-menu-submenu\n          title="[[item.title]]"\n          id="[[item.id]]"\n          url="[[item.location]]"\n          icon="[[item.metadata.icon]]"\n          open="[[item.metadata.active]]"\n          avatar-label="[[item.metadata.avatarLabel]]"\n          selected="[[selected]]"\n        >\n          <map-menu-builder\n            items="[[item.children]]"\n            selected="[[selected]]"\n          ></map-menu-builder>\n        </map-menu-submenu>\n      </template>\n      <template is="dom-if" if="[[!__hasChildren(item)]]">\n        <map-menu-item\n          title="[[item.title]]"\n          id="[[item.id]]"\n          url="[[item.location]]"\n          icon="[[item.metadata.icon]]"\n          active-path="[[activePath]]"\n          selected="[[selected]]"\n        ></map-menu-item>\n      </template>\n    </template>\n  ']);return h=function(){return n},n}function f(){var n=s(['\n    <style>\n      :host {\n        --map-menu-active-color: rgba(0, 0, 0, 0.1);\n        display: block;\n        overflow-y: scroll;\n        position: relative;\n        height: 100%;\n      }\n\n      #activeIndicator {\n        background: var(--map-menu-active-color);\n        transition: all 0.3s ease-in-out;\n        position: absolute;\n      }\n\n      map-menu-container {\n        padding: 32px;\n        @apply --map-menu-container;\n      }\n\n      /* turn default active color if indicator is on */\n      :host([active-indicator]) map-menu-builder {\n        --map-menu-active-color: transparent;\n      }\n    </style>\n    <div id="itemslist">\n      <map-menu-container>\n        <div id="activeIndicator"></div>\n        <map-menu-builder\n          id="builder"\n          items="[[items]]"\n          selected="[[selected]]"\n        ></map-menu-builder>\n      </map-menu-container>\n    </div>\n    <smooth-scroll id="smoothScroll"></smooth-scroll>\n  ']);return f=function(){return n},n}e.Polymer({_template:e.html(c()),is:"map-menu-item",properties:(d={icon:{type:String,value:""},title:{type:String,value:""},url:{type:String,value:""}},l(d,"icon",{type:String}),l(d,"id",{type:String,reflectToAttribute:!0}),l(d,"active",{type:Boolean,value:!1}),l(d,"selected",{type:String}),d),observers:["__selectedChanged(selected, id)"],__selectedChanged:function(n,e){n===e&&this.fire("active-item",this)},_click:function(){this.fire("link-clicked",{id:this.id})},attached:function(){this.fire("child-attached",{id:this.id})},__hasIcon:function(n){return!(!n&&""!==n)}}),e.Polymer({_template:e.html(p()),is:"map-menu-header",properties:{title:{type:String},label:{type:String},avatarLabel:{type:String,value:""},opened:{type:Boolean},url:{type:String,value:""},id:{type:String,reflectToAttribute:!0},icon:{type:String},active:{type:Boolean,value:!1},selected:{type:String}},listeners:{tap:"__tap",keypress:"__keypress"},observers:["__selectedChanged(selected, id)"],__selectedChanged:function(n,e){n===e&&this.fire("active-item",this)},attached:function(){this.fire("child-attached",{id:this.id})},__tap:function(n){this.__toggleEventHandler(n)},__keypress:function(n){"Enter"===n.code&&this.__toggleEventHandler(n)},__toggleEventHandler:function(n){var e=r.dom(n).rootTarget;void 0!==e&&void 0!==e.id&&"toggle"===e.id&&this.fire("toggle-header")}}),e.Polymer({_template:e.html(m()),is:"map-menu-submenu",properties:{id:{type:String},title:{type:String},avatarLabel:{type:String},label:{type:String},icon:{type:String},opened:{type:Boolean,value:!1},collapsable:{type:Boolean,value:!0},expandChildren:{type:Boolean,value:!1},selected:{type:String}},observers:["_openChanged(opened)"],listeners:{"child-deactivated":"__childDeactivated","child-activated":"__childActivated","active-item":"__activeChanged","toggle-header":"__toggleHeader","link-clicked":"_headerClickHandler"},_openChanged:function(n){var e=this.$.container;n&&e.show(),n||e.hide()},_headerClickHandler:function(n){this.opened||(this.opened=!this.opened)},__toggleHeader:function(n){n.stopPropagation(),this.opened=!this.opened,this.fire("toggle-updated")},__activeChanged:function(n){this.opened=!0}}),e.Polymer({_template:e.html(u()),is:"map-menu-container",properties:{}}),e.Polymer({_template:e.html(h()),is:"map-menu-builder",properties:{items:{type:Array,value:[]},selected:{type:String}},__hasChildren:function(n){return n.children.length>0},_hasActiveChildren:function(){}});var v=e.Polymer({_template:e.html(f()),is:"map-menu",properties:{title:{type:String,value:"Content Outline"},data:{type:Array,value:null},manifest:{type:Object,notify:!0,observer:"_manifestChanged"},items:{type:Array,value:null,notify:!0},selected:{type:String,notify:!0},autoScroll:{type:Boolean,value:!1},activeIndicator:{type:Boolean,value:!1}},observers:["_dataChanged(data)"],listeners:{"link-clicked":"__linkClickedHandler","toggle-updated":"__toggleUpdated","active-item":"__activeItemHandler"},ready:function(){},__activeItemHandler:function(n){var e=n.detail;this.refreshActiveChildren(e)},refreshActiveChildren:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=this._activeItem,i=n;i&&""!==i&&(i.setAttribute("active",!0),this.activeIndicator&&this.__updateActiveIndicator(i,e),this.autoScroll&&this.$.smoothScroll.scroll(i,{duration:300,scrollElement:this})),t&&t.removeAttribute("active"),this._activeItem=i},_manifestChanged:function(n,e){n&&this.set("data",n.items)},setData:function(n){this.set("data",[]),this.set("data",n)},_dataChanged:function(n){var e=this,t=[];n&&(n.forEach(function(n){n.parent||t.push(n)}),t.forEach(function(t,i){e._setChildren(t,n)}),this.set("items",[]),this.set("items",t))},_setChildren:function(n,e){var t=this,i=e.filter(function(e){return n.id===e.parent});n.children=i,n.children.length>0&&n.children.forEach(function(n){t._setChildren(n,e)})},__hasChildren:function(n){return n.children.length>0},__linkClickedHandler:function(n){this.selected=n.detail.id,this.fire("selected",n.detail.id)},__toggleUpdated:function(n){this.refreshActiveChildren(this._activeItem,300)},__isInViewport:function(n){var e=this.__getScrollParent(n);if(!e)return!1;var t=n.offsetTop,i=t+n.offsetHeight,a=e.offsetTop,o=a+e.offsetHeight;return i>a&&t<o},__getScrollParent:function(n){return null==n?null:n.scrollHeight>n.clientHeight?n:this.__getScrollParent(n.parentNode)},__updateActiveIndicator:function(n){var e=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;setTimeout(function(){var i=e.$.activeIndicator,a=e.__parentsHidden(n),o=n.offsetLeft,r=(n.offsetBottom,n.offsetTop),l=n.offsetWidth,s=a?0:n.offsetHeight;t=s>0?t:10,i.setAttribute("style","width:".concat(l,"px;height:").concat(s,"px;top:").concat(r,"px;left:").concat(o,"px"))},t)},__parentsHidden:function(n){var e=n.parentNode;return null==e?null:"MAP-MENU-SUBMENU"===e.tagName&&!e.opened||"MAP-MENU"!==e.tagName&&this.__parentsHidden(e)}});n.MapMenu=v,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=map-menu.umd.js.map
