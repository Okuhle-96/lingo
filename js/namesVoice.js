    var voiceBtn = document.querySelector(".voice")
    const URLv = "https://teachablemachine.withgoogle.com/models/AFHbI07t6/";

    async function createModel() {
        const checkpointURL = URLv + "model.json"; 
        const metadataURLs = URLv + "metadata.json"; 

        const recognizer = speechCommands.create(
            "BROWSER_FFT", 
            undefined,
            checkpointURL,
            metadataURLs);

        
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    async function initVoice() {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); 
        const labelContainers = document.getElementById("label-containers");
        for (let i = 0; i < classLabels.length; i++) {
            labelContainers.appendChild(document.createElement("div"));
        }

        recognizer.listen(result => {
            const scores = result.scores; 
            for (let i = 0; i < classLabels.length; i++) {
const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
labelContainers.childNodes[i].innerHTML = classPrediction;
            }
        }, {
            includeSpectrogram: true, 
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 
        });

     
    }voiceBtn.addEventListener('click', initVoice);