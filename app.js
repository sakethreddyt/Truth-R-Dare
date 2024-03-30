// ******** DATA Array for forfeits ********

data = [
    {
    "id" : "1",
    "challenge" : "Spinner : TRUTH OR DARE<br> <br>Challenger : ?????????     "
    
    }

    // {
    // "id" : "2",
    // "challenge" : "Spinner, tell a story about the challenger, if they interupt or tell you to stop, they forfeit"
    // },

    // {
    // "id" : "3",
    // "challenge" : "Spinner, stare down the challenger. First to blink or look away, forfeits!"
    // },

];	

// ******** End of Data array ********


// Main app JS starts here...
// ******** APP ********

// Get references to DOM elements
let btn = document.getElementById("btnGo");
let arrow = document.getElementById("arrow");

// Question var
let task = "";

let wheelCounter = 0;

// Last poisiton of arrow
let lastSpin = "";

// get pop-up element
let popUp = document.getElementById("pop-up");
// spin btn
let spinBtn = document.getElementById("btn");



// Refresh Btn/Remove popUp
function refreshBtn()
{
    // Remove pop up
    popUp.classList.add("hidden");

    // Show Spin Btn
    spinBtn.classList.remove("hidden");
}

// Reveal popUp
function displayChallange()
{
    // Add Pop Up
    popUp.classList.remove("hidden");

}

// Spin the arrow
function startAnimation()
{ 
    // Hide Spin Btn
    spinBtn.classList.add("hidden");
	
    wheelCounter++;

    lastSpin = lastSpin + 1000 + Math.floor(Math.random() * 365);

    // For testing:
    console.clear()
    console.log("wheel spin: " + wheelCounter)

    // check to see how many times the wheel has been spin
    // bugs out after about 5 times
    if(wheelCounter > 3)
    {
        // Reset values and run again - prevents bugs
        lastSpin = 0;
        wheelCounter = 0;
        startAnimation();
    } 
    else
    {
        // Move the arrow business as usual
        arrow.style.transform = "rotate(" + lastSpin + "deg)";
    }

    // Get Question from data array
    let task = data[Math.floor(Math.random()*data.length)];
    // Add question to pop up window
    document.getElementById("challange").innerHTML = task.challenge;

    // Set timer for popUp
    setTimeout(displayChallange, 4000);

}





