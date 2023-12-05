document.querySelector("#toggle-dark").addEventListener("click", function(){
    let element = document.body;
    let project_cards = document.querySelectorAll(".project-card");
    if(document.querySelector(".current-light-mode").innerHTML == "Dark"){
        document.querySelector(".current-light-mode").innerHTML = 'Light';
    }
    else if(document.querySelector(".current-light-mode").innerHTML == "Light"){
        document.querySelector(".current-light-mode").innerHTML = 'Dark';
    }
    element.classList.toggle("light");
    for(var i = 0; i < project_cards.length; ++i){
        project_cards[i].classList.toggle("light-card");
    }

    let navSpans = document.querySelectorAll(".nav-span");
    for(var i = 0; i < navSpans.length; ++i){
        navSpans[i].classList.toggle("nav-light");
    }

    let home_link = document.querySelector(".homer-link");
    let projects_link = document.querySelector(".projectser-link");
    let about_link = document.querySelector(".abouter-link");

    home_link.classList.toggle("nav-links-light");
    projects_link.classList.toggle("nav-links-light");
    about_link.classList.toggle("nav-links-light");
});

document.querySelector("#projectsToAbout").addEventListener("click", function(){
    window.location.assign("about.html");
});

document.querySelector("#navToggle").addEventListener("click", function(){
    document.getElementById('navBar').classList.toggle('active');
    document.getElementById('main').classList.toggle('active');
});document