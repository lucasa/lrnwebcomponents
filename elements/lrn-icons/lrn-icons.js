import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";
var $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");

$_documentContainer.innerHTML = `<iron-iconset-svg size="30" name="lrn">
  <svg viewBox="0 0 30 30" preserveAspectRatio="xMidYMid meet">
    <defs>
      <!-- explore -->
      <g id="compass">
        <g id="explore">
          <g id="outline">
            <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path>
          </g>
        </g>
      </g>

      <!-- save -->
      <g id="save">
        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
      </g>
      <!-- cancel -->
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
      </g>
      <!-- done -->
      <g id="done">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z">
      </path></g>
      <!-- input -->
      <g id="input">
        <path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path>
      </g>
      <!-- local-library -->
      <g id="resources">
        <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path>
      </g>
      <!-- info-outline -->
      <g id="syllabus">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>
      </g>
      <!-- mode-edit -->
      <g id="edit">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
      </g>
      <!-- accessibility -->
      <g id="accessibility">
        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path>
      </g>
      <!-- share -->
      <g id="share">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
      </g>
      <!-- more-vert -->
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </g>

      <!-- about -->
      <g id="about">
        <g>
          <path d="M14.4,6.2c1,0,1.9,0.1,2.6,0.4c0.8,0.2,1.4,0.6,1.8,1L24,6.4l0.2,0.3L21.8,17c-0.1,0.3-0.2,0.8-0.3,1.3s-0.2,0.9-0.2,1.2
          c0,0.6,0.1,1.1,0.4,1.3c0.3,0.2,0.8,0.4,1.5,0.4c0.3,0,0.7-0.1,1.1-0.2c0.4-0.1,0.7-0.2,0.9-0.3L25,22.1c-1.1,0.4-2,0.8-2.6,1
          c-0.7,0.2-1.4,0.3-2.3,0.3c-1.1,0-2.1-0.2-2.7-0.7c-0.7-0.5-1.2-1-1.4-1.7h-0.1c-0.4,0.3-0.8,0.6-1.1,0.9
          c-0.4,0.3-0.8,0.6-1.3,0.8c-0.5,0.2-1,0.4-1.5,0.6c-0.5,0.2-1.1,0.2-1.7,0.2c-1.9,0-3.4-0.6-4.4-1.7c-1-1.1-1.5-2.7-1.5-4.7
          c0-1.5,0.3-3,0.8-4.3c0.5-1.3,1.3-2.5,2.2-3.5c0.9-1,2-1.8,3.2-2.4C11.7,6.5,13,6.2,14.4,6.2 M12.8,21.1c0.5,0,1-0.2,1.5-0.5
          c0.5-0.3,0.9-0.7,1.3-1.1l2.1-9.1c0-0.2,0-0.5-0.1-0.9c-0.1-0.3-0.2-0.6-0.4-0.9c-0.2-0.3-0.5-0.5-0.8-0.7
          c-0.3-0.2-0.7-0.2-1.2-0.2c-0.7,0-1.4,0.3-2,0.8c-0.6,0.5-1.2,1.2-1.6,2.1c-0.5,0.9-0.8,1.9-1.1,3c-0.3,1.2-0.4,2.3-0.4,3.5
          c0,0.5,0,1.1,0.1,1.5c0.1,0.5,0.2,0.9,0.4,1.2c0.2,0.3,0.5,0.6,0.8,0.8C11.9,21,12.3,21.1,12.8,21.1 M25.4,20.6L25.4,20.6
           M14.4,4.2c-1.7,0-3.3,0.4-4.8,1.1C8.2,5.9,6.9,6.9,5.8,8.1c-1.1,1.2-1.9,2.6-2.6,4.1c-0.6,1.6-1,3.3-1,5.1c0,2.5,0.7,4.5,2,6
          c1.4,1.6,3.4,2.4,5.9,2.4c0.8,0,1.6-0.1,2.3-0.3c0.6-0.2,1.2-0.4,1.8-0.7c0.4-0.2,0.8-0.5,1.2-0.7c0.2,0.2,0.5,0.4,0.8,0.6
          c1,0.7,2.3,1,3.8,1c1.1,0,2.1-0.2,2.9-0.5c0.7-0.2,1.6-0.6,2.7-1c0.6-0.2,1.1-0.8,1.2-1.4l0.3-1.4c0.1-0.2,0.1-0.4,0.1-0.6
          c0-1.1-0.9-2-2-2c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.3,0-0.5,0.1-0.7,0.2c0,0-0.2,0.1-0.7,0.2
          c-0.2,0.1-0.4,0.1-0.5,0.1c0-0.1,0-0.3,0.1-0.5c0.1-0.5,0.2-0.9,0.3-1.2l2.5-10.3c0.2-0.6,0-1.3-0.4-1.8l-0.2-0.3
          c-0.4-0.4-0.9-0.7-1.5-0.7c-0.1,0-0.3,0-0.4,0l-4.3,0.9c-0.5-0.3-1.1-0.5-1.7-0.7C16.7,4.3,15.6,4.2,14.4,4.2L14.4,4.2z
           M12.8,19.1c-0.2,0-0.3,0-0.3,0c0,0,0,0,0-0.1c0-0.1-0.1-0.2-0.2-0.5c-0.1-0.3-0.1-0.7-0.1-1.2c0-1,0.1-2.1,0.3-3.1
          c0.2-1,0.5-1.8,0.9-2.5c0.4-0.7,0.8-1.2,1.2-1.5c0.3-0.3,0.6-0.3,0.7-0.3c0.2,0,0.3,0,0.4,0c0,0,0,0,0,0.1c0,0.1,0,0.2,0,0.3
          l-1.9,8.2c-0.2,0.2-0.4,0.3-0.6,0.5C13.1,19.1,12.9,19.1,12.8,19.1L12.8,19.1z"></path>
        </g>
      </g>
      <!-- plus -->
      <g id="plus">
        <!-- add -->
        <g id="add">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </g>
      </g>
      <!-- apps -->
      <g id="apps">
        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
      </g>
      <!-- network -->
      <g id="network">
        <path d="M22.6,12.2L24,13c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2c0.4-0.2,0.6-0.6,0.6-1.1V8.3c0-0.5-0.2-0.9-0.6-1.1L25.2,6
          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1v1.6c0,0.5-0.2,0.9-0.6,1.1l-3,1.8c-0.4,0.2-0.9,0.2-1.3,0l0,0
          c-0.4-0.2-0.6-0.6-0.6-1.1V8c0-0.5,0.2-0.9,0.6-1.1l1.4-0.8c0.4-0.2,0.6-0.6,0.6-1.1V2.6c0-0.5-0.2-0.9-0.6-1.1l-2.1-1.2
          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1V5c0,0.5,0.2,0.9,0.6,1.1l1.4,0.8c0.4,0.2,0.6,0.6,0.6,1.1v3.7
          c0,0.5-0.2,0.9-0.6,1.1h0c-0.4,0.2-0.9,0.2-1.3,0l-3-1.8C9,10.8,8.7,10.4,8.7,9.9V8.3c0-0.5-0.2-0.9-0.6-1.1L6,6
          C5.6,5.8,5.1,5.8,4.8,6L2.7,7.2C2.3,7.5,2,7.9,2,8.3v2.4c0,0.5,0.2,0.9,0.6,1.1L4.8,13c0.4,0.2,0.9,0.2,1.3,0l1.4-0.8
          c0.4-0.2,0.9-0.2,1.3,0l3,1.8c0.4,0.2,0.6,0.6,0.6,1.1v0c0,0.5-0.2,0.9-0.6,1.1l-3,1.8c-0.4,0.2-0.9,0.2-1.3,0L6,17.1
          c-0.4-0.2-0.9-0.2-1.3,0l-2.1,1.2c-0.4,0.2-0.6,0.6-0.6,1.1v2.4c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2
          c0.4-0.2,0.6-0.6,0.6-1.1v-1.6c0-0.5,0.2-0.9,0.6-1.1l3-1.7c0.4-0.2,0.9-0.2,1.3,0l0,0c0.4,0.2,0.6,0.6,0.6,1.1V22
          c0,0.5-0.2,0.9-0.6,1.1l-1.4,0.8c-0.4,0.2-0.6,0.6-0.6,1.1v2.4c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2
          c0.4-0.2,0.6-0.6,0.6-1.1V25c0-0.5-0.2-0.9-0.6-1.1l-1.4-0.8c-0.4-0.2-0.6-0.6-0.6-1.1v-3.5c0-0.5,0.2-0.9,0.6-1.1l0,0
          c0.4-0.2,0.9-0.2,1.3,0l3,1.7c0.4,0.2,0.6,0.6,0.6,1.1v1.6c0,0.5,0.2,0.9,0.6,1.1l2.1,1.2c0.4,0.2,0.9,0.2,1.3,0l2.1-1.2
          c0.4-0.2,0.6-0.6,0.6-1.1v-2.4c0-0.5-0.2-0.9-0.6-1.1l-2.1-1.2c-0.4-0.2-0.9-0.2-1.3,0l-1.4,0.8c-0.4,0.2-0.9,0.2-1.3,0l-3-1.7
          c-0.4-0.2-0.6-0.6-0.6-1.1v0c0-0.5,0.2-0.9,0.6-1.1l3-1.7C21.7,12,22.2,12,22.6,12.2z M7.4,10.3c0,0.2-0.1,0.5-0.3,0.6l-0.4,0.2
          l-0.9,0.5c-0.2,0.1-0.5,0.1-0.7,0l-1.3-0.7c-0.2-0.1-0.3-0.3-0.3-0.6V8.8c0-0.2,0.1-0.5,0.3-0.6l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0
          L7,8.2c0.2,0.1,0.3,0.3,0.3,0.6v1.1V10.3z M26.6,19.9v1.5c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0L23,22
          c-0.2-0.1-0.3-0.3-0.3-0.6v-1.1v-0.4c0-0.2,0.1-0.5,0.3-0.6l0.4-0.2l0.9-0.5c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7
          C26.4,19.4,26.6,19.6,26.6,19.9z M23,8.2l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7c0.2,0.1,0.3,0.3,0.3,0.6v1.5
          c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0l-1-0.6L23,10.9c-0.2-0.1-0.3-0.3-0.3-0.6V9.9V8.8
          C22.6,8.6,22.8,8.3,23,8.2z M13.4,2.5l1.3-0.7c0.2-0.1,0.5-0.1,0.7,0l1.3,0.7C16.8,2.6,17,2.8,17,3.1v1.5c0,0.2-0.1,0.5-0.3,0.6
          l-0.9,0.5l-0.4,0.2c-0.2,0.1-0.5,0.1-0.7,0l-0.4-0.2l-0.9-0.5C13.2,5,13,4.8,13,4.6V3.1C13,2.8,13.2,2.6,13.4,2.5z M7.4,20.3v1.1
          c0,0.2-0.1,0.5-0.3,0.6l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0L3.8,22c-0.2-0.1-0.3-0.3-0.3-0.6v-1.5c0-0.2,0.1-0.5,0.3-0.6l1.3-0.7
          c0.2-0.1,0.5-0.1,0.7,0l0.9,0.5L7,19.3c0.2,0.1,0.3,0.3,0.3,0.6V20.3z M16.6,27.5l-1.3,0.7c-0.2,0.1-0.5,0.1-0.7,0l-1.3-0.7
          c-0.2-0.1-0.3-0.3-0.3-0.6v-1.5c0-0.2,0.1-0.5,0.3-0.6l0.9-0.5l0.4-0.2c0.2-0.1,0.5-0.1,0.7,0l0.4,0.2l0.9,0.5
          c0.2,0.1,0.3,0.3,0.3,0.6v1.5C17,27.2,16.8,27.4,16.6,27.5z"></path>
      </g>
      <!-- arrow-left -->
      <g id="arrow-left">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </g>
      <!-- arrow-right -->
      <g id="arrow-right">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </g>
      <!-- studio-assignment-list -->
      <!-- canban -->
      <!-- columns -->
      <g id="studio-assignment-list">
        <g id="canban">
          <g id="columns">
            <path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path>
          </g>
        </g>
      </g>
      <!-- assignment -->
      <g id="assignment">
        <g id="assignments">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
        </g>
      </g>
      <!-- beaker -->
      <g id="lab">
        <g id="labs">
          <g id="beaker">
            <g>
              <path d="M17.8,10.1c0,0-0.1,0-0.1,0l-1.1-0.3c-0.4-0.1-0.9-0.1-1.3,0l-0.4,0.1c-0.6,0.2-1.2,0.2-1.7,0l-1.1-0.3
          c-0.2-0.1-0.3-0.3-0.3-0.5c0.1-0.2,0.3-0.3,0.5-0.3l1.1,0.3c0.4,0.1,0.9,0.1,1.3,0L15.1,9c0.6-0.2,1.2-0.2,1.8,0l1.1,0.3
          c0.2,0.1,0.3,0.3,0.3,0.5C18.1,10,18,10.1,17.8,10.1z"></path>
            </g>
            <g>
              <path d="M23,27.6H7c-0.9,0-1.8-0.5-2.3-1.2c-0.5-0.8-0.6-1.8-0.2-2.6l6.4-14.6c0.1-0.2,0.1-0.3,0.1-0.5V5.1c0-0.7-0.6-1.2-1.2-1.2
          H9c-0.4,0-0.8-0.3-0.8-0.8S8.5,2.4,9,2.4h0.7c1.5,0,2.8,1.2,2.8,2.8v3.6c0,0.4-0.1,0.8-0.2,1.1L5.8,24.4c-0.2,0.4-0.1,0.8,0.1,1.2
          c0.2,0.4,0.6,0.6,1,0.6H23c0.4,0,0.8-0.2,1-0.6c0.2-0.4,0.3-0.8,0.1-1.2L17.8,9.8c-0.2-0.4-0.2-0.7-0.2-1.1V5.1
          c0-1.5,1.2-2.8,2.8-2.8H21c0.4,0,0.8,0.3,0.8,0.8S21.5,3.9,21,3.9h-0.7c-0.7,0-1.2,0.6-1.2,1.2v3.6c0,0.2,0,0.3,0.1,0.5l6.4,14.6
          c0.4,0.9,0.3,1.8-0.2,2.6C24.8,27.2,24,27.6,23,27.6z"></path>
            </g>
            <g>
              <path d="M13.6,22c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8C15.4,21.2,14.6,22,13.6,22z M13.6,19.2
          c-0.6,0-1,0.5-1,1s0.5,1,1,1c0.6,0,1-0.5,1-1S14.2,19.2,13.6,19.2z"></path>
            </g>
            <g>
              <path d="M17,17.7c-0.6,0-1.2-0.5-1.2-1.2c0-0.6,0.5-1.2,1.2-1.2c0.6,0,1.2,0.5,1.2,1.2C18.2,17.1,17.7,17.7,17,17.7z M17,16.1
          c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4C17.5,16.3,17.3,16.1,17,16.1z"></path>
            </g>
            <g>
              <path d="M15.1,14.4c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C16.2,13.9,15.7,14.4,15.1,14.4z M15.1,13
          c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3S15.3,13,15.1,13z"></path>
            </g>
          </g>
        </g>
      </g>
      <!-- grades -->
      <g id="grades">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"></path>
      </g>
      <!-- notifications -->
      <g id="notifications">
        <g id="comment">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
        </g>
      </g>
      <!-- inbox -->
      <g id="inbox">
        <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path>
      </g>
      <!-- letter -->
      <g id="letter">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
      </g>
      <!-- user -->
      <g id="user">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
      </g>
      <!-- calendar -->
      <g id="calendar">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
      </g>
      <!-- palette -->
      <!-- studio -->
      <!-- cle -->
      <g id="palette">
        <g id="studio">
          <g id="cle">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
          </g>
        </g>
      </g>
      <!-- blog -->
      <!-- blogs -->
      <g id="blog">
        <g id="blogs">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>
        </g>
      </g>
      <!-- editorial -->
      <!-- write -->
          <g id="editorial">
            <g id="write">
              <g>
                <path d="M27.5,10.8c0-0.2-0.1-0.4-0.2-0.6l-2.7-2.7c-0.3-0.3-0.8-0.3-1.1,0l-1.6,1.6c0,0,0,0,0,0c0,0,0,0,0,0l-9.2,9.2
          c-0.1,0.1-0.2,0.3-0.2,0.5l-0.3,3c0,0.2,0.1,0.5,0.2,0.6c0.2,0.2,0.4,0.2,0.6,0.2c0,0,0.1,0,0.1,0l3-0.3c0.2,0,0.4-0.1,0.5-0.2
          l9.2-9.2c0,0,0,0,0,0c0,0,0,0,0,0l1.6-1.6C27.4,11.2,27.5,11,27.5,10.8z M25.6,10.8l-0.5,0.5l-1.6-1.6L24,9.2L25.6,10.8z
           M15.5,20.9L13.8,21l0.2-1.7l8.5-8.5l1.6,1.6L15.5,20.9z"></path>
                <g>
                  <path class="st0" d="M6,11.3h10.2c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8H6c-0.4,0-0.8-0.4-0.8-0.8
            C5.2,11.7,5.6,11.3,6,11.3z"></path>
                  <path class="st0" d="M24,9.2l1.6,1.6l-0.5,0.5l-1.6-1.6L24,9.2z"></path>
                  <path d="M18.5,25.7H4.1V4.3h10.6l0,4.2h3.8v2.8l1.6-1.6V8.5c0-0.4-0.1-0.8-0.4-1.1l-3.8-4.2c-0.3-0.3-0.7-0.5-1.2-0.5H4.1
            c-0.9,0-1.6,0.7-1.6,1.6v21.4c0,0.9,0.7,1.6,1.6,1.6h14.4c0.9,0,1.6-0.7,1.6-1.6v-6.1l-1.6,1.6V25.7z"></path>
                  <path d="M6,12.9h10.2c0.4,0,0.8-0.4,0.8-0.8c0-0.4-0.4-0.8-0.8-0.8H6c-0.4,0-0.8,0.4-0.8,0.8C5.2,12.5,5.6,12.9,6,12.9z"></path>
                  <path d="M6,19.3c-0.4,0-0.8,0.4-0.8,0.8c0,0.4,0.4,0.8,0.8,0.8h5.3l0.2-1.6H6z"></path>
                  <path d="M6,15.3c-0.4,0-0.8,0.4-0.8,0.8c0,0.4,0.4,0.8,0.8,0.8h6.9l1.6-1.6H6z"></path>
                  <rect x="23.4" y="9.9" transform="matrix(0.7072 0.707 -0.707 0.7072 14.4298 -14.3524)" class="st1" width="2.2" height="0.7"></rect>
                </g>
              </g>
            </g>
          </g>
      <!-- bookmark -->
      <g id="bookmark">
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path>
      </g>
      <!-- bookmark-border -->
      <g id="bookmark-outline">
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path>
      </g>
      <!-- chevron-down -->
      <g id="chevron-down">
        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
      </g>
      <!-- chevron-left -->
      <g id="chevron-left">
        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
      </g>
      <!-- chevron-right -->
      <g id="chevron-right">
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
      </g>
      <!-- online -->
      <!-- cis -->
      <g id="cis">
        <g id="online">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"></path>
        </g>
      </g>
      <!-- close -->
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </g>
      <!-- collab -->
      <g id="collab">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
      </g>
      <!-- comply -->
      <!-- ecd -->
      <g id="ecd">
        <g id="comply">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </g>
      </g>
      <!-- mooc -->
      <!-- content-outline -->
      <g id="mooc">
        <g id="courses">
          <g id="content-outline">
            <g id="book">
            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path>
            </g>
          </g>
        </g>
      </g>
      <!-- content -->
      <g id="content">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"></path>
      </g>
      <!-- dino -->
      <g id="dino">
        <g>
          <circle cx="19" cy="6.3" r="0.6"></circle>
          <path d="M27.6,4.7c-1.5-1.5-7.2-2.3-10.5-1.5c-1.7,0.4-3.6,2.6-3.6,4.9c0,0.4,0,0.8,0,1.1c0,1.5,0,2.3-0.5,2.8
          c-0.4,0.4-0.9,0.7-1.5,1c-0.6,0.4-1.2,0.7-1.6,1.2c-1.3,1.6-2.4,2.1-3.8,1.6c-1.5-0.5-1.6-2.2-1.5-4.7c0-1,0-2-0.2-2.8
          C4.3,8.1,4.1,8,3.9,7.9C3.7,7.9,3.4,8,3.3,8.2c-1.6,3-2.2,8,0.5,11.9c1,1.5,2.4,2.7,4.1,3.6C8,23.9,8.1,24,8.3,24l0,1
          c0,0.1-0.1,1,0.5,1.5c0.3,0.3,0.7,0.5,1.1,0.5c0,0,0,0,0,0c1.3,0,1.8-1,1.9-1.5l0.2-0.8l0.2,0.4c0.2,0.5,0.7,1.3,1.6,1.3
          c0,0,0.1,0,0.1,0c0.1,0,0.3,0,0.4,0c1.3-0.3,1.3-1.6,1.3-2l0-0.9c0.7-0.3,1.7-1,2.6-2.8c0.5-1.1,0.7-2.2,0.8-3.2
          c0.2,0.1,0.4,0.1,0.6,0.1c0.5,0,1-0.2,1.4-0.7c0.3-0.3,0.3-0.7,0.3-1.1c-0.1-0.7-0.7-1.1-0.8-1.1l-1.4-1c0.2-0.9,0.5-1.4,0.6-1.7
          c0.8,0.1,2.5,0.2,3.5-0.1c0.9-0.2,1.4-1,1.7-1.7c0.1,0,0.2,0.1,0.2,0.1c0.2,0,0.4-0.1,0.5-0.2C26.4,9.5,29.1,6.3,27.6,4.7z
           M14.8,23.6l0,0.8c0,0.8-0.2,1.1-0.7,1.1c-0.1,0-0.1,0-0.2,0c-0.6,0-0.9-0.7-0.9-0.7l-0.3-0.6l-0.1-0.1l0.3,0
          c0.5-0.1,1-0.2,1.5-0.4C14.6,23.6,14.7,23.6,14.8,23.6C14.8,23.6,14.8,23.5,14.8,23.6L14.8,23.6z M20.1,15.4
          c0.1,0.1,0.4,0.3,0.4,0.6c0,0.1,0,0.2-0.1,0.4c-0.4,0.6-1,0.3-1,0.3l-0.3-0.1l-0.3-0.1c0-0.1,0-0.2,0-0.3c0,0,0,0,0,0
          c0-0.2,0-0.3,0-0.3l-0.1-1.1l0,0c0,0,0-0.1,0.1-0.2c0,0,0,0,0-0.1l0.1,0L20.1,15.4z M25.5,9.1C25.5,9.1,25.5,9.2,25.5,9.1l-0.6-0.8
          l0,0l-0.5-0.7c-0.1-0.1-0.3-0.2-0.4-0.1l-1.4,0.9l-0.8-1.2c-0.1-0.1-0.3-0.2-0.4-0.1l-1.9,1.1c-0.1,0.1-0.2,0.3-0.1,0.4
          c0.1,0.1,0.3,0.2,0.4,0.1l1.7-1L22.3,9c0.1,0.1,0.3,0.2,0.4,0.1l1.4-0.9l0.3,0.5l0,0L24.6,9c0,0.1-0.1,0.2-0.1,0.4
          c-0.2,0.6-0.6,1.4-1.3,1.6c-1.2,0.3-3.6,0-3.6,0l-0.2,0l-0.1,0.1c-0.3,0.4-0.7,1.3-1,2.7c-0.1,0.2-0.1,0.4-0.1,0.5
          c0,0.2-0.1,0.3-0.1,0.3l0,0l0.1,1.2c0,0,0,0.1,0,0.3c0,0.1,0,0.3,0,0.5c0,1-0.1,2.4-0.7,3.7c-0.9,1.8-1.8,2.2-2.4,2.5l-0.2,0.1
          c-0.1,0.1-0.2,0.1-0.3,0.1c-0.6,0.2-1.2,0.4-1.8,0.5c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0l0-0.1l0.1-0.2
          l0.5-1.9c0-0.2-0.1-0.3-0.2-0.4c-0.2,0-0.3,0.1-0.4,0.2l-0.5,2.1c0,0,0,0,0,0c0,0,0,0,0,0l-0.1,0.5l-0.1,0.5l-0.3,1
          c0,0-0.2,0.8-1.1,0.8c0,0,0,0,0,0c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.3-0.7-0.2-0.9l0-1l0-0.5l0-0.5v0l0-0.9c0-0.2-0.2-0.3-0.3-0.3
          c-0.2,0-0.3,0.1-0.3,0.3l0,0.7l0,0.2l0,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.2-0.1c-1.6-0.9-2.8-2-3.7-3.4
          c-2.4-3.6-1.8-7.8-0.8-10.1c0,0.5,0,1,0,1.6c0,2.2-0.1,4.9,2.1,5.6c2.6,0.8,4.3-1.3,4.8-1.9c0.3-0.3,0.8-0.6,1.3-0.9
          c0.6-0.3,1.2-0.7,1.7-1.1c0.8-0.8,0.8-2,0.7-3.4c0-0.4,0-0.7,0-1.1c0-1.9,1.6-3.7,2.9-4c3.2-0.8,8.5,0.1,9.7,1.2
          C27.7,6.1,26.3,8.1,25.5,9.1z"></path>
          <path d="M16.8,15.2l-1.5-1.6c-0.1-0.1-0.3-0.1-0.4,0c-0.1,0.1-0.1,0.3,0,0.4l1.5,1.6c0,0,0.2,0.2,0.2,0.5c0,0.1-0.1,0.3-0.2,0.4
          c-0.5,0.5-0.9,0.2-1,0.2l-2.7-1.6c-0.1-0.1-0.3,0-0.4,0.1c-0.1,0.1,0,0.3,0.1,0.4l2.7,1.6c0.1,0.1,0.4,0.2,0.6,0.2
          c0.3,0,0.7-0.1,1.1-0.5c0.3-0.3,0.4-0.6,0.4-0.8C17.3,15.6,16.9,15.2,16.8,15.2z"></path>
        </g>
      </g>
      <!-- discuss -->
      <!-- speechballoons -->
      <g id="speechballoons">
        <g id="discuss">
          <g>
            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
          </g>
        </g>
      </g>
      <!-- dotgrid -->
      <g id="dotgrid">
        <g>
          <g>
            <path d="M4.2,8C2.1,8,0.4,6.3,0.4,4.2s1.7-3.8,3.8-3.8S8,2.1,8,4.2S6.3,8,4.2,8z M4.2,2.2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2
            S5.3,2.2,4.2,2.2z"></path>
          </g>
          <g>
            <path d="M15,8c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S17.1,8,15,8z M15,2.2c-1.1,0-2,0.9-2,2s0.9,2,2,2
            c1.1,0,2-0.9,2-2S16.1,2.2,15,2.2z"></path>
          </g>
          <g>
            <path d="M25.8,8C23.7,8,22,6.3,22,4.2s1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8S27.9,8,25.8,8z M25.8,2.2c-1.1,0-2,0.9-2,2s0.9,2,2,2
            c1.1,0,2-0.9,2-2S26.9,2.2,25.8,2.2z"></path>
          </g>
          <g>
            <path d="M4.2,18.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8S8,12.9,8,15C8,17.1,6.3,18.8,4.2,18.8z M4.2,13c-1.1,0-2,0.9-2,2
            c0,1.1,0.9,2,2,2s2-0.9,2-2C6.2,13.9,5.3,13,4.2,13z"></path>
          </g>
          <g>
            <path d="M15,18.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C18.8,17.1,17.1,18.8,15,18.8z M15,13
            c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C17,13.9,16.1,13,15,13z"></path>
          </g>
          <g>
            <path d="M25.8,18.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8C29.6,17.1,27.9,18.8,25.8,18.8z M25.8,13
            c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C27.8,13.9,26.9,13,25.8,13z"></path>
          </g>
          <g>
            <path d="M4.2,29.6c-2.1,0-3.8-1.7-3.8-3.8S2.1,22,4.2,22S8,23.7,8,25.8S6.3,29.6,4.2,29.6z M4.2,23.8c-1.1,0-2,0.9-2,2
            c0,1.1,0.9,2,2,2s2-0.9,2-2C6.2,24.7,5.3,23.8,4.2,23.8z"></path>
          </g>
          <g>
            <path d="M15,29.6c-2.1,0-3.8-1.7-3.8-3.8S12.9,22,15,22c2.1,0,3.8,1.7,3.8,3.8S17.1,29.6,15,29.6z M15,23.8c-1.1,0-2,0.9-2,2
            c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C17,24.7,16.1,23.8,15,23.8z"></path>
          </g>
          <g>
            <path d="M25.8,29.6c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8S27.9,29.6,25.8,29.6z M25.8,23.8c-1.1,0-2,0.9-2,2
            c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C27.8,24.7,26.9,23.8,25.8,23.8z"></path>
          </g>
        </g>
      </g>
      <!-- download -->
      <!-- file-download -->
      <g id="download">
        <g id="file-download">
          <g>
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
          </g>
        </g>
      </g>
      <!-- edit -->
      <g id="edit">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
      </g>
      <!-- media -->
      <!-- elmsmedia -->
      <g id="media">
        <g id="elmsmedia">
          <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path>
        </g>
      </g>
      <!-- play -->
      <g id="play">
        <path d="M8 5v14l11-7z"></path>
        </g>
        <!-- replay -->
      <g id="replay">
        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path>
        </g>
      <!-- gear -->
      <!-- settings -->
      <g id="gear">
        <g id="settings">
          <g>
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
          </g>
        </g>
      </g>
      <!-- assessment -->
      <g id="assessment">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>
      </g>
      <!-- help -->
      <g id="help">
        <g>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
        </g>
      </g>
      <!-- hidden -->
      <!-- view-off -->
      <g id="hidden">
        <g id="view-off">
          <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"></path>
          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
        </g>
      </g>
      <!-- icor -->
      <!-- interact -->
      <g id="icor">
        <g id="interact">
          <path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path>
        </g>
      </g>
      <!-- info -->
      <g id="info">
        <g>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
        </g>
        <g>
          <g>
            <path d="M18.4,21.4l-0.2,0.9c-0.7,0.3-1.2,0.5-1.6,0.6c-0.4,0.1-0.9,0.2-1.4,0.2c-0.8,0-1.5-0.2-1.9-0.6c-0.5-0.4-0.7-0.9-0.7-1.5
            c0-0.2,0-0.5,0.1-0.7c0-0.3,0.1-0.5,0.2-0.9l0.9-3c0.1-0.3,0.1-0.6,0.2-0.8c0.1-0.3,0.1-0.5,0.1-0.7c0-0.4-0.1-0.7-0.2-0.8
            c-0.2-0.2-0.5-0.2-0.9-0.2c-0.2,0-0.5,0-0.7,0.1c-0.2,0.1-0.4,0.1-0.6,0.2l0.2-0.9c0.6-0.2,1.1-0.4,1.6-0.6c0.5-0.2,1-0.2,1.5-0.2
            c0.8,0,1.5,0.2,1.9,0.6c0.4,0.4,0.7,0.9,0.7,1.6c0,0.1,0,0.4,0,0.7c0,0.3-0.1,0.6-0.2,0.9l-0.9,3c-0.1,0.2-0.1,0.5-0.2,0.8
            c-0.1,0.3-0.1,0.5-0.1,0.7c0,0.4,0.1,0.7,0.3,0.8c0.2,0.1,0.5,0.2,0.9,0.2c0.2,0,0.4,0,0.7-0.1C18.1,21.6,18.3,21.5,18.4,21.4z
             M18.6,8.7c0,0.5-0.2,1-0.6,1.4c-0.4,0.4-0.9,0.6-1.4,0.6c-0.6,0-1-0.2-1.4-0.6c-0.4-0.4-0.6-0.8-0.6-1.4c0-0.5,0.2-1,0.6-1.4
            C15.5,7,16,6.8,16.6,6.8c0.6,0,1,0.2,1.4,0.6C18.4,7.7,18.6,8.2,18.6,8.7z"></path>
          </g>
        </g>
      </g>
      <!-- page -->
      <g id="page">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path>
      </g>
      <!-- pdf -->
      <g id="pdf">
        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path>
      </g>
      <!-- cpr -->
      <!-- people -->
      <g id="cpr">
        <g id="people">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
        </g>
      </g>
      <!-- quiz -->
      <g id="quiz">
        <g>
          <g id="choice3">
            <path d="M25.8,22.7v4.4h-8.9l-2.2-2.2l2.2-2.2H25.8 M26.1,20.7h-9.4c-0.4,0-0.9,0.2-1.2,0.5L13,23.8c-0.6,0.6-0.6,1.7,0,2.3
          l2.5,2.6c0.3,0.3,0.7,0.5,1.2,0.5h9.4c0.9,0,1.7-0.7,1.7-1.7v-5.1C27.8,21.5,27,20.7,26.1,20.7L26.1,20.7z"></path>
          </g>
          <g id="choice2">
            <path d="M25.8,12.8v4.4h-8.9L14.7,15l2.2-2.2H25.8 M26.1,10.8h-9.4c-0.4,0-0.9,0.2-1.2,0.5L13,13.8c-0.6,0.6-0.6,1.7,0,2.3l2.5,2.6
          c0.3,0.3,0.7,0.5,1.2,0.5h9.4c0.9,0,1.7-0.7,1.7-1.7v-5.1C27.8,11.5,27,10.8,26.1,10.8L26.1,10.8z"></path>
          </g>
          <g id="choice1">
            <path d="M25.8,2.8v4.4h-8.9l-2.2-2.2l2.2-2.2H25.8 M26.1,0.8h-9.4c-0.4,0-0.9,0.2-1.2,0.5L13,3.9c-0.6,0.6-0.6,1.7,0,2.3l2.5,2.6
          c0.3,0.3,0.7,0.5,1.2,0.5h9.4c0.9,0,1.7-0.7,1.7-1.7V2.5C27.8,1.6,27,0.8,26.1,0.8L26.1,0.8z"></path>
          </g>
          <g>
            <path d="M5.5,28.9c-0.4,0-0.8-0.1-1.1-0.2c-0.3-0.1-0.7-0.3-0.9-0.5c-0.3-0.2-0.4-0.5-0.6-0.8c-0.1-0.3-0.2-0.7-0.2-1.1
          c0-0.5,0.1-1.1,0.3-1.5c0.2-0.5,0.5-0.9,0.9-1.3c0.4-0.4,0.8-0.7,1.3-0.9s1.1-0.3,1.6-0.3c0.3,0,0.7,0,1.1,0.1
          c0.4,0.1,0.6,0.2,0.8,0.3L9,22.3h0.4l-0.5,2.3H8.5c-0.1-0.7-0.2-1.2-0.5-1.5c-0.3-0.4-0.7-0.5-1.2-0.5c-0.3,0-0.7,0.1-1,0.3
          c-0.3,0.2-0.6,0.5-0.8,1c-0.2,0.4-0.3,0.8-0.4,1.2c-0.1,0.5-0.1,0.9-0.1,1.3c0,0.6,0.1,1.1,0.4,1.4s0.7,0.5,1.2,0.5
          c0.4,0,0.8-0.1,1.2-0.4c0.4-0.2,0.7-0.6,1.1-1l0.3,0.2c-0.1,0.2-0.3,0.5-0.5,0.7c-0.2,0.2-0.4,0.4-0.7,0.6
          c-0.3,0.2-0.6,0.3-0.8,0.4C6.3,28.8,6,28.9,5.5,28.9z"></path>
          </g>
          <g>
            <path d="M6.9,12.4c0.8,0,1.3,0.1,1.7,0.3c0.4,0.2,0.5,0.5,0.5,0.9c0,0.3-0.1,0.5-0.2,0.7c-0.1,0.2-0.3,0.4-0.5,0.5
          c-0.2,0.1-0.4,0.3-0.7,0.3c-0.2,0.1-0.5,0.2-0.8,0.2l0,0.1c0.2,0,0.4,0.1,0.6,0.1c0.2,0.1,0.4,0.2,0.5,0.3c0.2,0.1,0.3,0.2,0.4,0.4
          c0.1,0.2,0.1,0.4,0.1,0.6c0,0.7-0.3,1.2-0.8,1.5c-0.5,0.3-1.4,0.5-2.4,0.5H2.1l0.1-0.3c0.1,0,0.2,0,0.3,0s0.3,0,0.3-0.1
          c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.3l1-4.4c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0-0.1-0.1-0.2-0.2-0.3
          c-0.1-0.1-0.3-0.1-0.6-0.2l0.1-0.3H6.9z M7,16.7c0-0.3-0.1-0.6-0.3-0.8s-0.5-0.3-1-0.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0
          L4.8,18c0,0.1,0.1,0.2,0.2,0.3c0.2,0.1,0.3,0.1,0.5,0.1c0.4,0,0.7-0.2,1-0.5C6.9,17.6,7,17.2,7,16.7z M7.4,13.6
          c0-0.3-0.1-0.5-0.3-0.6c-0.2-0.1-0.4-0.2-0.7-0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0l-0.6,2.4h0.3c0.5,0,0.9-0.1,1.2-0.4
          S7.4,14.1,7.4,13.6z"></path>
          </g>
          <g>
            <path d="M5.6,8.8l0.1-0.3c0.3,0,0.5-0.1,0.7-0.1c0.2-0.1,0.3-0.1,0.3-0.2c0-0.1,0-0.1,0-0.1c0,0,0-0.1,0-0.1L6.4,6.7H4.2
          C4.1,6.8,4,6.9,3.9,7.1S3.7,7.5,3.7,7.6C3.5,7.8,3.5,7.9,3.5,8s0,0.1,0,0.1c0,0.1,0.1,0.2,0.2,0.2C3.8,8.4,4,8.5,4.3,8.5L4.2,8.8
          H1.5l0.1-0.3c0.1,0,0.2,0,0.3,0c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.2,0.4-0.3C2.7,8,2.8,7.9,2.9,7.7c0.6-0.9,1.2-1.8,1.7-2.6
          c0.5-0.8,1.1-1.7,1.8-2.7h0.9c0.2,1.3,0.4,2.4,0.6,3.3s0.3,1.6,0.4,2.2c0,0.1,0,0.2,0.1,0.2s0.1,0.1,0.2,0.2c0.1,0,0.2,0.1,0.3,0.1
          s0.2,0,0.3,0L9,8.8H5.6z M6.3,6.3L5.9,4L4.5,6.3H6.3z"></path>
          </g>
        </g>
      </g>
      <!-- support -->
      <g id="support">
        <path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
      </g>
      <!-- teacher -->
      <!-- instructor -->
      <g id="teacher">
        <g id="instructor">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
        </g>
      </g>
      <!-- tour -->
      <g id="tour">
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"></path>
      </g>
      <!-- visible -->
      <g id="visible">
        <!-- view -->
        <g id="view">
          <g>
            <g>
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
            </g>
          </g>

    </g></g></defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer);

/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**

`lrn-icons` is a utility import that includes the definition for the `lrn-icon` element, `iron-iconset-svg` element, as well as an import for the default icon set.

The `lrn-icons` directory also includes imports for additional icon sets that can be loaded into your project.

Example loading icon set:

    <link rel="import" href="../lrn-icons/maps-icons.html">

To use an icon from one of these sets, first prefix your `lrn-icon` with the icon set name, followed by a colon, ":", and then the icon id.

Example using the directions-bus icon from the maps icon set:

    <lrn-icon icon="maps:directions-bus"></lrn-icon>

    To load a subset of icons from one of the default `lrn-icons` sets, you can
    use the [poly-icon](https://poly-icon.appspot.com/) tool. It allows you
    to select individual icons, and creates an iconset from them that you can
    use directly in your elements.

See [lrn-icon](#lrn-icon) for more information about working with icons.

See [iron-iconset](#iron-iconset) and [iron-iconset-svg](#iron-iconset-svg) for more information about how to create a custom iconset.

@group LRN Elements
@pseudoElement lrn-icons
* @demo demo/index.html
*/
/* explore */
/* save */
/* cancel */
/* done */
/* input */
/* local-library */
/* info-outline */
/* mode-edit */
/* accessibility */
/* share */
/* more-vert */
/* about */
/* plus */
/* add */
/* apps */
/* network */
/* arrow-left */
/* arrow-right */
/* studio-assignment-list */
/* canban */
/* columns */
/* assignment */
/* beaker */
/* grades */
/* notifications */
/* inbox */
/* letter */
/* user */
/* calendar */
/* palette */
/* studio */
/* cle */
/* blog */
/* blogs */
/* editorial */
/* write */
/* bookmark */
/* bookmark-border */
/* chevron-down */
/* chevron-left */
/* chevron-right */
/* online */
/* cis */
/* close */
/* collab */
/* comply */
/* ecd */
/* mooc */
/* content-outline */
/* content */
/* dino */
/* discuss */
/* speechballoons */
/* dotgrid */
/* download */
/* file-download */
/* edit */
/* media */
/* elmsmedia */
/* play */
/* replay */
/* gear */
/* settings */
/* assessment */
/* help */
/* hidden */
/* view-off */
/* icor */
/* interact */
/* info */
/* page */
/* pdf */
/* cpr */
/* people */
/* quiz */
/* support */
/* teacher */
/* instructor */
/* tour */
/* visible */
/* view */
