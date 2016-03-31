import React, { Component } from 'react'

export default class Methods extends Component {

  var DateUtilities = {

    pad: function(value, length) {
      while (value.length < length)
      value = "0" + value;
      return value;
    },

    clone: function(date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    },

    toString: function(date) {
      return date.getFullYear() + "-" + DateUtilities.pad((date.getMonth()+1).toString(), 2) + "-" + DateUtilities.pad(date.getDate().toString(), 2);
    },

    toDayOfMonthString: function(date) {
      return DateUtilities.pad(date.getDate().toString());
    },

    toMonthAndYearString: function(date) {
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[date.getMonth()] + " " + date.getFullYear();
    },

    moveToDayOfWeek: function(date, dayOfWeek) {
      while (date.getDay() !== dayOfWeek)
      date.setDate(date.getDate()-1);
      return date;
    },

    isSameDay: function(first, second) {
      return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
    },

    isBefore: function(first, second) {
      return first.getTime() < second.getTime();
    },

    isAfter: function(first, second) {
      return first.getTime() > second.getTime();
    }
  };

}
