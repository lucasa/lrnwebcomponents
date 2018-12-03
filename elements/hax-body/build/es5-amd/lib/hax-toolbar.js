define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/paper-slider/paper-slider.js",
  "../node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "../node_modules/@polymer/paper-item/paper-item.js",
  "../node_modules/@polymer/iron-icons/iron-icons.js",
  "../node_modules/@polymer/iron-icons/editor-icons.js",
  "../node_modules/@lrnwebcomponents/materializecss-styles/lib/colors.js",
  "../node_modules/@lrnwebcomponents/simple-colors/simple-colors.js",
  "./hax-toolbar-item.js",
  "./hax-toolbar-menu.js",
  "./hax-context-item.js",
  "./hax-context-item-menu.js"
], function(
  _polymerLegacy,
  _paperSlider,
  _paperTooltip,
  _paperItem,
  _ironIcons,
  _editorIcons,
  _colors,
  _simpleColors,
  _haxToolbarItem,
  _haxToolbarMenu,
  _haxContextItem,
  _haxContextItemMenu
) {
  "use strict";
  function _templateObject_e1f38d70f51a11e8a8e7334679f4d101() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style is="custom-style" include="materializecss-styles-colors simple-colors">\n      :host {\n        display: flex;\n        font-family: "Roboto", sans-serif;\n        justify-content: flex-start;\n        opacity: .4;\n        visibility: visible;\n        transition: .6s all ease;\n        box-sizing: border-box;\n        height: 32px;\n        pointer-events: all;\n      }\n      .wrapper {\n        display: flex;\n      }\n      :host .wrapper ::slotted(*) {\n        font-family: "Roboto", sans-serif;\n        pointer-events: all;\n      }\n      :host(:hover),\n      :host([selected]) {\n        opacity: 1;\n      }\n      .close-cap {\n        margin: 8px;\n        padding: 0;\n      }\n      paper-item {\n        height: 32px;\n        min-height: 32px;\n        padding: 0 8px;\n        width: 100px;\n      }\n      paper-item:hover {\n        background-color: #d3d3d3;\n        cursor: pointer;\n      }\n      paper-slider {\n        background-color: #3e3e3e;\n        color: #000000;\n        height: 32px;\n        min-width: 100px;\n        --paper-slider-font-color: #000000;\n        --paper-slider-active-color: var(--simple-colors-default-theme-light-green-1);\n        --paper-slider-knob-color: var(--simple-colors-default-theme-light-green-1);\n        --paper-slider-pin-color: var(--simple-colors-default-theme-light-green-1);\n      }\n      .convert-button {\n        border-top: 1px solid #d3d3d3;\n      }\n    </style>\n    <div class="wrapper">\n    <hax-context-item hidden$="[[inline]]" mini="" light="" icon="close" label="Close" event-name="close-menu" class="close-cap" direction="left"></hax-context-item>\n    <hax-context-item-menu hidden$="[[!haxProperties.canPosition]]" selected-value="{{justifyValue}}" id="justify" icon="[[justifyIcon]]" label="Alignment">\n      <hax-context-item menu icon="editor:format-align-left" event-name="hax-align-left">Left</hax-context-item>\n      <hax-context-item menu icon="editor:format-align-center" event-name="hax-align-center">Center</hax-context-item>\n      <hax-context-item menu icon="editor:format-align-right" event-name="hax-align-right">Right</hax-context-item>\n    </hax-context-item-menu>\n    <paper-slider hidden$="[[!haxProperties.canScale]]" id="slider" pin="" min="25" step="25" max="100" value="{{size}}"></paper-slider>\n    <paper-tooltip hidden$="[[inline]]" for="slider" position="top" offset="10">\n      Resize\n    </paper-tooltip>\n    <slot name="primary"></slot>\n    <hax-context-item hidden$="[[inline]]" icon="delete" icon-class="red-text text-darken-1" label="Remove" event-name="grid-plate-delete"></hax-context-item>\n    <hax-context-item-menu corner="right" hidden$="[[hideMore]]" icon="more-vert" label="More" id="moremenu" event-name="grid-plate-op" reset-on-select="">\n      <paper-item value="" hidden></paper-item>\n      <slot name="more"></slot>\n      <hax-context-item menu icon="icons:content-copy" icon-class="green-text" event-name="grid-plate-duplicate">Duplicate</hax-context-item>\n      <hax-context-item hidden$="[[hideTransform]]" menu icon="image:transform" class="convert-button" icon-class="orange-text" event-name="grid-plate-convert">Transform to..</hax-context-item>\n    </hax-context-item-menu>\n    </div>\n'
    ]);
    _templateObject_e1f38d70f51a11e8a8e7334679f4d101 = function _templateObject_e1f38d70f51a11e8a8e7334679f4d101() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_e1f38d70f51a11e8a8e7334679f4d101()
    ),
    is: "hax-toolbar",
    listeners: { "hax-context-item-selected": "_haxContextOperation" },
    properties: {
      hideTransform: { type: Boolean, value: !1 },
      selected: { type: Boolean, value: !1, reflectToAttritue: !0 },
      haxProperties: {
        type: Object,
        value: {},
        observer: "_haxPropertiesChanged"
      },
      hideMore: { type: Boolean, value: !1 },
      size: { type: Number, value: 100, notify: !0 },
      justifyIcon: { type: String, value: "editor:format-align-left" },
      inline: { type: Boolean, value: !1, reflectToAttritue: !0 },
      justifyValue: { type: String, value: "", notify: !0 }
    },
    _haxPropertiesChanged: function _haxPropertiesChanged(newValue, oldValue) {
      if (
        babelHelpers.typeof(window.HaxStore.instance.activeNode) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        if ("" != window.HaxStore.instance.activeNode.style.width) {
          this.size = window.HaxStore.instance.activeNode.style.width.replace(
            "%",
            ""
          );
        } else {
          this.size = 100;
        }
        if ("right" == window.HaxStore.instance.activeNode.style.float) {
          this.justifyValue = "hax-align-right";
          this.justifyIcon = "editor:format-align-right";
        } else if (
          "0px auto" == window.HaxStore.instance.activeNode.style.margin &&
          "block" == window.HaxStore.instance.activeNode.style.display
        ) {
          this.justifyValue = "hax-align-center";
          this.justifyIcon = "editor:format-align-center";
        } else {
          this.justifyValue = "hax-align-left";
          this.justifyIcon = "editor:format-align-left";
        }
      }
    },
    _haxContextOperation: function _haxContextOperation(e) {
      var detail = e.detail;
      switch (detail.eventName) {
        case "hax-align-left":
        case "hax-align-center":
        case "hax-align-right":
          this.justifyIcon = detail.target.icon;
          break;
        case "close-menu":
          this.$.moremenu.$.menu.hideMenu();
          this.$.justify.$.menu.hideMenu();
          break;
      }
    }
  });
});