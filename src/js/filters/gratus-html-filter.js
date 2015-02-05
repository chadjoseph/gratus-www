(function (gratus) {
  "use strict";

  gratus.filter('gratusHtml', [
    '$sce',
    function ($sce) {
      return function (html) {
        return $sce.trustAsHtml(html);
      };
    }
  ]);
})(window.gratus);

