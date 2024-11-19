const myCount = document.getElementById("count");
const message = document.getElementById("message");
let c = 0;

function incr(event) {
    event.preventDefault();
    c++;
    updateDisplay();
}

function decr(event) {
    event.preventDefault();
    if (c > 0) {
        c--;
        updateDisplay();
    } else {
        message.textContent = "The counter cannot go below 0.";
        message.style.color = 'red';
    }
}

function reset(event) {
    event.preventDefault(); 
    c = 0;
    updateDisplay();
    message.textContent = "";
}

//  display even/odd message
function updateDisplay() {
    message.style.color = '';
    myCount.textContent = c;
    if (c > 0) {
        message.textContent = c % 2 === 0 
            ? "The number is positive and even." 
            : "The number is positive and odd.";
    } else {
        message.textContent = ""; // Clear the message if not positive
    }
}
