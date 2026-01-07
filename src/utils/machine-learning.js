function getAnswers(dataset, answerKey, amount) {
  var answers = [];
  var limit = amount;

  if (limit === undefined) {
    limit = dataset.length;
  }

  for (var answerIndex = 0; answerIndex < limit; answerIndex++) {
    var currentElement = dataset[answerIndex];

    try {
      answers.push(parseFloat(currentElement[answerKey]));
    } catch (err) {
      return err;
    }
  }

  return answers;
}

function createInputs(dataset, dataLength) {
  var inputs = [];
  var limit = dataLength;

  if (limit === undefined) {
    limit = dataset.length;
  }

  if (limit > dataset.length) {
    limit = dataset.length;
  }

  for (var dataIndex = 0; dataIndex < limit; dataIndex++) {
    var element = dataset[dataIndex];
    var potentialInputs = Object.keys(element);
    var cleanedElement = {};

    for (var index = 0; index < potentialInputs.length; index++) {
      var currentInput = potentialInputs[index];

      if (excludedInputs.indexOf(currentInput) > -1) {
        continue;
      }

      cleanedElement[currentInput] = element[currentInput];
    }
    inputs.push(cleanedElement);
  }

  return inputs;
}

function perceptron(inputs, weights, answers) {
  // model is a perceptron
  for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
    var input = inputs[inputIndex];
    var keys = Object.keys(input);
    var prediction = 0;

    for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
      var key = keys[keyIndex];
      var inputValue = parseFloat(input[key]);
      prediction += weights[keyIndex] * inputValue;
    }

    prediction += weights[weights.length - 1] * bias;

    var sigmoid = parseFloat(1 / (1 + Math.pow(Math.E, - prediction)));
    var sigmoidRounded = Math.round(sigmoid);

    if (sigmoidRounded > 0) {
      prediction = 1;
    } else {
      prediction = 0;
    }

    var expected = parseFloat(answers[inputIndex]);
    var error = expected - sigmoid;

    for (var keyIndexTrain = 0; keyIndexTrain < keys.length; keyIndexTrain++) {
      var newKey = keys[keyIndexTrain];
      var inputTrainingValue = parseFloat(input[newKey]);
      weights[keyIndexTrain] += error * inputTrainingValue * learning_rate;
    }

    weights[weights.length - 1] += error * bias * learning_rate;
  }

  return weights;
}

function predict(element, weights, answer) {
  var prediction = 0;
  var inputKeys = Object.keys(element);

  for (var inputIndex = 0; inputIndex < inputKeys.length; inputIndex++) {
    var key = inputKeys[inputIndex];
    var inputValue = parseFloat(element[key]);
    prediction += weights[inputIndex] * inputValue;
  }

  prediction += weights[weights.length - 1] * bias;
  var sigmoid = parseFloat(1 / (1 + Math.pow(Math.E, -prediction)))
  var sigmoidRounded = parseFloat(Math.round(sigmoid))

  prediction = sigmoidRounded;

  if (prediction !== parseFloat(answer)) {
    return 0;
  }

  return 1;
}
