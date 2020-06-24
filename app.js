
//Counters to turn opacity down.
let f1Opacity = 1;
let f2Opacity = 1;
let f3Opacity = 1;
let f4Opacity = 1;
let f5Opacity = 1;

//Counter for when all the flames are extinguished
let flamesCounter = 25;


class Flames {

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
};

class Animations {
    static flamesDisplayOff(){
        document.querySelectorAll('.flame').forEach(flame => flame.style.display = 'none') 
    }

    static pentagramDisplay(){
        document.querySelector('.pentagram-cont').style.display = "none";
    }

    static pentagram(){
        let tl = gsap.timeline();
        tl.to("#pentagram-img", {duration: 1, opacity: 1})
            .to("#pentagram-img", {duration: 10, delay: -0.7, rotate: -4000, ease: "power4.in"})
            .to(".pentagram-cont", {duration: 6, delay: -6 , scale: 11, ease: "power4.in"})
            .to(".pentagram-cont", {duration: 6, delay: -6 , opacity: 0, ease: "power4.in", onComplete: Animation.pentagramDisplay})
            
    };

};




document.querySelectorAll('.flame').forEach(flame => {
    flame.addEventListener('click', (e) => {  
        if (flamesCounter === 0) {
            //Animations.pentagramOn();
            Animations.pentagram();
        } else {
        Flames.flamesOut(e.target);
        }
     });
});

