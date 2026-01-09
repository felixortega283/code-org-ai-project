var learning_rate = 0.01;
var bias = 1;
var epochs = 2000;

var inputsAmount = 90; // In percentage, amount of training data that's used.
inputsAmount = inputsAmount / 100;

var excludedInputs = ["Class", "Image"];

var imageURLBase =
  "https://raw.githubusercontent.com/felixortega283/brain-images/refs/heads/main/Brain%20Tumor/";

var modelInformation = [
  {
    Name: "Cancer Predictor",
    ModelType: "Unkown (code.org's model)",
    Accuracy: "85.41%",
    Description:
      "The intended use of this model is to help doctors predict if the brain tumor they're examining is malignant or not. ()",
    Thumbnail: "code.org-logo.png"
  },
  {
    Name: "CancerGPT",
    ModelType: "Perceptron sigmoid activation function model",
    Accuracy: "Accuracy assesment not complete yet",
    Description:
      "The intended use of this model is to help doctors predict if the brain tumor they're examining is malignant or not." +
       "As a bonus for this model, I will include more information on the perceptron. The perceptron is the most basic form of machine learning." +
       "It works by creating weights for each input that the model recieves and an extra one for bias. The model then tries to guess the answer for" +
       "each question and learns using trial and error.",
    Thumbnail: "perceptron.png"
  },
];

var returnButtonsAmount = 3;
