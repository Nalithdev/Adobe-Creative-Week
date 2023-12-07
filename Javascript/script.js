let choix1 = ["Avancer", "Reculer", "Tourner à gauche", "Tourner à gauche"];
let choix2 = ["Tourner à droite", "Avancer", "Tourner à droite", "Tourner à droite"];
let choix = document.querySelector(".choix");
let body = document.querySelector("body");
let step = document.querySelector(".steps");
let number = 0;
let logo = document.querySelector(".logo");

let resultat = [];
function ecriture_choix(x){
    video = document.querySelector("video");
    video.pause();
    body.classList.add("shadowe");
    video.classList.add("opacity");
    choix.innerHTML += "<div class='choice'>"+ choix1[x] +"</div>";
    choix.innerHTML += "<div class='choice'>"+ choix2[x] +"</div>";
    logo.classList.add("logo-flex");
    step.innerHTML += "<div class='step'>"+ number +"/"+ choix1.length +"</div>";
    const MyChoice = document.querySelectorAll(".choice");
    result(MyChoice, x);
}



setTimeout(function(){ecriture_choix(number)}, 2000);





function result (MyChoice){
    console.log(MyChoice);
    MyChoice.forEach(element => {
        console.log(MyChoice);
        element.addEventListener("click", function() {
            console.log(element);
            choix.innerHTML = "";
            step.innerHTML = "";
            resultat.push(element.innerHTML);
            console.log(resultat);
            logo.classList.remove("logo-flex");
            body.classList.remove("shadowe");
            video.classList.remove("opacity");
            video.play();
            number++;
            if (resultat.length === 1){
                setTimeout(function(){ecriture_choix(number)}, 2500);
            }

            if (resultat.length === 2){
                setTimeout(function(){ecriture_choix(number)}, 11500);
            }
            if (resultat.length === 3){
                setTimeout(function(){ecriture_choix(number)}, 12000);
            }


        });
    });
}



