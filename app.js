let f1Opacity = 1;
let f2Opacity = 1;
let f3Opacity = 1;
let f4Opacity = 1;
let f5Opacity = 1;

let flamesCounter = 50;


class Flames {
    static flamesOut(flame) {
        
        if (flame.id === "flame1" && f1Opacity > 0.0) {
            flamesCounter -= 1
            f1Opacity -= 0.1;
            f1Opacity = f1Opacity.toPrecision(1)
            flame.style.opacity = `${f1Opacity}`;
        } else if (flame.id === "flame2" && f2Opacity > 0.0) {
            flamesCounter -= 1
            f2Opacity -= 0.1;
            f2Opacity = f2Opacity.toPrecision(1)
            flame.style.opacity = `${f2Opacity}`;
        } else if (flame.id === "flame3" && f3Opacity > 0.0) {
            flamesCounter -= 1
            f3Opacity -= 0.1;
            f3Opacity = f3Opacity.toPrecision(1)
            flame.style.opacity = `${f3Opacity}`;
        } else if (flame.id === "flame4" && f4Opacity > 0.0) {
            flamesCounter -= 1
            f4Opacity -= 0.1;
            f4Opacity = f4Opacity.toPrecision(1)
            flame.style.opacity = `${f4Opacity}`;
        } else if (flame.id === "flame5" && f5Opacity > 0.0) {
            flamesCounter -= 1
            f5Opacity -= 0.1;
            f5Opacity = f5Opacity.toPrecision(1)
            flame.style.opacity = `${f5Opacity}`;
        };   
        
    }

    static pentagram() {
        document.getElementById('pentagram-img').style.opacity = "1";
        document.querySelectorAll('.flame').forEach(flame => flame.style.display = 'none') 
    }

}

document.querySelectorAll('.flame').forEach(flame => {
    flame.addEventListener('click', (e) => {  
        if (flamesCounter === 0) {
            Flames.pentagram();
        } else {
        Flames.flamesOut(e.target);
        }
     });
});

