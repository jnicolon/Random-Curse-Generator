
//Counters to turn opacity down.
let f1Opacity = 1;
let f2Opacity = 1;
let f3Opacity = 1;
let f4Opacity = 1;
let f5Opacity = 1;

//Counter for when all the flames are extinguished
let flamesCounter = 25;

//Curses Array
const curses = [
    'your poop will smell like barf',
    'acid reflux',
    'a bald spot in your anus',
    'sleepy therapists',
    'like a web toe but for your armpit',
    'wet socks',
    'someone always looking at your phone screen',
    'stuck in the EEEEEEE of the Macarena',
    'maybe your ex was right',
    'you meet a man with a ponytail',
    'the venezuelan birthday song is the regular song',
    'people think you wrote chappie'
];

class Functionality {
    static flamesOut(flame) {
        if (flame.id === "flame1" && f1Opacity > 0.0) {
            flamesCounter -= 1
            f1Opacity -= 0.2;
            //For some reason the opacity is not exact after 5 digits so in order to stop the flames to react to clicking I used the precision method. 
            f1Opacity = f1Opacity.toPrecision(1)
            flame.style.opacity = `${f1Opacity}`;
        } else if (flame.id === "flame2" && f2Opacity > 0.0) {
            flamesCounter -= 1
            f2Opacity -= 0.2;
            f2Opacity = f2Opacity.toPrecision(1)
            flame.style.opacity = `${f2Opacity}`;
        } else if (flame.id === "flame3" && f3Opacity > 0.0) {
            flamesCounter -= 1
            f3Opacity -= 0.2;
            f3Opacity = f3Opacity.toPrecision(1)
            flame.style.opacity = `${f3Opacity}`;
        } else if (flame.id === "flame4" && f4Opacity > 0.0) {
            flamesCounter -= 1
            f4Opacity -= 0.2;
            f4Opacity = f4Opacity.toPrecision(1)
            flame.style.opacity = `${f4Opacity}`;
        } else if (flame.id === "flame5" && f5Opacity > 0.0) {
            flamesCounter -= 1
            f5Opacity -= 0.2;
            f5Opacity = f5Opacity.toPrecision(1)
            flame.style.opacity = `${f5Opacity}`;
        };     
    };

    static randomCurse() {
        let curse = '';
        let index = Math.floor(Math.random() * curses.length)
        curse = curses[index];
        return curse;
    };
};



class Animations {
    static flamesDisplayOff(){
        document.querySelectorAll('.flame').forEach(flame => flame.style.display = 'none') 
    }

    static pentagramDisplay(){
        document.querySelector('.pentagram-cont').style.display = "none";
    }

    static displayCursesCont(){
        document.querySelector('.curse-cont').style.display = "flex";
    }

    static displayCurse() {
        let curse = Functionality.randomCurse();
        document.querySelector('.curse').textContent = `${curse}`;
    };

    static cursesInOut() {
        let tl = gsap.timeline();
        tl.to('.curse', {duration: 0.20 , opacity: 0, onComplete: Animations.displayCurse})
            .to('.curse', {opacity:1, duration: 0.20})
    };
  
    static cursesInterval() {
        Animations.displayCursesCont();
        let rCurse = window.setInterval(Animations.cursesInOut, 400);
        function clear(){
            clearInterval(rCurse)
        }
        window.setTimeout(clear, 10000);
    }

    
    
    static master(){
        let tl = gsap.timeline();
        tl.to("#pentagram-img", {duration: 1, opacity: 1, ease: "power3.in"})
            .to("#pentagram-img", {duration: 10, delay: -0.7, rotate: -5000, ease: "power3.in"})
            .to(".pentagram-cont", {duration: 6, delay: -6 , scale: 11, ease: "power4.in"})
            .to(".pentagram-cont", {duration: 4, delay: -3.7 , opacity: 0, ease: "power2.in", onComplete: Animations.pentagramDisplay})
            .to('.curse-cont', {duration: 10, delay: -1, opacity: 1, ease: "power2.out", onStart: Animations.cursesInterval})
            
            
    };
};



document.querySelectorAll('.flame').forEach(flame => {
    flame.addEventListener('click', (e) => {  
        if (flamesCounter === 0) {
            
            Animations.master();
        } else {
        Functionality.flamesOut(e.target);
        }
     });
});

