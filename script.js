let getCurrentDay = function() {
  let dt = luxon.DateTime;
  $("#currentDay").text(dt.now().toLocaleString(dt.DATE_HUGE));
}


// start when document is completely loaded
$(document).ready(function() {
  getCurrentDay();
});