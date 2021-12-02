
//     // <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
//     // <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
//     // <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
//     // <script
//     //     src="https://cdn.jsdelivr.net/npm/@tensorflow-models/speech-commands@0.4.0/dist/speech-commands.min.js"></script>
   
//         // More API functions here:
//         // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image
//         // the link to your model provided by Teachable Machine export panel
//         const URL = "https://teachablemachine.withgoogle.com/models/8kFIwad-N/";
//         const URLA = "https://teachablemachine.withgoogle.com/models/NLnPWFYG4/";
//         let model, webcam, labelContainer, maxPredictions;
//         // Load the image model and setup the webcam
//         async function init() {
//             const modelURL = URL + "model.json";
//             const metadataURL = URL + "metadata.json";
//             // load the model and metadata
//             // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
//             // or files from your local hard drive
//             // Note: the pose library adds "tmImage" object to your window (window.tmImage)
//             model = await tmImage.load(modelURL, metadataURL);

            


//             maxPredictions = model.getTotalClasses();
//             // Convenience function to setup a webcam
//             const flip = true; // whether to flip the webcam
//             webcam = new tmImage.Webcam(300, 300, flip); // width, height, flip
//             await webcam.setup(); // request access to the webcam
//             await webcam.play();
//             window.requestAnimationFrame(loop);
//             // append elements to the DOM
//             document.getElementById("webcam-container").appendChild(webcam.canvas);
//             labelContainer = document.getElementById("label-container");
            
        

//             for (let i = 0; i < maxPredictions; i++) { // and class labels
//                 labelContainer.appendChild(document.createElement("p"));
//             }

//             // <button type="button" onclick="initVoice()">Start Game</button>

//         }

//         async function initVoice() {
//             // console.log("Starting a voice model")
//             const recognizer = await createModel();
//             const classLabels = recognizer.wordLabels(); // get class labels
//             const labelContainerA = document.getElementById("label-containerA");
//             for (let i = 0; i < classLabels.length; i++) {
//                 labelContainerA.appendChild(document.createElement("divA"));
//             }

//             // listen() takes two arguments:
//             // 1. A callback function that is invoked anytime a word is recognized.
//             // 2. A configuration object with adjustable fields
//             recognizer.listen(result => {


//                 var slowDown = false;


//                 if(slowDown){
//                      return;
//                 }
//                 slowDown = true;

//                 console.log(result)
//                 let label;
//                 let max = 0; 
//                 const scores = result.scores; // probability of prediction for each class
//                 // render the probability scores per class
//                 for (let i = 0; i < classLabels.length; i++) {
//                     if( result.scores[i] > max){
//                         max = result.scores[i] 
//                         label = classLabels[i] 
//                     }

//                 //     const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
//                 //     labelContainerA.childNodes[i].innerHTML = classPrediction;
//                  }
//                  setTimeout(function(){ 
//                     slowDown = false ;
// // alert(label)
//                     labelContainerA.innerHTML = label;


//                   }, 10000);

//                 // let max = 0;
//                 // let label;
//                 // const scores = result.scores; // probability of prediction for each class
//                 // // render the probability scores per class
//                 // for (let prob of scores) {
//                 //     if(prob.probable > max){
//                 //         max = prob.probable;
//                 //         label = prob.classLabels
//                 //     }
//                 //     // const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
//                 //     labelContainerA.innerHTML = label;}
//             }, {
//                 includeSpectrogram: true, // in case listen should return result.spectrogram
//                 probabilityThreshold: 0.75,
//                 invokeCallbackOnNoiseAndUnknown: true,
//                 overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
//             });

//             // Stop the recognition in 5 seconds.
//             // setTimeout(() => recognizer.stopListening(), 5000);
        
//         }



//         async function loop() {
//             webcam.update(); // update the webcam frame
//             await predict();
//             window.requestAnimationFrame(loop);
//         }
//         // run the webcam image through the image model
//         var isityaAudio = new Audio('Sounds/Isitya.mp4');
        
//         let webCam = document.querySelector(".webCam");
//         // console.log(webCam)
//         // webCam.innerHTML = "aaa"

//         async function predict() {
//             var maxPredi = 0
//             var nameLebel;
//             // predict can take in an image, video or canvas html element
//             const prediction = await model.predict(webcam.canvas);

//             for (let props of prediction) {
//                 if (props.probability > maxPredi) {
//                     maxPredi = props.probability;
//                     nameLebel = props.className;
//                 }
                
//                 labelContainer.innerHTML = nameLebel;
//             }

//                 if(nameLebel == "Isitya"){
//                     isityaAudio.play();
//                     webCam.innerHTML = ""
//                     await webcam.stop();
//                     initVoice();
//                     const flip = true; // whether to flip the webcam
//             webcam = new tmImage.Webcam(300, 300, flip); // width, height, flip
//             await webcam.setup(); // request access to the webcam
//             await webcam.play();
//             window.requestAnimationFrame(loop);
//             document.getElementById("webcam-container").appendChild(webcam.canvas);
//             labelContainer = document.getElementById("label-container");
//                 } else {
//                     return
//                 }
//         }

//         async function createModel() {
//             const checkpointURL = URLA + "model.json"; // model topology
//             const metadataURLA = URLA + "metadata.json"; // model metadata

//             const recognizer = speechCommands.create(
//                 "BROWSER_FFT", // fourier transform type, not useful to change
//                 undefined, // speech commands vocabulary feature, not useful for your models
//                 checkpointURL,
//                 metadataURLA);

//             // check that model and metadata are loaded via HTTPS requests.
//             await recognizer.ensureModelLoaded();

//             return recognizer;
//         }
  