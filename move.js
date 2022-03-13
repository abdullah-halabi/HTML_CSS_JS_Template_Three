
/*stat skills*/

let statistic = document.querySelector(".statistic");

let skills = document.querySelector(".skills")

let span = document.querySelectorAll(".progress span");

window.onscroll = function() {
    //this is for skills
    if(window.scrollY > skills.offsetTop) {
        span.forEach((spans) => {
            spans.style.width = spans.dataset.width;
        })
        
    }
    //this is for stats
    if(window.scrollY >= stats.offsetTop) {
        if(!started) {
            nums.forEach((num) => counter(num));
        }
        started = true;
    }
    //scroll to up
    if(window.scrollY >=  700) {
        toUp.classList.add(`show`);
    }else {
        toUp.classList.remove(`show`);
    }
}
/*end skills*/


/*start stats*/

let nums = document.querySelectorAll(".our-stats .num");

let stats = document.querySelector(".stats");

let started = false;

function counter(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() =>{
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    },2000/goal)
}


/*end stats*/

/*start latest event*/

let countDownDate = new Date("Dec 31,2022 23:59:59").getTime();

let countDown = setInterval(() =>{
    //get date now
    let dateNow = new Date().getTime();
    //het difference between now and countdowndate 
    let difDate = countDownDate - dateNow;
    //get time units 
    let days = Math.floor( difDate/(1000 *60 *60 *24));
    let hours = Math.floor((difDate % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    let minutes = Math.floor((difDate % (1000 * 60 * 60 )) / (1000 * 60 ));
    let secounds = Math.floor((difDate % (1000 * 60 )) / (1000 ));
    document.querySelector(".day").innerHTML = days <10 ? `0${days}` : days;
    document.querySelector(".hour").innerHTML = hours <10 ? `0${hours}` : hours;
    document.querySelector(".minute").innerHTML = minutes <10 ? `0${minutes}` : minutes;
    document.querySelector(".secound").innerHTML = secounds <10 ? `0${secounds}` : secounds;
},1000)
/*end latset event */

/*start scroll to top */

let toUp = document.querySelector(".up");

toUp.onclick = function () {
    window.scrollTo(0,0)
}
/*end scroll to top */
/*START MEGA MEMU*/
let mega = document.querySelector(".mega-menu");
let cloes = document.querySelector("cloes");
let li = document.querySelector("#other");

li.onclick = function(){
    this.classList.add(`mega`);
    mega.style.opacity = 1;
    mega.style.top = `100%`;
}
mega.onmouseleave = function(){
    li.classList.remove(`mega`);
    mega.style.opacity = 0;

}

/*end mega menu*/