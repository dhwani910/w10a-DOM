//for 1
var heading = document.querySelector('h4');
console.log(heading);
heading.innerHTML = "hello";

//for 2
var tweets = document.querySelectorAll('.tweet');

for(var i=0; i < tweets.length; i++) {
    tweets[i].style.backgroundColor = 'navy';
    tweets[i].style.color = 'white';
}


//for 3
var first = document.getElementById('first-tweet');
first.style.color = 'yellow';


//for 4
var messages = document.getElementsByClassName('message');
for(var i=0; i < messages.length; i++){
    messages[i].style.backgroundColor = "red";
}

// //for 5
var headingColor = document.getElementsByTagName('h4');
for(var i=0; i < headingColor.length; i++){
    headingColor[i].style.color = 'green';
}



// //for 6
var newElement = document.createElement("p");
newElement.innerHTML = "Added something new";
document.getElementById("new").append(newElement);


// //for 7
// var cut = document.getElementById("first-tweet");
// cut.remove();


//for 8
//Add
var topic = document.getElementById("container");
topic.classList.add("header");


//Remove
var titleColor = document.getElementById("title");
titleColor.classList.remove("header");


//Toggle
var tweets = document.getElementsByClassName('tweet');
for(var i=0; i < tweets.length; i++) {
    tweets[i].classList.add('hoverable');
    tweets[i].addEventListener('click', function() {
        this.classList.toggle('faded');
    })
}

