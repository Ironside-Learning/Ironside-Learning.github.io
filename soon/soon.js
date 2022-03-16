'use strict'

alert('Comming Soon')
const suggestion = prompt("Please Send Me Your Suggestion About Anything");
if (!suggestion) {
    alert("Well Well Well, You Did Not Suggest")
} else {
    alert("Your Suggestion Was Sent")
}
window.location.replace("../index.html")
