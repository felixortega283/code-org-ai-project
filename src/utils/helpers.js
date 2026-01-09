function shuffle(dataSet) {
  // Fisher yates algorithm, cool 😎 <-- if this doesn't render, it's a sunglasses emoji.
  var shuffledDataSet = dataSet;

  for (var i = dataSet.length - 1; i > 0; i--) {
    var randomI = Math.floor(Math.random() * (i + 1));

    /* 
    Never used destructuring until now, so a yt video helped me lol
    */

    // [shuffledDataSet[randomI], shuffledDataSet[i]] = [shuffledDataSet[i], shuffledDataSet[randomI]];
    //nvm this doesn't work on code.org but i'll keep it here because i think it looks cool

    var oldVal = shuffledDataSet[i];

    shuffledDataSet[i] = shuffledDataSet[randomI];
    shuffledDataSet[randomI] = oldVal;
  }
  return shuffledDataSet;
}
