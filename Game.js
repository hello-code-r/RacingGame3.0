class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
   form.greeting.hide();
   textSize(25);
   text("Game Start!",150, 300);
   Player.getPlayerInfo();
   // !== mean not equal to
   if(allPlayers!==null){
    var posDisplay = 130;
    for(var plr in allPlayers){
      if(plr === "player" + player.index)
      fill("blue");
      else fill("green");
      posDisplay+=20;
      textSize("10");
      text(allPlayers[plr].name+":" + allPlayers[plr].distance, 130, posDisplay);
    }
   }

      if(keyDown(UP_ARROW) && player.index!==null){
        player.distance+=35;
        player.update();
      }
  }
}
