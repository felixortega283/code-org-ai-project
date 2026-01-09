// @include data.js
// @include settings.js
// @include machine-learning.js
// @include helpers.js
// @include game.js
// @include uiEvents.js

function main() {
  var trainingFraction = inputsAmount;

  if (trainingFraction > 1) {
    trainingFraction = 1;
  }

  if (trainingFraction < 0) {
    trainingFraction = 0;
  }

  var dataRandom = shuffle(data);

  var trainingCount = Math.max(1, Math.round(data.length * trainingFraction));
  var trainingData = dataRandom.slice(0, trainingCount - 1);
  var testData = dataRandom.slice(trainingCount - 1);

  console.log("Creating inputs");
  var inputs = createInputs(trainingData);
  var weights = [];
  var answers = getAnswers(trainingData, "Class");

  // creating weights (include bias weight)
  var weightsNumber = Object.keys(inputs[0]).length + 1;

  console.log("Creating weights");
  for (var weightsIndex = 0; weightsIndex < weightsNumber; weightsIndex++) {
    weights.push(Math.random());
  }

  console.log("Training AI");

  for (var epochNumber = 0; epochNumber < epochs; epochNumber++) {
    // console.log("Epoch #" + (epochNumber + 1));
    weights = perceptron(inputs, weights, answers);
  }

  if (testData.length === 0) {
    console.log("Training complete.");
    return;
  }

  console.log("Training complete");
  console.log("Accuracy assessment begin");

  var predictionInputs = createInputs(testData);
  var predictionAnswers = getAnswers(testData, "Class");
  var accuracy = [];

  for (var testIndex = 0; testIndex < predictionInputs.length; testIndex++) {
    var predictionAccuracy = predict(
      predictionInputs[testIndex],
      weights,
      predictionAnswers[testIndex]
    );
    accuracy.push(predictionAccuracy);
  }

  //calculate accuracy
  console.log("Calculating accuracy...");
  var accuracySum = 0;

  for (
    var accuracyIndex = 0;
    accuracyIndex < accuracy.length;
    accuracyIndex++
  ) {
    accuracySum += accuracy[accuracyIndex];
  }

  var finalAccuracy = Math.round((accuracySum / accuracy.length) * 100);
  console.log("Final accuracy is " + finalAccuracy + "%!!!");
  console.log(weights);
}

// main();
