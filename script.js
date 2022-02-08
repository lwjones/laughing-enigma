/**
 *
 */
let getWorkingHours = function() {

};

/**
 * Writes a time block to the screen
 */
let putTimeBlock = function() {
  // create the containing element
  timeBlockEl = $("<div>");
  timeBlockEl.addClass("row col");

  // create the time elements
  hourEl = $("<div>");
  hourEl.addClass("hour col-2");

  // create the textarea elements
  textEl = $("<textarea>");
  textEl.addClass("description col");

  // create the save elements
  saveEl = $("<div>");
  saveEl.addClass("saveBtn col-2");
  saveEl.append('<span><i class="fas fa-save"></i></span>');

  // write the block to the dom
  timeBlockEl.append(hourEl, textEl, saveEl);
  $(".time-block").append(timeBlockEl);
};

/**
 * Gets the current date and writes it to the screen.
 * @post Writes the current date to #currentDay
 */
let getCurrentDay = function() {
  let dt = luxon.DateTime;
  $("#currentDay").text(dt.now().toLocaleString(dt.DATE_HUGE));
};


// start when document is completely loaded
$(document).ready(function() {
  getCurrentDay();
});
