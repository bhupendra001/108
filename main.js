function start() {
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier=ml5.soundClassifier('',modelready)
}

function modelready(){

classifier.classify(gotready)

}

function gotready(error,result){

if(error){

console.error(error)

}

else{

console.log(result);
random_red = Math.floor(Math.random()*255)+1;
random_green = Math.floor(Math.random()*255)+1;
random_blue = Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML = "I can hear - " + result[0].label;
document.getElementById("result_confidence").innerHTML = "Accuracy -" + (result[0].confidence*100).toFixed(2);

document.getElementById("result_label").style.color = "rgb(" + random_red + "," + random_green + "," + random_blue + ")";

document.getElementById("result_confidence").style.color = "rgb(" + random_red + "," + random_green + "," + random_blue + ")";


Img = document.getElementById("aliens-01");
Img1 = document.getElementById("aliens-02");
Img2 = document.getElementById("aliens-03");
Img3 = document.getElementById("aliens-04");

if(result[0].label == "clap"){

Img.src = "aliens-01.gif"
Img1.src = "aliens-02.png"
Img2.src = "aliens-03.png"
Img3.src = "aliens-04.png"

}
else if(result[0].label == "bell"){

    Img.src = "aliens-01.png"
    Img1.src = "aliens-02.gif"
    Img2.src = "aliens-03.png"
    Img3.src = "aliens-04.png"
    
    }

    else if(result[0].label == "snapping"){

        Img.src = "aliens-01.png"
        Img1.src = "aliens-02.png"
        Img2.src = "aliens-03.gif"
        Img3.src = "aliens-04.png"
        
        }

        else {

            Img.src = "aliens-01.png"
            Img1.src = "aliens-02.png"
            Img2.src = "aliens-03.png"
            Img3.src = "aliens-04.gif"
            
            }
}


}