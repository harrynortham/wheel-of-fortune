//Get elements
const alert = document.getElementById('alert');
const pin = document.getElementById('pin');
const wheel = document.getElementById('wheel');
const modal = document.getElementById('modal');

//Prizes Array
const prizes = [{
    "prize": 1,
    "wheelPosition": 25,
    "alert": "Empty. You get nothing."
  },
  {
    "prize": 2,
    "wheelPosition": 65,
    "alert": "150. You get 150."
  },
  {
    "prize": 3,
    "wheelPosition": 110,
    "alert": "100. You get 100."
  },
  {
    "prize": 4,
    "wheelPosition": 155,
    "alert": "200. You get 200."
  },
  {
    "prize": 5,
    "wheelPosition": 200,
    "alert": "Empty. You get nothing."
  },
  {
    "prize": 6,
    "wheelPosition": 245,
    "alert": "500. You get 500."
  },
  {
    "prize": 7,
    "wheelPosition": 290,
    "alert": "50. You get 50."
  },
  {
    "prize": 8,
    "wheelPosition": 340,
    "alert": "Lock. You get the Mystery Prize."
  }
]

//Variable to store if clicked or not
let clicked;

//When spin button clicked
pin.addEventListener('click', function() {

  if (clicked === 1) {
    //show error message to player
    alert.innerHTML = 'No more prizes! You already clicked the wheel';

  } else {
    //get random int between 1 and the array length
    let random = Math.floor(Math.random() * prizes.length - 1) + 1;
    //get position of the prize and add 1080deg for 6 spins round
    let wheelPos = prizes[random].wheelPosition + 1080;
    //add styling for the transformation
    wheel.style.transform = "rotate(" + wheelPos + "deg)";
    //show message to player
    alert.innerHTML = prizes[random].alert;
    //set status of clicked
    clicked = 1;
    //Start confetti after 3.7 seconds, matching time of modal
    setTimeout(function() {
          confetti.start();
       },  3700);
    //Show modal
    modal.style.transform = "scale(1)";
  }

})


//// TODO:
// Need to show background of modal 50% opacity black;
//Only show confetti if there is a winner
//Show win or lose message
