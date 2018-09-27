import { HAXWiring } from "./lib/HAXWiring.js";
class HaxBodyBehaviors extends HTMLElement {
  getTemplate() {
    return `
<style>

</style>
`;
  }
  static get properties() {
    return {};
  }
  static get tag() {
    return "hax-body-behaviors";
  }
  get templateUrl() {
    return "hax-body-behaviors.html";
  }
  get propertiesUrl() {
    return "hax-body-behaviors-properties.json";
  }
  get styleUrl() {
    return "hax-body-behaviors.css";
  }
  constructor(delayRender = !1) {
    super();
    this.tag = HaxBodyBehaviors.tag;
    this.HAXWiring = new HAXWiring();
    let obj = HaxBodyBehaviors.properties;
    for (let p in obj) {
      if (obj.hasOwnProperty(p)) {
        this[p] = obj[p].value;
      }
    }
    this._queue = [];
    this.template = document.createElement("template");
    this.attachShadow({ mode: "open" });
    if (!delayRender) {
      this.render();
    }
  }
  connectedCallback() {
    if (window.ShadyCSS) {
      window.ShadyCSS.styleElement(this);
    }
    if (this._queue.length) {
      this._processQueue();
    }
  }
  _copyAttribute(name, to) {
    const recipients = this.shadowRoot.querySelectorAll(to),
      value = this.getAttribute(name),
      fname = null == value ? "removeAttribute" : "setAttribute";
    for (const node of recipients) {
      node[fname](name, value);
    }
  }
  _queueAction(action) {
    this._queue.push(action);
  }
  _processQueue() {
    this._queue.forEach(action => {
      this[`_${action.type}`](action.data);
    });
    this._queue = [];
  }
  _setProperty({ name, value }) {
    this[name] = value;
  }
  render() {
    this.shadowRoot.innerHTML = null;
    this.template.innerHTML = this.html;
    if (window.ShadyCSS) {
      window.ShadyCSS.prepareTemplate(this.template, this.tag);
    }
    this.shadowRoot.appendChild(this.template.content.cloneNode(!0));
  }
}
window.customElements.define(HaxBodyBehaviors.tag, HaxBodyBehaviors);
