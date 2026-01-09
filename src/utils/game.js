function cancerGPTPredictor(cleanedImage, answer) {
  console.log("Prediction started");

  console.log(cleanedImage);
  console.log(answer);
  var prediction = predict(cleanedImage, modelWeights, answer);
  var predictionCorrect;

  // Converting prediction to boolean
  if (prediction === 1) {
    predictionCorrect = true;
  } else {
    predictionCorrect = false;
  }

  console.log(
    "It is " + predictionCorrect + " that the AI's prediction was correct!"
  );
}

function round(currentImage, model) {
  var cleanedImage = {};
  var keys = Object.keys(currentImage);

  // Cleans image object for prediction
  for (var keyI = 0; keyI < keys.length; keyI++) {
    var currentKey = keys[keyI];

    if (excludedInputs.indexOf(currentKey) > -1) {
      console.log(currentKey);
      continue;
    }

    cleanedImage[currentKey] = currentImage[currentKey];
  }

  if ((model.Name = "CancerGPT")) {
    cancerGPTPredictor(cleanedImage, currentImage.Class);
  }
}

function startGame(model) {
  var gameImages = [];

  for (var ImageI = 0; ImageI < gameSettings.ImageAmount; ImageI++) {
    var newRandomI = randomNumber(0, data.length);

    gameImages.push(data[newRandomI]);
  }

  var currentImage = gameImages[randomNumber(0, gameImages.length)];
  setImageURL("gameImage", imageURLBase + currentImage.Image + ".jpg");
  setScreen("gameScreen");

  round(currentImage, model);
}
