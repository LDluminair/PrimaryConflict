var playerDamage = 0;
var compDamage = 0;
var playerWins = 0;
var compWins = 0;
  var gameOver = false;

// Logs player color selection

$(".chooser").on("click", function(event) {
  var playerChoice = this.id;

  // Selects the computers color in compSelect

  var colorList = ["red", "yellow", "blue"];
  var index = colorList.indexOf(playerChoice)
  colorList.splice(index, 1);
  var compSelect = colorList[Math.floor(Math.random() * 2)]
  gameStart(playerChoice, compSelect);

});



// Brings up the battlebox and shows selection and info

function gameStart(playerChoice, compSelect) {
  console.log(playerDamage, compDamage)
  $(".infoBox").removeClass("hidden");
  $(".battleBox").removeClass("hidden");
  $(".playerChar").addClass("hidden");
  $(".playerImg").addClass(playerChoice);
  $(".compImg").addClass(compSelect);
  $(".playerColor").text( playerChoice.toUpperCase());
  $(".compColor").text( compSelect.toUpperCase());
  $(".scoreBox h4").text(playerWins + " Score " + compWins)
    $(".compHp").text("💚💚💚")
      $(".playerHp").text("💚💚💚")
  playerDamage = 0;
  compDamage = 0;
  console.log(playerDamage, compDamage)

  primaryConflict();

}

function primaryConflict() {

  var battleAction = null;
  var compClick = null;
  $(".playerAction").on("click", function(event) {

    battleAction = this.id;

      if (battleAction === "fight") {
          fightAction();
      }

       else if (battleAction === "heal") {
         healAction();
       }

      compBattleAction()
      playerHealthCheck();
      compHealthCheck();


    endGameCheck();
      $(".scoreBox h4").text(playerWins + " Score " + compWins)

  });

}

// PLAYER ACTIONS---------------------------------------------------------------

function fightAction() {

// Does the attack hit----------------------------------------------------------

  var hitChance = Math.random()
  if (hitChance >= .5) {
    compDamage++;
    $(".compMessage").text("-1");
    setTimeout(function() {
      $(".compMessage").text("");
    }, 1000);

  }
  else {
    $(".compMessage").text("Miss");
    setTimeout(function() {
      $(".compMessage").text("");
    }, 1000);
  }
};

  function healAction() {

// Is the heal a success--------------------------------------------------------

    var healChance = Math.random();
    if (healChance >= .6) {
      healChance = true

// Reaction to the heal---------------------------------------------------------

      if (playerDamage === 0) {
        $(".playerMessage").text("HP FULL");
        setTimeout(function() {
          $(".playerMessage").text("");
        }, 1000);
      }
      else{playerDamage--;
      $(".playerMessage").text("+1");
      setTimeout(function() {
        $(".playerMessage").text("");
      }, 1000);
      console.log(" player healed")
    }
  }
       else {
      $(".playerMessage").text("Failed");
      setTimeout(function() {
        $(".playerMessage").text("");
      }, 1000);
      console.log("failed heal")
      }

    }


// COMPUTER ACTIONS-------------------------------------------------------------


  function compBattleAction() {
    var actionsCompTakes = ["fight", "heal"];
    var compActionTaken = actionsCompTakes[Math.floor(Math.random() * 2)]

    console.log("comp does " + compActionTaken)
    if (compActionTaken === "fight") {
      compFightAction();
    }
    else if (compActionTaken === "heal") {
      compHealAction();
    }

  }

// COMP FIGHT ACTION------------------------------------------------------------

  function compFightAction() {

// Does the attack hit

    var hitChance = Math.random()
    if (hitChance >= .5) {
      hitChance = true;
      $(".playerMessage").text("-1");
      setTimeout(function() {
        $(".playerMessage").text("");
      }, 1000);
      playerDamage++;
    }

// Attack success


   else {
      $(".playerMessage").text("Miss");
      setTimeout(function() {
        $(".playerMessage").text("");
      }, 1000);
      console.log("fight missed")
    }
  };

// COMP HEAL ACTION-------------------------------------------------------------

  function compHealAction() {

// Does the heal hit

    var healChance = Math.random();
    if (healChance >= .6) {
      healChance = true

// full health bar

      if (compDamage === 0) {
        $(".compMessage").text("HP FULL");
        setTimeout(function() {
          $(".compMessage").text("");
        }, 1000);
      } else {
        compDamage--;

        $(".compMessage").text("+1");
        setTimeout(function() {
          $(".compMessage").text("");
        }, 1000);
        console.log("healed")
      }
    }
    else {
      $(".compHpMessage").text("Failed");
      setTimeout(function() {
        $(".compMessage").text("");
      }, 1000);
      console.log("failed heal")
    }

  }

// IS ANYBODY DEAD--------------------------------------------------------------

  function endGameCheck() {

    if (playerDamage === 3) {
      compWins++;
      $(".infoBox").addClass("hidden");
      $(".battleBox").addClass("hidden");
      $("#final").text("DEFEAT!.").removeClass("hidden");
      setTimeout(function(){$("#final").text("Nice Try.");}, 1000);
      setTimeout(function(){$(".playerChar").removeClass("hidden");}, 2000)
      setTimeout(function(){$("#final").text("").addClass("hidden");}, 2000);


    }
    else if (compDamage === 3) {
      playerWins++;
      $(".infoBox").addClass("hidden");
      $(".battleBox").addClass("hidden");
      $("#final").text("You Win!").removeClass("hidden");
      setTimeout(function(){$("#final").text("Good Job!");}, 1000);
      setTimeout(function(){$(".playerChar").removeClass("hidden");}, 2000)
      setTimeout(function(){$("#final").text("").addClass("hidden");}, 2000);



    }

console.log(playerDamage, compDamage)
  }

// UPDATE HEALTH BARS----------------------------------------------------------

  function compHealthCheck(){
   if (compDamage === 3){
       $(".compHp").text("")
       // 💚💚💚
       console.log("I am dead");
       
   }
   else if(compDamage === 2){
     $(".compHp").text("💚")
   }
   else if (compDamage === 1){
       $(".compHp").text("💚💚")
   }
  else{
     $(".compHp").text("💚💚💚")
  }
  console.log("comp " + compDamage)
}

// player

 function playerHealthCheck(){

if (playerDamage === 3){
    $(".playerHp").text("")
    // 💚💚💚
    console.log("I am dead");

}
else if(playerDamage === 2){
  $(".playerHp").text("💚")
}
else if (playerDamage === 1){
    $(".playerHp").text("💚💚")
}
else{
  $(".playerHp").text("💚💚💚")
}
console.log("player " + playerDamage)
}
