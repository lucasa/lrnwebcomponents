define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/hax-body-behaviors.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@lrnwebcomponents/chartist-render/chartist-render.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js"],function(_exports,_polymerLegacy,_materializecssStyles,_haxBodyBehaviors,_schemaBehaviors,_chartistRender,_simpleColors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.ProgressDonut=void 0;function _templateObject_2cc7c240206711e9ab23cf057d85fb57(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style is=\"custom-style\" include=\"simple-colors\">\n      :host {\n        background-color: var(--simple-colors-background1, #ffffff);\n        overflow: visible;\n        display: block;\n      }\n      :host #wrapper {\n        margin: 0 auto;\n        position: relative;\n      }\n      :host #wrapper > * {\n        position: absolute;\n      }\n      :host #wrapper #chart {\n        left: 0;\n        top: 0;\n      }\n      :host #wrapper,\n      :host #wrapper #chart {\n        width: 250px;\n        height: 250px;\n      }\n      :host([size=\"xs\"]) #wrapper,\n      :host([size=\"xs\"]) #wrapper #chart {\n        width: 150px;\n        height: 150px;\n      }\n      :host([size=\"sm\"]) #wrapper,\n      :host([size=\"sm\"]) #wrapper #chart {\n        width: 200px;\n        height: 200px;\n      }\n      :host([size=\"lg\"]) #wrapper,\n      :host([size=\"lg\"]) #wrapper #chart {\n        width: 300px;\n        height: 300px;\n      }\n      :host([size=\"xl\"]) #wrapper,\n      :host([size=\"xl\"]) #wrapper #chart {\n        width: 400px;\n        height: 400px;\n      }\n      :host #wrapper > #image {\n        left: 20%;\n        top: 20%;\n        width: 60%;\n        height: 60%;\n        -webkit-clip-path: circle(50% at 50% 50%);\n        clip-path: circle(50% at 50% 50%);\n      }\n    </style>\n    <div id=\"wrapper\">\n      <img\n        id=\"image\"\n        alt$=\"[[imageAlt]]\"\n        aria-hidden=\"true\"\n        hidden$=\"[[!imageSrc]]\"\n        src$=\"[[imageSrc]]\"\n        style$=\"[[imageStyle]]\"\n      />\n      <chartist-render\n        id=\"chart\"\n        data$=\"[[data]]\"\n        chart-desc$=\"[[desc]]\"\n        chart-title=\"[[title]]\"\n        scale=\"ct-square\"\n        options$=\"[[options]]\"\n        title$=\"[[title]]\"\n        type=\"pie\"\n      >\n      </chartist-render>\n    </div>\n  "],["\n    <style is=\"custom-style\" include=\"simple-colors\">\n      :host {\n        background-color: var(--simple-colors-background1, #ffffff);\n        overflow: visible;\n        display: block;\n      }\n      :host #wrapper {\n        margin: 0 auto;\n        position: relative;\n      }\n      :host #wrapper > * {\n        position: absolute;\n      }\n      :host #wrapper #chart {\n        left: 0;\n        top: 0;\n      }\n      :host #wrapper,\n      :host #wrapper #chart {\n        width: 250px;\n        height: 250px;\n      }\n      :host([size=\"xs\"]) #wrapper,\n      :host([size=\"xs\"]) #wrapper #chart {\n        width: 150px;\n        height: 150px;\n      }\n      :host([size=\"sm\"]) #wrapper,\n      :host([size=\"sm\"]) #wrapper #chart {\n        width: 200px;\n        height: 200px;\n      }\n      :host([size=\"lg\"]) #wrapper,\n      :host([size=\"lg\"]) #wrapper #chart {\n        width: 300px;\n        height: 300px;\n      }\n      :host([size=\"xl\"]) #wrapper,\n      :host([size=\"xl\"]) #wrapper #chart {\n        width: 400px;\n        height: 400px;\n      }\n      :host #wrapper > #image {\n        left: 20%;\n        top: 20%;\n        width: 60%;\n        height: 60%;\n        -webkit-clip-path: circle(50% at 50% 50%);\n        clip-path: circle(50% at 50% 50%);\n      }\n    </style>\n    <div id=\"wrapper\">\n      <img\n        id=\"image\"\n        alt\\$=\"[[imageAlt]]\"\n        aria-hidden=\"true\"\n        hidden\\$=\"[[!imageSrc]]\"\n        src\\$=\"[[imageSrc]]\"\n        style\\$=\"[[imageStyle]]\"\n      />\n      <chartist-render\n        id=\"chart\"\n        data\\$=\"[[data]]\"\n        chart-desc\\$=\"[[desc]]\"\n        chart-title=\"[[title]]\"\n        scale=\"ct-square\"\n        options\\$=\"[[options]]\"\n        title\\$=\"[[title]]\"\n        type=\"pie\"\n      >\n      </chartist-render>\n    </div>\n  "]);_templateObject_2cc7c240206711e9ab23cf057d85fb57=function _templateObject_2cc7c240206711e9ab23cf057d85fb57(){return data};return data}var ProgressDonut=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_2cc7c240206711e9ab23cf057d85fb57()),is:"progress-donut",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],listeners:{"chartist-render-draw":"_onCreated"},properties:{complete:{type:Array,value:[]},donutThickness:{type:Number},colors:{type:Array,value:null},data:{type:Array,computed:"_getData(complete)"},desc:{type:String,value:null},options:{type:Array,computed:"_getOptions(complete,total,size,colors,accentColor,dark)"},imageSrc:{type:String,value:null,reflectToAttribute:!0},imageAlt:{type:String,value:null,reflectToAttribute:!0},imageStyle:{type:String,computed:"_getImageStyle(size)"},size:{type:String,value:"md",reflectToAttribute:!0},title:{type:String},accentColor:{type:String,value:"grey",reflectToAttribute:!0},total:{type:Number,value:100}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Sample gizmo",description:"The user will be able to see this for selection in a UI.",icon:"av:play-circle-filled",color:"grey",groups:["Video","Media"],handles:[{type:"video",url:"source"}],meta:{author:"Your organization on github"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}};this.setHaxProperties(props)},_getData:function _getData(complete){return{series:complete}},_getImageStyle:function _getImageStyle(size){var offset="22%",diameter="56%";if("xs"===this.size){offset="32%";diameter="36%"}else if("sm"===this.size){offset="26%";diameter="48%"}else if("lg"===this.size){offset="20%";diameter="60%"}else if("xl"===this.size){offset="17%";diameter="66%"}return"left: "+offset+"; top: "+offset+"; width: "+diameter+"; height: "+diameter+";"},_getOptions:function _getOptions(complete,total,size,colors,accentColor,dark){for(var sum=0,i=0;i<complete.length;i++){sum+=parseFloat(complete[i])}return{donut:!0,showLabel:!1,startAngle:0,total:Math.max(sum,total)}},_onCreated:function _onCreated(e){this.__chart=e.detail;this.makeChart(this.__chart)},makeChart:function makeChart(chart){if(chart!==void 0){var colors=this.colors,strokeWidth="10%",hex=_simpleColors.SimpleColors.colors,accent=null!==this.accentColor?this.accentColor.replace(/-([a-z])/g,function(g){return g[1].toUpperCase()}):null;if(colors===void 0||null===colors||0===colors.length){if(null!==accent&&null!==hex[accent]){colors=this.dark?[hex[accent][9],hex[accent][6],hex[accent][3],hex[accent][7],hex[accent][4]]:[hex[accent][0],hex[accent][3],hex[accent][5],hex[accent][2],hex[accent][4]]}else{colors=this.dark?[hex.orange[6],hex.pink[4],hex.purple[5],hex.cyan[6],hex.lime[5]]:[hex.pink[5],hex.deepPurple[4],hex.blue[3],hex.teal[4],hex.yellow[5]]}}if("xs"===this.size){strokeWidth="8%"}else if("sm"===this.size){strokeWidth="9%"}else if("lg"===this.size){strokeWidth="11%"}else if("xl"===this.size){strokeWidth="12%"}chart.on("draw",function(data){data.element._node.style.strokeWidth=strokeWidth;data.element._node.style.stroke=colors[data.index%colors.length];if("slice"===data.type){var pathLength=data.element._node.getTotalLength();data.element.attr({"stroke-dasharray":pathLength+"px "+pathLength+"px"});var animationDefinition={"stroke-dashoffset":{id:"anim"+data.index,dur:500,from:-pathLength+"px",to:"0px",easing:Chartist.Svg.Easing.easeOutQuint,fill:"freeze"}};if(0!==data.index){animationDefinition["stroke-dashoffset"].begin="anim"+(data.index-1)+".end"}data.element.attr({"stroke-dashoffset":-pathLength+"px"});data.element.animate(animationDefinition,!1)}});return chart}}});_exports.ProgressDonut=ProgressDonut});