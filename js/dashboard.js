function upvote(button){

let countElement = button.querySelector(".count");

let votes = parseInt(countElement.innerText);

votes++;

countElement.innerText = votes;

// get the complaint row
let row = button.closest("tr");

// find badge
let badge = row.querySelector(".badge");

// change priority based on votes

if(votes >= 50){
badge.innerText = "Critical";
badge.className = "badge high";
}
else if(votes >= 25){
badge.innerText = "High";
badge.className = "badge high";
}
else if(votes >= 10){
badge.innerText = "Medium";
badge.className = "badge progress";
}
else{
badge.innerText = "Normal";
badge.className = "badge pending";
}

}

// DARK MODE
function toggleTheme(){
document.body.classList.toggle("dark-mode");
}


// DROPDOWN COMPLAINT DETAILS
function toggleComplaint(id){

let row = document.getElementById(id);

if(row.style.display === "table-row"){
row.style.display = "none";
}
else{
row.style.display = "table-row";
}

}