(function (gratus) {
  "use strict";

  gratus.filter('gratusAgo', [
    function () {
      return function (date) {
        var now = Date.now(),
            round = Math.round,
            milliseconds = now - date,
            seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            months = round(days / 30),
            years = round(days / 365);

        return seconds === 1 && seconds + ' second ago' ||
            seconds < 60 && seconds + ' seconds ago' ||
            minutes === 1 && minutes + ' minute ago' ||
            minutes < 60 && minutes + ' minutes ago' ||
            hours === 1 && hours + ' hour ago' ||
            hours < 24 && hours + ' hours ago' ||
            days === 1 && days + ' day ago' ||
            days < 28 && days + ' days ago' ||
            days < 365 && months === 1 && months + ' month ago' ||
            days < 365 && months + ' months ago' ||
            years === 1 && years + ' year ago' ||
            years + ' years ago';
      };
    }
  ]);
})(window.gratus);

