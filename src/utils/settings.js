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
    Thumbnail: "code.org-logo.png",
  },
  {
    Name: "CancerGPT",
    ModelType: "Perceptron sigmoid activation function model",
    Accuracy: "92%",
    Description:
      "The intended use of this model is to help doctors predict if the brain tumor they're examining is malignant or not." +
      "As a bonus for this model, I will include more information on the perceptron. The perceptron is the most basic form of machine learning." +
      "It works by creating weights for each input that the model recieves and an extra one for bias. The model then tries to guess the answer for" +
      "each question and learns using trial and error.",
    Thumbnail: "perceptron.png",
  },
];

var returnButtonsAmount = 3;
var gameSettings = {
  ImageAmount: 10,
};

var modelWeights = [
  -1056.73380805559, 27.57378470786862, -625.7808829260271, -709.7240147748106,
  470.74364811754253, 13.818799081284595, -30.353221911997544,
  -1353.3458296549281, -579.2157792402232, -1001.1392480055885,
  1961.6750670363058, -217.1538395647259, 0.921185570878162,
  -219.36875564568305,
];
