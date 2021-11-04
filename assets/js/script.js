// display current date at top of calendar
function day(){
$("#currentDay").text(moment().format('dddd, LL'));
}
$(day);