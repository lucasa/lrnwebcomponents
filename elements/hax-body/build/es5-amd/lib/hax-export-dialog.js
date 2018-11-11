define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js",
  "../node_modules/@polymer/paper-icon-button/paper-icon-button.js",
  "../node_modules/@polymer/paper-input/paper-input.js",
  "../node_modules/@polymer/paper-button/paper-button.js",
  "@lrnwebcomponents/dl-behavior/dl-behavior.js",
  "../node_modules/@lrnwebcomponents/simple-colors/simple-colors.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_e96d0970dbb911e89b94f594419eb4d2() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      #dialog {\n        z-index: 1000;\n        margin-top: 64px;\n      }\n      paper-icon-button#closedialog {\n        float: right;\n        top: 135px;\n        right: 0;\n        position: absolute;\n        padding: 4px;\n        margin: 0;\n        color: var(--simple-colors-light-green-background1);\n      }\n      .title {\n        margin-top: 32px;\n        text-align: center;\n        padding: 16px;\n        margin: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        font-size: 32px;\n        font-weight: bold;\n        font-family: sans-serif;\n        text-transform: uppercase;\n        color: var(--simple-colors-light-green-background1);\n      }\n      .pref-container {\n        text-align: left;\n        padding: 16px;\n      }\n      app-drawer {\n        --app-drawer-content-container: {\n          background-color: rgba(0, 0, 0, 0.7);\n        };\n        --app-drawer-width: 320px;\n      }\n      paper-button {\n        color: #222222;\n        text-transform: none;\n        margin:0;\n        background-color: #F8F8F8;\n        display: flex;\n        border-radius: 0px;\n        border-style: solid;\n        border-width: 1px;\n        min-width: unset;\n      }\n      paper-button:focus,\n      paper-button:hover {\n        background-color: var(--simple-colors-light-green-background1);\n        border-color: var(--simple-colors-light-green-background1);\n        outline: 2px solid var(--simple-colors-light-green-background1);\n      }\n      .buttons paper-button {\n        color: black;\n        font-size: 12px;\n        font-weight: bold;\n        text-transform: none;\n      }\n      #textarea {\n        margin-bottom: 16px;\n        padding: 10px;\n        width: 90%;\n        font-size: 10px;\n        resize: none;\n        width: 80%;\n        width: -webkit-fill-available;\n        background-color: transparent;\n        color: #EEEEEE;\n        font-family: monospace;\n      }\n    </style>\n    <app-drawer id="dialog" align="right">\n      <h3 class="title">[[title]]</h3>\n      <div style="height: 100%; overflow: auto;" class="pref-container">\n        <textarea id="textarea" rows="20"></textarea>\n        <div class="buttons">\n          <paper-button id="downloadfull" raised="">Download as full file</paper-button>\n          <paper-button id="download" raised="">Download HTML contents only</paper-button>\n          <paper-button id="copy" raised="">Copy to clipboard</paper-button>\n          <paper-button id="import" raised="" hidden$="[[!globalPreferences.haxDeveloperMode]]">Import textarea into HAX</paper-button>\n          <paper-button id="elementexport" raised="" hidden$="[[!globalPreferences.haxDeveloperMode]]">Copy as HAX schema to clipboard</paper-button>\n          <paper-button id="close" raised="">Close dialog</paper-button>\n        </div>\n      </div>\n      <paper-icon-button id="closedialog" on-tap="close" icon="icons:cancel" title="Close dialog"></paper-icon-button>\n    </app-drawer>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      #dialog {\n        z-index: 1000;\n        margin-top: 64px;\n      }\n      paper-icon-button#closedialog {\n        float: right;\n        top: 135px;\n        right: 0;\n        position: absolute;\n        padding: 4px;\n        margin: 0;\n        color: var(--simple-colors-light-green-background1);\n      }\n      .title {\n        margin-top: 32px;\n        text-align: center;\n        padding: 16px;\n        margin: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        font-size: 32px;\n        font-weight: bold;\n        font-family: sans-serif;\n        text-transform: uppercase;\n        color: var(--simple-colors-light-green-background1);\n      }\n      .pref-container {\n        text-align: left;\n        padding: 16px;\n      }\n      app-drawer {\n        --app-drawer-content-container: {\n          background-color: rgba(0, 0, 0, 0.7);\n        };\n        --app-drawer-width: 320px;\n      }\n      paper-button {\n        color: #222222;\n        text-transform: none;\n        margin:0;\n        background-color: #F8F8F8;\n        display: flex;\n        border-radius: 0px;\n        border-style: solid;\n        border-width: 1px;\n        min-width: unset;\n      }\n      paper-button:focus,\n      paper-button:hover {\n        background-color: var(--simple-colors-light-green-background1);\n        border-color: var(--simple-colors-light-green-background1);\n        outline: 2px solid var(--simple-colors-light-green-background1);\n      }\n      .buttons paper-button {\n        color: black;\n        font-size: 12px;\n        font-weight: bold;\n        text-transform: none;\n      }\n      #textarea {\n        margin-bottom: 16px;\n        padding: 10px;\n        width: 90%;\n        font-size: 10px;\n        resize: none;\n        width: 80%;\n        width: -webkit-fill-available;\n        background-color: transparent;\n        color: #EEEEEE;\n        font-family: monospace;\n      }\n    </style>\n    <app-drawer id="dialog" align="right">\n      <h3 class="title">[[title]]</h3>\n      <div style="height: 100%; overflow: auto;" class="pref-container">\n        <textarea id="textarea" rows="20"></textarea>\n        <div class="buttons">\n          <paper-button id="downloadfull" raised="">Download as full file</paper-button>\n          <paper-button id="download" raised="">Download HTML contents only</paper-button>\n          <paper-button id="copy" raised="">Copy to clipboard</paper-button>\n          <paper-button id="import" raised="" hidden\\$="[[!globalPreferences.haxDeveloperMode]]">Import textarea into HAX</paper-button>\n          <paper-button id="elementexport" raised="" hidden\\$="[[!globalPreferences.haxDeveloperMode]]">Copy as HAX schema to clipboard</paper-button>\n          <paper-button id="close" raised="">Close dialog</paper-button>\n        </div>\n      </div>\n      <paper-icon-button id="closedialog" on-tap="close" icon="icons:cancel" title="Close dialog"></paper-icon-button>\n    </app-drawer>\n'
      ]
    );
    _templateObject_e96d0970dbb911e89b94f594419eb4d2 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_e96d0970dbb911e89b94f594419eb4d2()
    ),
    is: "hax-export-dialog",
    listeners: {
      "download.tap": "download",
      "downloadfull.tap": "downloadfull",
      "import.tap": "importContent",
      "copy.tap": "selectBody",
      "close.tap": "close",
      "elementexport.tap": "htmlToHaxElements"
    },
    behaviors: [mtz.FileDownloadBehaviors, simpleColorsBehaviors],
    properties: {
      title: { type: String, value: "Export" },
      globalPreferences: { type: Object, value: {} }
    },
    ready: function ready() {
      document.body.appendChild(this);
      document.body.addEventListener(
        "hax-store-property-updated",
        this._haxStorePropertyUpdated.bind(this)
      );
    },
    attached: function attached() {
      this.fire("hax-register-export", this);
    },
    detached: function detached() {
      document.body.removeEventListener(
        "hax-store-property-updated",
        this._haxStorePropertyUpdated.bind(this)
      );
    },
    _haxStorePropertyUpdated: function _haxStorePropertyUpdated(e) {
      if (
        e.detail &&
        babelHelpers.typeof(e.detail.value) !== "undefined" &&
        e.detail.property
      ) {
        if ("object" === babelHelpers.typeof(e.detail.value)) {
          this.set(e.detail.property, null);
        }
        this.set(e.detail.property, e.detail.value);
      }
    },
    download: function download() {
      var data = this.contentToFile(!1);
      this.downloadFromData(data, "html", "my-new-code");
    },
    downloadfull: function downloadfull() {
      var data = this.contentToFile(!0);
      this.downloadFromData(data, "html", "my-new-webpage");
    },
    importContent: function importContent() {
      var htmlBody = this.$.textarea.value;
      return window.HaxStore.instance.activeHaxBody.importContent(htmlBody);
    },
    selectBody: function selectBody() {
      this.$.textarea.focus();
      this.$.textarea.select();
      document.execCommand("copy");
    },
    htmlToHaxElements: function htmlToHaxElements() {
      var elements = window.HaxStore.htmlToHaxElements(this.$.textarea.value),
        str = JSON.stringify(elements, null, 2),
        val = this.$.textarea.value;
      this.$.textarea.value = str;
      this.$.textarea.focus();
      this.$.textarea.select();
      document.execCommand("copy");
      this.$.textarea.value = val;
    },
    contentToFile: function contentToFile(full) {
      var content = "";
      if (full) {
        var elementList = window.HaxStore.instance.elementList,
          url = "https://lrnwebcomponents.github.io/hax-body/components";
        content = '\n      <!doctype html>\n      <html lang="en">\n        <head>\n          <meta charset="utf-8">\n          <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">\n          <title>hax-body demo</title>\n          <script src="'.concat(
          url,
          '/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>\n          <style>\n          body {\n            padding: 32px;\n          }\n          </style>\n      '
        );
        var ignoreList = ["iframe", "a", "img", "hr", "p"];
        for (var index in elementList) {
          if (-1 === ignoreList.indexOf(index)) {
            content +=
              '<script type="module" src="' +
              url +
              "/" +
              index +
              "/" +
              index +
              '.js" />' +
              "\n";
          }
        }
        content += "</head><body>";
        content += window.HaxStore.instance.activeHaxBody.haxToContent();
        content += "</body></html>";
      } else {
        content = window.HaxStore.instance.activeHaxBody.haxToContent();
      }
      return content;
    },
    toggleDialog: function toggleDialog() {
      if (this.$.dialog.opened) {
        this.close();
      } else {
        this.$.textarea.value = this.contentToFile(!1);
        window.HaxStore.instance.closeAllDrawers(this);
      }
    },
    open: function open() {
      this.$.dialog.open();
    },
    close: function close() {
      this.$.dialog.close();
    }
  });
});