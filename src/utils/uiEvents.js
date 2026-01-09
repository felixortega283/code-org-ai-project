function startGame() {}

function setModelDescription(model) {
  setText(
    "modelDescription",
    "Name: " +
      model.Name +
      "\n" +
      "Model Type: " +
      model.ModelType +
      "\n" +
      "Accuracy: " +
      model.Accuracy +
      "\n" +
      "Description: " +
      model.Description +
      "\n"
  );

  setImageURL("modelImage", model.Thumbnail);
}

function choiceScreen(
  choice1Text,
  choice2Text,
  titleText,
  choice1Function,
  choice2Function
) {
  this.choice1Text = choice1Text;
  this.choice2Text = choice2Text;
  this.titleText = titleText;

  this.listenerActive = true;

  /* 
        code.org doesn't seem to support destroying event listeners,
        we're going to have to disable them instead. this isn't ideal
        however i think it's fine for a small app like this.
        this is also just to avoid memory leaks
    */

  var self = this;
  this.choice2Event = onEvent("choice1Button", "click", function () {
    if (!self.listenerActive) {
      return;
    }

    self.listenerActive = false;
    choice1Function(choice1Text);
  });

  this.choice2Event = onEvent("choice2Button", "click", function () {
    if (!self.listenerActive) {
      return;
    }

    self.listenerActive = false;
    choice2Function(choice2Text);
  });

  setText("choice1Button", this.choice1Text);
  setText("choice2Button", this.choice2Text);
  setProperty("chooseLabel", "text", this.titleText);

  setScreen("chooseScreen");
}

onEvent("gameButton", "click", function () {
  new choiceScreen(
    "CancerGPT", // Choice 1
    "Cancer Predictor", // Choice 2
    "Choose your competitor!", // Title
    function (choice1Text) {
      // Choice 1 Function
      setScreen("gameScreen");
      startGame(choice1Text);
    },
    function (choice2Text) {
      // Choice 2 Function
      setScreen("gameScreen");
      startGame(choice2Text);
    }
  );
});

onEvent("modelInfoButton", "click", function () {
  new choiceScreen(
    "CancerGPT",
    "Cancer Predictor",
    "Choose model",
    function () {
      setModelDescription(modelInformation[1]); // CancerGPT
      setScreen("modelInformation");
    },
    function () {
      setModelDescription(modelInformation[0]); // Cancer Predictor
      setScreen("modelInformation");
    }
  );
});

// create return buttons

for (var buttonI = 0; buttonI < returnButtonsAmount; buttonI++) {
  onEvent("returnButton" + buttonI, "click", function () {
    setScreen("homeScreen");
  });
}
