define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/paper-input/paper-input.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js","./lib/simple-search-content.js"],function(_exports,_polymerElement,_ironIcons,_paperInput,_paperTooltip,_simpleSearchContent){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleSearch=void 0;function _templateObject_11406790206511e984d47f5890a4e3ef(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style is=\"custom-style\">\n        :host {\n          display: flex;\n          align-items: flex-end;\n          justify-content: space-between;\n          width: 100%;\n        }\n        :host #input {\n          flex-grow: 2;\n          margin-right: 4px;\n          --paper-input-container-input-color: var(\n            --simple-search-input-text-color,\n            #000\n          );\n          --paper-input-container-shared-input-style_-_color: var(\n            --simple-search-input-text-color,\n            #000\n          );\n          --paper-input-container-focus-color: var(\n            --simple-search-input-line-color,\n            #000\n          );\n          --paper-input-container-color: var(\n            --simple-search-input-placeholder-color,\n            #222\n          );\n          color: var(--simple-search-input-placeholder-color, #222);\n          @apply --simple-search-container;\n        }\n        :host #xofy {\n          margin: 8px;\n        }\n        :host button {\n          margin: 8px 0 8px;\n          color: var(--simple-search-button-color, #111);\n          background-color: var(--simple-search-button-bg-color, #eee);\n          border-color: var(--simple-search-button-border-color, #ccc);\n          @apply --simple-search-button;\n        }\n        :host button:not([disabled]):focus,\n        :host button:not([disabled]):hover {\n          cursor: pointer;\n          color: var(--simple-search-button-hover-color, #000);\n          background-color: var(--simple-search-button-hover-bg-color, #fff);\n          border-color: var(--simple-search-button-hover-border-color, #ddd);\n          @apply --simple-search-button-hover;\n        }\n        :host button[disabled] {\n          cursor: not-allowed;\n          color: var(--simple-search-button-disabled-color, #999);\n          background-color: var(--simple-search-button-disabled-bg-color, #eee);\n          border-color: var(--simple-search-button-disabled-border-color, #ccc);\n          @apply --simple-search-button-disabled;\n        }\n        :host button:not([controls]) {\n          display: none;\n        }\n        :host [shrink-hide] {\n          display: none;\n        }\n      </style>\n      <paper-input\n        id=\"input\"\n        always-float-label$=\"[[alwaysFloatLabel]]\"\n        label=\"[[searchInputLabel]]\"\n        no-label-float$=\"[[noLabelFloat]]\"\n        on-change=\"_handleChange\"\n      >\n        <iron-icon icon=\"[[searchInputIcon]]\" slot=\"prefix\"></iron-icon>\n      </paper-input>\n      <div id=\"xofy\" shrink-hide$=\"[[noSearch]]\"></div>\n      <div shrink-hide$=\"[[noResults]]\">\n        <button\n          id=\"prev\"\n          aria-label=\"[[prevButtonLabel]]\"\n          aria-role=\"button\"\n          controls$=\"[[controls]]\"\n          disabled$=\"[[prevButtonDisabled]]\"\n          on-tap=\"_navigateResults\"\n          tabindex=\"0\"\n        >\n          <iron-icon icon=\"[[prevButtonIcon]]\"></iron-icon>\n        </button>\n        <paper-tooltip for=\"prev\">[[prevButtonLabel]]</paper-tooltip>\n        <button\n          id=\"next\"\n          aria-label=\"[[nextButtonLabel]]\"\n          aria-role=\"button\"\n          controls$=\"[[controls]]\"\n          disabled$=\"[[nextButtonDisabled]]\"\n          on-tap=\"_navigateResults\"\n          tabindex=\"0\"\n        >\n          <iron-icon icon$=\"[[nextButtonIcon]]\"></iron-icon>\n        </button>\n        <paper-tooltip for=\"next\">[[nextButtonLabel]]</paper-tooltip>\n      </div>\n    "],["\n      <style is=\"custom-style\">\n        :host {\n          display: flex;\n          align-items: flex-end;\n          justify-content: space-between;\n          width: 100%;\n        }\n        :host #input {\n          flex-grow: 2;\n          margin-right: 4px;\n          --paper-input-container-input-color: var(\n            --simple-search-input-text-color,\n            #000\n          );\n          --paper-input-container-shared-input-style_-_color: var(\n            --simple-search-input-text-color,\n            #000\n          );\n          --paper-input-container-focus-color: var(\n            --simple-search-input-line-color,\n            #000\n          );\n          --paper-input-container-color: var(\n            --simple-search-input-placeholder-color,\n            #222\n          );\n          color: var(--simple-search-input-placeholder-color, #222);\n          @apply --simple-search-container;\n        }\n        :host #xofy {\n          margin: 8px;\n        }\n        :host button {\n          margin: 8px 0 8px;\n          color: var(--simple-search-button-color, #111);\n          background-color: var(--simple-search-button-bg-color, #eee);\n          border-color: var(--simple-search-button-border-color, #ccc);\n          @apply --simple-search-button;\n        }\n        :host button:not([disabled]):focus,\n        :host button:not([disabled]):hover {\n          cursor: pointer;\n          color: var(--simple-search-button-hover-color, #000);\n          background-color: var(--simple-search-button-hover-bg-color, #fff);\n          border-color: var(--simple-search-button-hover-border-color, #ddd);\n          @apply --simple-search-button-hover;\n        }\n        :host button[disabled] {\n          cursor: not-allowed;\n          color: var(--simple-search-button-disabled-color, #999);\n          background-color: var(--simple-search-button-disabled-bg-color, #eee);\n          border-color: var(--simple-search-button-disabled-border-color, #ccc);\n          @apply --simple-search-button-disabled;\n        }\n        :host button:not([controls]) {\n          display: none;\n        }\n        :host [shrink-hide] {\n          display: none;\n        }\n      </style>\n      <paper-input\n        id=\"input\"\n        always-float-label\\$=\"[[alwaysFloatLabel]]\"\n        label=\"[[searchInputLabel]]\"\n        no-label-float\\$=\"[[noLabelFloat]]\"\n        on-change=\"_handleChange\"\n      >\n        <iron-icon icon=\"[[searchInputIcon]]\" slot=\"prefix\"></iron-icon>\n      </paper-input>\n      <div id=\"xofy\" shrink-hide\\$=\"[[noSearch]]\"></div>\n      <div shrink-hide\\$=\"[[noResults]]\">\n        <button\n          id=\"prev\"\n          aria-label=\"[[prevButtonLabel]]\"\n          aria-role=\"button\"\n          controls\\$=\"[[controls]]\"\n          disabled\\$=\"[[prevButtonDisabled]]\"\n          on-tap=\"_navigateResults\"\n          tabindex=\"0\"\n        >\n          <iron-icon icon=\"[[prevButtonIcon]]\"></iron-icon>\n        </button>\n        <paper-tooltip for=\"prev\">[[prevButtonLabel]]</paper-tooltip>\n        <button\n          id=\"next\"\n          aria-label=\"[[nextButtonLabel]]\"\n          aria-role=\"button\"\n          controls\\$=\"[[controls]]\"\n          disabled\\$=\"[[nextButtonDisabled]]\"\n          on-tap=\"_navigateResults\"\n          tabindex=\"0\"\n        >\n          <iron-icon icon\\$=\"[[nextButtonIcon]]\"></iron-icon>\n        </button>\n        <paper-tooltip for=\"next\">[[nextButtonLabel]]</paper-tooltip>\n      </div>\n    "]);_templateObject_11406790206511e984d47f5890a4e3ef=function _templateObject_11406790206511e984d47f5890a4e3ef(){return data};return data}var SimpleSearch=function(_PolymerElement){babelHelpers.inherits(SimpleSearch,_PolymerElement);function SimpleSearch(){babelHelpers.classCallCheck(this,SimpleSearch);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleSearch).apply(this,arguments))}babelHelpers.createClass(SimpleSearch,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleSearch.prototype),"ready",this).call(this);var root=this,search=root.$.input;root._getSearchText(search.value)}},{key:"_handleChange",value:function _handleChange(e){var root=this;root._getSearchText(root.$.input.value);root.resultCount=0;root.resultPointer=0;root.dispatchEvent(new CustomEvent("simple-search",{detail:{search:root,content:e}}))}},{key:"_hasNoResults",value:function _hasNoResults(resultCount){return 1>resultCount}},{key:"_hasNoSearch",value:function _hasNoSearch(searchTerms){return 1>searchTerms.length}},{key:"_getResultsSpan",value:function _getResultsSpan(noSearch,resultPointer,resultCount){var html="";if(0<resultCount&&0<resultPointer){html=resultPointer+"/"+resultCount}else{html=" "+resultCount}this.$.xofy.innerHTML=html;return this.$.xofy.innerHTML}},{key:"_navigateResults",value:function _navigateResults(e){var root=this,increment="next"===e.currentTarget.id?1:-1;if(0<this.resultPointer+increment&&this.resultPointer+increment<=this.resultCount){this.resultPointer+=increment;this.dispatchEvent(new CustomEvent("goto-result",{detail:this.resultPointer}))}}},{key:"_isNavButtonDisabled",value:function _isNavButtonDisabled(pointer,count,span,inc){return""==span||0>=pointer+inc||pointer+inc>count}},{key:"_getSearchText",value:function _getSearchText(find){var temp=[];if(find!==void 0&&null!==find){temp=find.split(/[\"\']/gm);for(var i=0;i<temp.length;i++){temp[i]=temp[i].trim();if(""===temp[i])temp.splice(i,1)}}this.set("searchTerms",[]);this.set("searchTerms",temp.slice(0))}},{key:"findMatches",value:function findMatches(content){for(var root=this,terms=root.searchTerms,modifier=this.caseSensitive?"gm":"gim",results=content.slice(0),updateResults=function updateResults(find){for(var i=0;i<results.length;i++){if(!1===results[i].matched){var regex=new RegExp("\\b"+find+"\\b",modifier),text=results[i].text,start=text.search(regex),end=start+find.length;if(-1<start){root.resultCount+=1;var pre=text.slice(0,start),match=text.slice(start,end),post=text.slice(end,text.length),update=results.splice(i,1,{matched:!1,text:pre,searchObject:root},{matched:!0,matchNumber:root.resultCount,text:match,searchObject:root},{matched:!1,text:post,searchObject:root})}}}},i=0;i<terms.length;i++){updateResults(terms[i])}root.resultPointer=0;return results}}],[{key:"is",get:function get(){return"simple-search"}},{key:"properties",get:function get(){return{alwaysFloatLabel:{type:Boolean,value:!1},caseSensitive:{type:Boolean,value:null},controls:{type:String,value:null},nextButtonDisabled:{type:Boolean,computed:"_isNavButtonDisabled(resultPointer,resultCount,resultsSpan,1)"},nextButtonIcon:{type:String,value:"arrow-forward"},nextButtonLabel:{type:String,value:"next result"},noLabelFloat:{type:Boolean,value:!1},noResults:{type:Boolean,computed:"_hasNoResults(resultCount)"},noSearch:{type:Boolean,computed:"_hasNoSearch(searchTerms)"},prevButtonDisabled:{type:Boolean,computed:"_isNavButtonDisabled(resultPointer,resultCount,resultsSpan,-1)"},prevButtonIcon:{type:String,value:"arrow-back"},prevButtonLabel:{type:String,value:"previous result"},resultCount:{type:Number,value:0},resultPointer:{type:Number,value:0},resultsSpan:{type:String,computed:"_getResultsSpan(noSearch,resultPointer,resultCount)"},searchInputIcon:{type:String,value:"search"},searchInputLabel:{type:String,value:"search"},searchTerms:{type:Array,value:[]},target:{type:Object,value:null}}}},{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_11406790206511e984d47f5890a4e3ef())}}]);return SimpleSearch}(_polymerElement.PolymerElement);_exports.SimpleSearch=SimpleSearch;customElements.define(SimpleSearch.is,SimpleSearch)});