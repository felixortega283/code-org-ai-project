function choiceScreen(choice1Text, choice2Text, choice1Function, choice2Function){
    this.choice1Text = choice1Text;
    this.choice2Text = choice2Text;

    this.listenerActive = true;
    
    /* 
        code.org doesn't seem to support destroying event listeners,
        we're going to have to disable them instead. this isn't ideal
        however i think it's fine for a small app like this.
    */

    var self = this;
    this.choice2Event = onEvent("choice1Button", "click", function(){ 
        if (!self.listenerActive){
            return;
        }

        self.listenerActive = false;
        choice1Function();
    });

    this.choice2Event = onEvent("choice2Button", "click", function(){
        if (!self.listenerActive){
            return;
        }
        
        self.listenerActive = false;
        choice2Function();
    });
}

onEvent("gameButton", "click", function(){ 
    
});
