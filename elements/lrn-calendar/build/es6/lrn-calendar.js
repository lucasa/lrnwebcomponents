import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
import { dom } from "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js";
import "./node_modules/@polymer/paper-button/paper-button.js";
import "./node_modules/@polymer/iron-icons/iron-icons.js";
import "./node_modules/@polymer/paper-card/paper-card.js";
import "./node_modules/@polymer/iron-ajax/iron-ajax.js";
import "./node_modules/@polymer/paper-menu-button/paper-menu-button.js";
import "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "./node_modules/@lrnwebcomponents/materializecss-styles/lib/colors.js";
import "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
import "./node_modules/@lrnwebcomponents/lrnsys-layout/lrnsys-layout.js";
import "@lrnwebcomponents/lrnsys-layout/lrnsys-drawer.js";
import "@lrnwebcomponents/lrnsys-layout/lrnsys-dialog.js";
import "@lrnwebcomponents/lrnsys-layout/lrnsys-collapselist.js";
import "@lrnwebcomponents/lrnsys-layout/lrnsys-collapselist-item.js";
import "./node_modules/ical.js/build/ical.js";
import "./lib/lrn-calendar-date.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      lrn-calendar-date {
        display: inline-table;
        top: 0px;
      }
      paper-card {
        width: 14%;
        height: 20px;
        display: inline-table;
        padding: 0;
        margin: 0;
      }
      .calendar {
        color: var(--my-toolbar-title-color);
      }
      .header{
        padding-bottom: 15px;
      }
    </style>

    <div class="calendar">
      <div class="header">
        <div style="float: left">
          <paper-button raised="" type="button" on-tap="monthView">Month</paper-button>
          <paper-button raised="" type="button" on-tap="weekView">Week</paper-button>
        </div>
        <div style="float: right">
          <paper-button raised="" type="button" on-tap="showDate">Today</paper-button>
          <paper-icon-button icon="arrow-back" on-tap="showPrev"></paper-icon-button>
          <paper-icon-button icon="arrow-forward" on-tap="showNext"></paper-icon-button>
        </div>
        <div style="margin: 0 auto; width: 200px; text-align: center">
          <h2>[[getDisplayDate(date)]]</h2>
        </div>
      </div>

      <div class="calendarView" id="calView">
      </div>
    </div>
`,
  is: "lrn-calendar",
  behaviors: [HAXBehaviors.PropertiesBehaviors],
  properties: {
    listOfEvents: { type: Array, value: [] },
    dateString: { type: String, observer: "_dateStringChanged" },
    date: { type: Date, value: new Date(), observer: "_dateChanged" },
    view: { type: String, value: "month", observer: "_viewTypeChanged" },
    file: { type: String, reflectToAttribute: !0, observer: "_fileChanged" }
  },
  _fileChanged: function(newValue) {
    if (typeof newValue !== typeof void 0) {
      this.loadFile();
      this.getDateInfo();
      this.createCalendar();
    }
  },
  _viewTypeChanged: function(newValue) {
    if (
      typeof newValue !== typeof void 0 &&
      typeof this.file !== typeof void 0
    ) {
      this.getDateInfo();
      this.createCalendar();
    }
  },
  _dateChanged: function(newValue) {
    if (
      typeof newValue !== typeof void 0 &&
      typeof this.file !== typeof void 0
    ) {
      this.getDateInfo();
      this.createCalendar();
    }
  },
  _dateStringChanged: function(newValue) {
    if (typeof newValue !== typeof void 0 && "" != newValue) {
      this.date = new Date(newValue);
    }
  },
  attached: function() {
    this.setHaxProperties({
      canScale: !1,
      canPosition: !1,
      canEditSource: !1,
      gizmo: {
        title: "Calendar",
        description: "Present dates.",
        icon: "icons:today",
        color: "grey",
        groups: ["Date"],
        handles: [{ type: "ical", source: "file", date: "date" }],
        meta: { author: "LRNWebComponents" }
      },
      settings: {
        quick: [
          {
            property: "file",
            title: "iCal feed",
            description: "Calendar feed to display",
            inputMethod: "textfield",
            icon: "link",
            required: !0
          }
        ],
        configure: [
          {
            property: "file",
            title: "iCal feed",
            description: "Calendar feed to display",
            inputMethod: "textfield",
            icon: "link",
            required: !0,
            validationType: "url"
          },
          {
            property: "view",
            title: "View calendar in week or month format",
            description: "week or month view",
            inputMethod: "select",
            options: { week: "Week", month: "Month" }
          },
          {
            property: "dateString",
            title: "Date: yyyy/mm/dd",
            description: "Date to display calendar",
            inputMethod: "datepicker"
          }
        ],
        advanced: []
      }
    });
  },
  loadFile: function() {
    this.startIndex = 0;
    this.calendarText = this.readTextFile(this.file);
    this.listOfEvents = this.getEvents(this.date, this.calendarText);
    this.listOfEvents = this.sortByTime(this.listOfEvents);
  },
  showPrev: function() {
    var current;
    this.startIndex = 0;
    if ("month" == this.view) {
      if (2 == this.date.getMonth()) {
        if (28 < this.date.getDate()) {
          current = new Date(
            this.date.getFullYear(),
            this.date.getMonth() - 1,
            28
          );
        } else {
          current = new Date(
            this.date.getFullYear(),
            this.date.getMonth() - 1,
            this.date.getDate()
          );
        }
      } else {
        current = new Date(
          this.date.getFullYear(),
          this.date.getMonth() - 1,
          this.date.getDate()
        );
      }
      this.date = current;
    } else {
      var current = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        this.date.getDate() - 7
      );
      this.date = current;
    }
    this.startMonth = this.date.getMonth() + 1;
    this.getDateInfo();
    this.createCalendar();
  },
  showNext: function() {
    var current;
    if ("month" == this.view) {
      if (11 == this.date.getMonth()) {
        current = new Date(this.date.getFullYear() + 1, 0, this.date.getDate());
      } else if (0 == this.date.getMonth()) {
        if (28 < this.date.getDate()) {
          current = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            28
          );
        } else {
          current = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            this.date.getDate()
          );
        }
      } else {
        current = new Date(
          this.date.getFullYear(),
          this.date.getMonth() + 1,
          this.date.getDate()
        );
      }
      this.date = current;
    } else {
      var current = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        this.date.getDate() + 7
      );
      this.date = current;
    }
    this.getDateInfo();
    this.createCalendar();
  },
  showDate: function() {
    this.startIndex = 0;
    this.date = new Date();
    this.getDateInfo();
    this.createCalendar();
  },
  monthView: function() {
    this.view = "month";
    this.startIndex = 0;
    this.createCalendar();
  },
  weekView: function() {
    this.view = "week";
    this.startIndex = 0;
    this.createCalendar();
  },
  readTextFile: function(file) {
    this.fileNotFound = !1;
    var rawFile = new XMLHttpRequest(),
      allText = "";
    rawFile.open("GET", file, !1);
    rawFile.onreadystatechange = function() {
      if (4 === rawFile.readyState) {
        if (200 === rawFile.status || 0 == rawFile.status) {
          allText = rawFile.responseText;
        } else {
          allText = "Not Found";
        }
      }
    };
    rawFile.send(null);
    this.calendarText = allText;
    return allText;
  },
  createCalendar: function() {
    if ("month" != this.view) {
      if ("week" != this.view) {
        this.view = "month";
      }
    }
    if (!this.date.getFullYear()) {
      this.date = new Date();
    }
    this.getDateInfo();
    this.totalDays = 7 * this.numweeks;
    this.calendarText = this.readTextFile(this.file);
    this.calendarView = this.querySelector(".calendarView");
    var days = 1,
      elem = dom(this.$.calView).node,
      elemChildren = elem.childNodes;
    while (elemChildren[1]) {
      elem.removeChild(elem.childNodes[1]);
    }
    var initialDayofWeek = this.currentDayofWeek;
    if ("week" == this.view) {
      var dayCount = 0;
      while (6 > this.currentDayofWeek + dayCount) {
        dayCount = dayCount + 1;
      }
      this.totalDays = dayCount;
    }
    if ("month" == this.view) {
      if (
        1 == this.currentMonth ||
        3 == this.currentMonth ||
        5 == this.currentMonth ||
        7 == this.currentMonth ||
        8 == this.currentMonth ||
        10 == this.currentMonth ||
        12 == this.currentMonth
      ) {
        this.totalDays = 31;
        this.totalDays = this.totalDays - this.startDay + 1;
      } else if (
        4 == this.currentMonth ||
        6 == this.currentMonth ||
        9 == this.currentMonth ||
        11 == this.currentMonth
      ) {
        this.totalDays = 30;
        this.totalDays = this.totalDays - this.startDay + 1;
      } else {
        this.totalDays = 29;
        this.totalDays = this.totalDays - this.startDay;
      }
    }
    this.newDate = new Date(
      this.currentYear + "/" + this.currentMonth + "/" + this.currentDate
    );
    if ("month" == this.view) {
      while (1 != this.currentDate) {
        days = days - 1;
        if (1 == this.currentMonth && 1 == this.currentDate) {
          this.currentYear = this.currentYear - 1;
          this.currentMonth = 12;
          this.currentDate = 31;
          this.newDate = new Date(
            this.currentYear + "/" + this.currentMonth + "/" + this.currentDate
          );
        } else {
          this.currentDate = this.currentDate - 1;
          this.newDate = new Date(
            this.currentYear + "/" + this.currentMonth + "/" + this.currentDate
          );
          if (this.newDate.getDate() != this.currentDate) {
            if (
              0 == this.currentDate &&
              (2 == this.currentMonth ||
                4 == this.currentMonth ||
                6 == this.currentMonth ||
                8 == this.currentMonth ||
                9 == this.currentMonth ||
                11 == this.currentMonth ||
                1 == this.currentMonth)
            ) {
              this.newDate = new Date(
                this.currentYear + "/" + (this.currentMonth - 1) + "/" + 31
              );
              this.currentDate = 31;
            }
            if (
              0 == this.currentDate &&
              (5 == this.currentMonth ||
                7 == this.currentMonth ||
                10 == this.currentMonth ||
                12 == this.currentMonth)
            ) {
              this.newDate = new Date(
                this.currentYear + "/" + (this.currentMonth - 1) + "/" + 30
              );
              this.currentDate = 30;
            }
            if (0 == this.currentDate && 3 == this.currentMonth) {
              this.newDate = new Date(this.currentYear + "/" + 2 + "/" + 29);
              this.currentDate = 29;
              if (2 == this.newDate.getMonth()) {
                this.newDate = new Date(this.currentYear + "/" + 2 + "/" + 28);
                this.currentDate = 28;
              }
            }
            this.currentMonth = this.currentMonth - 1;
          }
        }
        if (0 == this.currentDayofWeek || 0 == initialDayofWeek) {
          this.currentDayofWeek = 7;
          initialDayofWeek = -1;
        }
        this.currentDayofWeek = this.currentDayofWeek - 1;
      }
      if (7 == this.currentDayofWeek) {
        this.currentDayofWeek = 0;
      }
    }
    while (0 != this.currentDayofWeek) {
      days = days - 1;
      if (1 == this.currentMonth && 1 == this.currentDate) {
        this.currentYear = this.currentYear - 1;
        this.currentMonth = 12;
        this.currentDate = 31;
        this.newDate = new Date(
          this.currentYear + "/" + this.currentMonth + "/" + this.currentDate
        );
      } else {
        this.currentDate = this.currentDate - 1;
        this.newDate = new Date(
          this.currentYear + "/" + this.currentMonth + "/" + this.currentDate
        );
        if (this.newDate.getDate() != this.currentDate) {
          if (
            0 == this.currentDate &&
            (2 == this.currentMonth ||
              4 == this.currentMonth ||
              6 == this.currentMonth ||
              8 == this.currentMonth ||
              9 == this.currentMonth ||
              11 == this.currentMonth ||
              1 == this.currentMonth)
          ) {
            this.newDate = new Date(
              this.currentYear + "/" + (this.currentMonth - 1) + "/" + 31
            );
            this.currentDate = 31;
          }
          if (
            0 == this.currentDate &&
            (5 == this.currentMonth ||
              7 == this.currentMonth ||
              10 == this.currentMonth ||
              12 == this.currentMonth)
          ) {
            this.newDate = new Date(
              this.currentYear + "/" + (this.currentMonth - 1) + "/" + 30
            );
            this.currentDate = 30;
          }
          if (0 == this.currentDate && 3 == this.currentMonth) {
            this.newDate = new Date(this.currentYear + "/" + 2 + "/" + 29);
            this.currentDate = 29;
            if (2 == this.newDate.getMonth()) {
              this.newDate = new Date(this.currentYear + "/" + 2 + "/" + 28);
              this.currentDate = 28;
            }
          }
          this.currentMonth = this.currentMonth - 1;
        }
      }
      this.currentDayofWeek = this.currentDayofWeek - 1;
    }
    var dynamicEl = document.createElement("lrn-calendar-date");
    dynamicEl.date = this.newDate;
    dynamicEl.firstWeek = !0;
    dynamicEl.style.width = "14.25%";
    dynamicEl.style.display = "inline-block";
    dynamicEl.id = "date";
    dynamicEl.view = this.view;
    if (
      this.date.getFullYear() === this.newDate.getFullYear() &&
      this.date.getMonth() === this.newDate.getMonth() &&
      this.date.getDate() === this.newDate.getDate()
    ) {
      dynamicEl.loadeddate = !0;
    }
    var eventsOnDay = this.eventCheck(this.listOfEvents, this.newDate),
      sendEvent = this.createReturn(eventsOnDay);
    dynamicEl.events = sendEvent;
    dynamicEl.valid = !0;
    dom(this.calendarView).appendChild(dynamicEl);
    var firstWeekCount = 1;
    while (days < this.totalDays) {
      if (12 == this.currentMonth && 31 == this.currentDate) {
        this.currentYear = this.currentYear + 1;
        this.currentMonth = 1;
        this.currentDate = 1;
        this.newDay = new Date(
          this.currentYear + "/" + this.currentMonth + "/" + this.currentDate
        );
      } else {
        this.currentDate = this.currentDate + 1;
        this.newDay = new Date(
          this.currentYear + "/" + this.currentMonth + "/" + this.currentDate
        );
        if (this.newDay.getDate() != this.currentDate) {
          if (
            1 == this.currentMonth ||
            3 == this.currentMonth ||
            5 == this.currentMonth ||
            7 == this.currentMonth ||
            8 == this.currentMonth ||
            10 == this.currentMonth ||
            12 == this.currentMonth
          ) {
            this.newDay = new Date(
              this.currentYear + "/" + (this.currentMonth + 1) + "/" + 1
            );
          }
          this.currentDate = 1;
          this.currentMonth = this.currentMonth + 1;
        }
      }
      var dynamicEl = document.createElement("lrn-calendar-date");
      dynamicEl.valid = !0;
      dynamicEl.id = "date";
      dynamicEl.date = this.newDay;
      dynamicEl.style.width = "14.25%";
      dynamicEl.style.display = "inline-block";
      dynamicEl.view = this.view;
      if (
        this.date.getFullYear() === this.newDay.getFullYear() &&
        this.date.getMonth() === this.newDay.getMonth() &&
        this.date.getDate() === this.newDay.getDate()
      ) {
        dynamicEl.loadeddate = !0;
      }
      var eventsOnDayMain = this.eventCheck(this.listOfEvents, this.newDay),
        sendEventMain = this.createReturn(eventsOnDayMain);
      dynamicEl.events = sendEventMain;
      if (7 > firstWeekCount) {
        dynamicEl.firstWeek = !0;
      }
      firstWeekCount = firstWeekCount + 1;
      dynamicEl.valid = !0;
      dom(this.calendarView).appendChild(dynamicEl);
      days = days + 1;
      if (days == this.totalDays && 6 != this.newDay.getDay()) {
        days = days - 1;
      }
    }
  },
  getEvents: function(date, text) {
    if ("Not Found" == text) {
      return "";
    }
    var jcalData = ICAL.parse(text),
      vcalendar = new ICAL.Component(jcalData),
      vevent = vcalendar.getFirstSubcomponent("vevent"),
      vevents = vcalendar.getAllSubcomponents("vevent"),
      displayEvents = vevents.map(vevent => {
        event = new ICAL.Event(vevent);
        return event;
      });
    this.eventArray = [];
    for (var i = 0; i < displayEvents.length; i++) {
      this.createDate(displayEvents[i]);
      if (displayEvents[i].isRecurring()) {
        this.createRecurrence(displayEvents[i]);
      }
      this.eventArray.push(displayEvents[i]);
    }
    return this.eventArray;
  },
  createRecurrence: function(events) {
    if (events.getRecurrenceTypes().WEEKLY) {
      this.createRepeatedEvent(events, 156);
    } else if (events.getRecurrenceTypes().DAILY) {
      this.createRepeatedEvent(events, 720);
    } else if (events.getRecurrenceTypes().MONTHLY) {
      this.createRepeatedEvent(events, 36);
    } else if (events.getRecurrenceTypes().YEARLY) {
      this.createRepeatedEvent(events, 10);
    }
  },
  createRepeatedEvent: function(events, maxRepeat) {
    var iter = events.iterator(events.startDate);
    let next,
      num = 0;
    while ((next = iter.next()) && num++ < maxRepeat) {
      var newTest = new ICAL.Event();
      newTest.summary = events.summary;
      newTest.description = events.description;
      newTest.startDate = events.getOccurrenceDetails(next).startDate;
      newTest.endDate = events.getOccurrenceDetails(next).endDate;
      var locationString = events.location + "";
      newTest.location = locationString;
      if (
        newTest.startDate._time.day != events.startDate._time.day ||
        newTest.startDate._time.month != events.startDate._time.month ||
        newTest.startDate._time.year != events.startDate._time.year
      ) {
        this.eventArray.push(newTest);
      }
    }
  },
  createDate: function(event) {
    var year = event.startDate._time.year,
      month = event.startDate._time.month,
      day = event.startDate._time.day,
      eventDate = new Date(year + "/" + month + "/" + day);
    return eventDate;
  },
  eventCheck: function(events, date) {
    for (
      var eventsOnDay = [], end = events.length, i = this.startIndex, startDay;
      i < end;
      i++
    ) {
      startDay = this.createDate(events[i]);
      if (startDay.getTime() > date.getTime()) {
        end = i;
        if (0 != i) {
          this.startIndex = i - 1;
        }
      }
      if (startDay.getTime() == date.getTime()) {
        eventsOnDay.push(events[i]);
      }
    }
    return eventsOnDay;
  },
  sortByTime: function(eventList) {
    var swapped;
    do {
      swapped = !1;
      for (var i = 0; i < eventList.length - 1; i++) {
        if (eventList[i].startDate > eventList[i + 1].startDate) {
          var temp = eventList[i];
          eventList[i] = eventList[i + 1];
          eventList[i + 1] = temp;
          swapped = !0;
        }
      }
    } while (swapped);
    return eventList;
  },
  getDateInfo: function() {
    this.startMonth = this.date.getMonth() + 1;
    this.startYear = this.date.getFullYear();
    this.startDay = this.date.getDate();
    this.startDayOfWeek = this.date.getDay();
    this.currentDate = this.startDay;
    this.currentMonth = this.startMonth;
    this.currentYear = this.startYear;
    this.currentDayofWeek = this.startDayOfWeek;
  },
  createReturn: function(event) {
    for (var EventArray = [], i = 0; i < event.length; i++) {
      EventArray.push({ event: event[i] });
    }
    return EventArray;
  },
  getDisplayDate: function(date) {
    if ("function" === typeof date.getMonth) {
      var monthInt = date.getMonth(),
        day = date.getDate();
      monthstring =
        [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ][monthInt] +
        " " +
        date.getFullYear();
      return monthstring;
    }
    return "";
  }
});