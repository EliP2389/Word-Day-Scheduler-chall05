function updateTimeSlotItems() {
// assign classes (past | present | future)
   

    // read relevant local storage data (about the relevant hour slot)
function loadDecscription(){
    var value = $(e.target).siblings(".description").val();


value = JSON.parse(localStorage.getItem(".description"));

} $(".saveBtn").on('click', loadDecscription);
};


function handleSave(e) {
    
    var hour = $(e.target).closest(".time-block").attr('id');

    var value = $(e.target).siblings(".description").val();
    
    
    
    localStorage.setItem(hour, value);
}



// display current date at top of calendar
function day(){


     $("#currentDay").text(moment().format("MMMM Do, YYYY - hh:mm:ss a"))

     setInterval(function() {
        $("#currentDay").each(function() {
          day($(this));
        });
      }, 1000);

      $(".saveBtn").on('click', handleSave);

           
};  day()
