// Global variables
let checkCounter = 0;
let finished = false;
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let currentDay, thisDay, thisMonth, dayOfTheMonth;

// Set current date
$(document).ready(function(){
  currentDay = new Date();
  thisDay = days[currentDay.getDay()];
  thisMonth = months[currentDay.getMonth()];
  dayOfTheMonth = currentDay.getDate();
  currentDate = thisDay + ', ' + thisMonth + ' ' + dayOfTheMonth;
  $('.date').html("<span class='current-date'>"+currentDate+"</span>");
  for(let i = 1; i < 4; i++){
    $('.c'+i+'_h3').html(challengeArray[i-1]);
  }
})

// Change CSS on checkbox toggle
function onChecked(e){
  if($(e).is(':checked')){
    $('.'+e.value).css({"text-decoration": "line-through"});
    $("."+e.value+" a").css({"color": "#5D9259"});
    e.disabled = true;
    checkCounter++;
  }else{
    $("."+e.value).css({"text-decoration": "none"});
    $("."+e.value+" a").css({"color": "rgba(0,0,0,0.7)"});
    checkCounter--;
  }

  // Check if all checkboxes are checked
  if(checkCounter === 3){
    if(!finished){
      let completedDate = "<span class='completed-text'> - You have completed all challenges for today!</span>";
      $('.date').append(completedDate);
      $('.current-date').css({"text-decoration": "line-through"})
      finished = true;
    }
  }
}

// Flip the cards on click
function flipCard(card){
  $('.inner-card', card).css({
    "transform": "rotateY(180deg)"
  })
}
