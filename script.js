// Screen Timer
let seconds = 0;
setInterval(() => {
    seconds++;
    document.getElementById("time").innerText = seconds + " sec";

    if (seconds > 30) {
        alert("⛔ Take a break! Go play outside!");
    }
}, 1000);

// Cat Talking
function talkCat() {
    let messages = [
        "Let's learn something new! 📚",
        "Try the math game 😺",
        "Don't use mobile too much 🚫",
        "You are smart! ⭐"
    ];
    let random = Math.floor(Math.random() * messages.length);
    document.getElementById("catText").innerText = messages[random];
}

// Math Game
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
document.getElementById("question").innerText = num1 + " + " + num2 + " = ?";

function checkAnswer() {
    let user = document.getElementById("answer").value;
    if (user == num1 + num2) {
        document.getElementById("result").innerText = "✅ Correct!";
    } else {
        document.getElementById("result").innerText = "❌ Try again!";
    }
}