const URL = "https://teachablemachine.withgoogle.com/models/M84DSAFbh/";

let model, webcam, labelContainer, maxPredictions;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

  
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup(); 
    await webcam.play();
    window.requestAnimationFrame(loop);


    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { 
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}


async function predict() {

    let maxPrediction = 0;
    let name;
 
    const prediction = await model.predict(webcam.canvas);
    for (let prob of prediction) {
        if (prob.probability > maxPrediction){
            maxPrediction = prob.probability;
            name = prob.className;
        }
     
        labelContainer.innerHTML = name;
    }
}