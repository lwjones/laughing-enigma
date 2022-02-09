const STARTING_HOUR = 9;  // 9AM
const ENDING_HOUR = 17;    // 5PM


/**
 * Writes time blocks to the screen from the starting hour to the ending hour.
 */
let generateTimeBlocks = function() {
  for (let i = STARTING_HOUR; i <= ENDING_HOUR; i++) {
    setTimeBlock(i);
  }
};


/**
 * Writes a time block to the screen
 */
let setTimeBlock = function(hour) {
  // create the containing element
  timeBlockEl = $("<div>");
  timeBlockEl.addClass("row col hour");

  // set data element to current hour
  timeBlockEl.attr("data-hour", hour);

  // create the time elements
  hourEl = $("<div>");
  hourEl.addClass("hour col-2");
  hourEl.text(`\n${moment().hour(hour).format("hA")}`);

  // create the textarea elements
  textEl = $("<textarea>");
  textEl.addClass("description col");

  // create the save elements
  saveEl = $("<div>");
  saveEl.addClass("saveBtn col-1 col-sm-2");
  saveEl.append('<span><i class="fas fa-save"></i></span>');

  // write the block to the dom
  timeBlockEl.append(hourEl, textEl, saveEl);
  $(".time-block").append(timeBlockEl);
};


// Color code time blocks based on their time
let setBlockState = function() {
  // Compare each block to the current hour
  $("#time-table").children().map(function() {
    if (parseInt(moment().hour()) === parseInt($(this).attr("data-hour"))) {
      $("textarea").addClass("present");
    } else if (parseInt(moment().hour()) >= parseInt($(this).attr("data-hour"))) {
      $("textarea").addClass("past");
    } else {
      $("textarea").addClass("future");
    }
  });
};


/**
 * Gets the current date and writes it to the screen.
 * @post Writes the current date to #currentDay
 */
let getCurrentDay = function() {
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
};


let getCurrentTime = function() {
  return moment();
}


// start when document is completely loaded
$(document).ready(function() {
  getCurrentDay();
  generateTimeBlocks();
  setInterval(setBlockState, 1000);
});
