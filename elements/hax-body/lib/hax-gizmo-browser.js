import { LitElement, html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/grafitto-filter/grafitto-filter.js";
import {
  winEventsElement,
  haxElementToNode
} from "@lrnwebcomponents/utils/utils.js";

/**
 * `hax-gizmo-browser`
 * `Browse a list of gizmos. This provides a listing of custom elements for people to search and select based on what have been defined as gizmos for users to select.`
 * @microcopy - the mental model for this element
 * - gizmo - silly name for the general public when talking about custom elements and what it provides in the end.
 */
class HaxGizmoBrowser extends winEventsElement(LitElement) {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        .toolbar-inner {
          padding: 0;
          position: sticky;
          background-color: white;
          width: 100%;
          top: 0;
          z-index: 1;
        }
        .item-wrapper {
          text-align: center;
        }
      `
    ];
  }
  constructor() {
    super();
    this.__winEvents = {
      "hax-store-property-updated": "_haxStorePropertyUpdated"
    };
    this.__gizmoList = [];
    this.filtered = [];
    import("@lrnwebcomponents/simple-fields/lib/simple-fields-field.js");
  }
  render() {
    return html`
      <div class="toolbar-inner">
        <simple-fields-field
          id="inputfilter"
          @value-changed="${this.inputfilterChanged}"
          aria-controls="filter"
          label="Filter"
          type="text"
          auto-validate=""
        ></simple-fields-field>
      </div>
      <grafitto-filter
        id="filter"
        .items="${this.__gizmoList}"
        like=""
        where="title"
        like=""
        @filtered-changed="${this.filteredChanged}"
        ><template></template
      ></grafitto-filter>
      <div class="item-wrapper">
        ${this.filtered.map(
          gizmo => html`
            <hax-tray-button
              voice-command="insert ${gizmo.title}"
              draggable="true"
              @dragstart="${this._dragStart}"
              @dragend="${this._dragEnd}"
              index="${gizmo.index}"
              label="${gizmo.title}"
              event-name="insert-tag"
              event-data="${gizmo.tag}"
              icon="${gizmo.icon}"
              color="${gizmo.color}"
              drag-color="${gizmo.color}"
            ></hax-tray-button>
          `
        )}
      </div>
    `;
  }
  static get tag() {
    return "hax-gizmo-browser";
  }
  static get properties() {
    return {
      filtered: {
        type: Array
      },
      __gizmoList: {
        type: Array
      }
    };
  }
  /**
   * Drag start so we know what target to set
   */
  _dragStart(e) {
    // create the tag
    let schema = window.HaxStore.instance.haxSchemaFromTag(e.target.eventData);
    var target;
    if (schema.gizmo.tag && schema.demoSchema && schema.demoSchema[0]) {
      target = haxElementToNode(schema.demoSchema[0]);
    } else {
      target = document.createElement(e.target.eventData);
    }
    window.HaxStore.instance.__dragTarget = target;
    if (e.dataTransfer) {
      this.crt = target.cloneNode(true);
      if (schema.gizmo.tag && schema.demoSchema && schema.demoSchema[0]) {
        this.crt.style.width = "200px";
        this.crt.style.height = "200px";
      } else {
        this.crt.style.position = "absolute";
        this.crt.style.top = "-1000px";
        this.crt.style.right = "-1000px";
        this.crt.style.transform = "scale(0.25)";
      }
      this.crt.style.opacity = ".8";
      this.crt.style.backgroundColor = e.target.getAttribute("drag-color");
      e.dataTransfer.dropEffect = "move";
      document.body.appendChild(this.crt);
      e.dataTransfer.setDragImage(this.crt, 0, 0);
    }
    e.stopPropagation();
    e.stopImmediatePropagation();
    // show where things can be dropped only during the drag
    if (
      !window.HaxStore.instance.activeHaxBody.openDrawer &&
      window.HaxStore.instance.editMode
    ) {
      let children = window.HaxStore.instance.activeHaxBody.children;
      // walk the children and apply the draggable state needed
      for (var i in children) {
        if (children[i].classList && target !== children[i]) {
          children[i].classList.add("hax-mover");
        }
      }
    }
  }
  /**
   * When we end dragging ensure we remove the mover class.
   */
  _dragEnd(e) {
    this.crt.remove();
    let children = window.HaxStore.instance.activeHaxBody.children;
    // walk the children and apply the draggable state needed
    for (var i in children) {
      if (typeof children[i].classList !== typeof undefined) {
        children[i].classList.remove(
          "hax-mover",
          "hax-hovered",
          "hax-moving",
          "grid-plate-active-item"
        );
      }
    }
  }
  filteredChanged(e) {
    this.filtered = [...e.detail.value];
  }
  inputfilterChanged(e) {
    this.shadowRoot.querySelector("#filter").like = e.target.value;
  }
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "activeApp") {
        this._activeAppChanged(this[propName], oldValue);
      }
      if (propName == "filtered") {
        this.requestUpdate();
      }
    });
  }
  /**
   * Store updated, sync.
   */
  _haxStorePropertyUpdated(e) {
    if (
      this.shadowRoot &&
      e.detail &&
      e.detail.value &&
      e.detail.property === "gizmoList"
    ) {
      this.resetBrowser();
    }
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // probably not required but just to be safe
    this.resetBrowser();
  }

  /**
   * Reset this browser.
   */
  resetBrowser() {
    this.__gizmoList = window.HaxStore.instance.gizmoList.filter((gizmo, i) => {
      // remove inline and hidden references
      if (gizmo.meta && (gizmo.meta.inlineOnly || gizmo.meta.hidden)) {
        return false;
      }
      return true;
    });
    this.filtered = [...this.__gizmoList];
    this.shadowRoot.querySelector("#inputfilter").value = "";
    this.shadowRoot.querySelector("#filter").value = "";
    this.shadowRoot.querySelector("#filter").filter();
    this.shadowRoot.querySelector("#filter").where = "title";
    this.shadowRoot.querySelector("#filter").like = "";
  }
}
window.customElements.define(HaxGizmoBrowser.tag, HaxGizmoBrowser);
export { HaxGizmoBrowser };
