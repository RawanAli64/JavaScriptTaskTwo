 window.addEventListener("load", function () {
    setTimeout(function () {
      let loader = document.getElementById("loader");
      loader.style.display = "none";
    }, 2000);
  });

let body = document.getElementById("sectionOne");
let images = [
  "./images/01.jpg",
  "./images/02.jpg",
  "./images/03.jpg",
  "./images/04.jpg",
  "./images/05.jpg",
  "./images/06.jpg"


];
let randomIndex = Math.floor(Math.random() * images.length);
body.style.backgroundImage = `url(${images[randomIndex]})`;
setInterval(function() {
  let randomIndex = Math.floor(Math.random() * images.length);
  body.style.backgroundImage = `url(${images[randomIndex]})`;
}, 2000); 

let btnShow = document.getElementById("show");
let items = document.querySelectorAll(".extra-card");

function showAndHide(){
    if(btnShow.innerText=="Show More"){
        for(let i = 0 ; i < items.length ; i++){
            items[i].classList.add("show-cards");
        }
        this.innerText = "Show Less";
        this.style.background = "red";
    }
    else{
         for(let i = 0 ; i < items.length ; i++){
            items[i].classList.remove("show-cards");
        }
           this.innerText = "Show More";
           this.style.background = "#0d6efd";
    }
}
btnShow.addEventListener("click",showAndHide)


let isVideoVisible = false;

  let btn = document.getElementById("watch");
  let content = document.querySelector(".content");
  let videoContent = document.getElementById("videoContent");
  let video = videoContent.querySelector("video");

  btn.addEventListener("click", function () {
    if (!isVideoVisible) {
      content.style.display = "none";
      videoContent.style.display = "block";
      video.currentTime = 0; 
      video.play();  
      btn.innerText = "Read Me";
      isVideoVisible = true;
    } else {
      content.style.display = "block";
      videoContent.style.display = "none";
      btn.innerText = "Watch Me";
      video.pause(); 
      video.currentTime = 0;
      isVideoVisible = false;
    }
  });
let headers = document.getElementsByClassName("accordion-header");
let contents = document.getElementsByClassName("accordion-content");

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", function() {
    let isVisible = contents[i].style.display === "block";
    for (let j = 0; j < contents.length; j++) {
      contents[j].style.display = "none";
    }
    if (!isVisible) {
      contents[i].style.display = "block";
    }
  });
}


 
  let menuIcon = document.querySelector(".icon");
  let bottomBar = document.querySelector(".mobile-bottom-bar");

  menuIcon.addEventListener("click", function () {
    if (bottomBar.style.display === "flex") {
      bottomBar.style.display = "none";
    } else {
      bottomBar.style.display = "flex";
    }
  });

