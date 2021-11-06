// display current date at top of calendar
function day() {


    $("#currentDay").text(moment().format("MMMM Do, YYYY - hh:mm:ss a"))

    setInterval(function () {
        $("#currentDay").each(function () {
            day($(this));
        });
    }, 1000);

    $(".saveBtn").on('click', handleSave);


}; day();


function updateTimeSlotItems() {
    var currentHour = moment().hour()
    $(".time-block").each(function () {
        var elementHour = parseInt($(this).attr("id"));
        // console.log(currentHour)
        // console.log(elementHour)
        if (elementHour < currentHour) {
            $(this).addClass("past")
        }
        else if (elementHour === currentHour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    })

}


updateTimeSlotItems();

// read relevant local storage data (about the relevant hour slot)
function loadDescription() {



    value = JSON.parse(localStorage.getItem(".description"));
} loadDescription()




function handleSave(e) {

     var hour = $(e.target).closest(".time-block").attr('id');
     
     var value = $(e.target).siblings(".description").val();



    localStorage.setItem(hour, value);
} 




