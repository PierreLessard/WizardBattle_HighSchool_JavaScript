/**
April 7th Submission:
Added second player and added the sprites do that they work.
I integrated everything in a very wonky way because I had a little trouble trying
to replace the sprite easily but i did some basic logic to fix it
At the moment the code is not super readable but i will become easier to read.
The second player is controlled with i,j,l.
The next step is to add spells with their own sprites that will do damage to the 
opposing wizard.
By the way it is a little hard to test this when not in class because it is meant
for two people.
**/

/**
April 22nd Submission:
Added much need comments, however there are no new
comments on the new code, I tried adding them as I went
but i did not have much time. I will add them next time.
Included the  three spell types with their respective
damage. Players can use the spell by pressing u or e. At
the moment to choose which spell you have to go where
the class is defined and change which spell is active. I
will program the buttons at the top to work next time.
Each is spell is unique and has a different playstyle.
If a player is hit by a spell they lose health, shown at
the top. At the moment the hitreg is buggy, sometimes
spells can hit the person who sent them out.
Next time I will add extra comments for the new code.
Try and make it more efficient because it is very messy
right now. I will make sprites for the different spells.
I will make hit reg more reliable. I will add walls and
a crouching feature. Then I will finish the game.
**/

/**
May 8th Submission:
Very busy week with other classes so I mainly focused on cleaning up some code. I converted some areas of the main adddrawing to functions so it could be more clean and readable
**/

/**
May 20th submission:
Additions:
Added Sprites to each spell
Added radio buttons to first decide the spells of each wizard
Added end conditions
Added End Screen
Fixed Bugs:
Players taking damage the moment their shot goes out
random game reloads
Fixed healthbar bugs
I met most of the publishing requirements, however I didnt complete of instructions button.
I still have one bug that i need to fix. The ice spell does not work  when jumping sometime
**/

/**
June 8th submission:
Understandbly considering this was the final submission I chose to transfer my code location to GitHub to make publishing to a website much simpler. 
Therefore if you hope to find all of the code edits in prior submissions go to the original code pen where this was made: https://codepen.io/pierrelessard/pen/PoqRowz
Otherwise the github repo link is: https://github.com/PierreLessard/WizardBattle_HighSchool_JavaScript
The site where this code is being ran is: https://plessard.netlify.app/

Few changes were made for the submission:
Added instructions button
Added how to play description
Published to Netlify at: https://plessard.netlify.app/
Added code readability by seperating sections of code into different files
Removed the visible hitbox considering game is out of development

Fixed Bugs:
Fixed running and jump shooting bug where the spell would go straight up

**/

function main () {
  var w11 = document.getElementById('w11')
  var w12 = document.getElementById('w12')
  var w13 = document.getElementById('w13')
  var wizard1_spell_choices = [w11,w12,w13]
  
  var w21 = document.getElementById('w21')
  var w22 = document.getElementById('w22')
  var w23 = document.getElementById('w23')
  var wizard2_spell_choices = [w21,w22,w23]
  
  for (let i =0; i<3; i++) {
    if (wizard1_spell_choices[i].checked == true) {
      var wizard1_spell = wizard1_spell_choices[i].value
    }
    if (wizard2_spell_choices[i].checked == true) {
      var wizard2_spell = wizard2_spell_choices[i].value
    }
  }
  
  
  var w21 = document.getElementById('w21');
  var w22 = document.getElementById('w22');
  var w23 = document.getElementById('w23');
  
  game = GameCanvas('game');
  const floor = 350 //values incase I ever want to change screen size
  const rwall = 750
  var end= false

  var rightwiz1 = new Sprite ( // the red wizards right facing sprite
    { src:rightwiz1_src,
      x:200,
      y:200,
      frameWidth:32,
      frameHeight:32,
      targetWidth:50,
      targetHeight:50,
      frameRate : 10,
    })

  var leftwiz1 = new Sprite ({ // the red wizards left facing sprites
    src:leftwiz1_src,
      x:200,
      y:200,
      frameWidth:32,
      frameHeight:32,
      targetWidth:50,
      targetHeight:50,
      frameRate : 10,
  })

  var rightwiz2 = new Sprite ( // blue wizards right direction sprite
    { src:rightwiz2_src,
      x:200,
      y:200,
      frameWidth:32,
      frameHeight:32,
      targetWidth:50,
      targetHeight:50,
      frameRate : 10,
    })

  var leftwiz2 = new Sprite ({ // blue wizards left direction sprite
    src:leftwiz2_src,
      x:200,
      y:200,
      frameWidth:32,
      frameHeight:32,
      targetWidth:50,
      targetHeight:50,
      frameRate : 10,
  })



  class Rectangle { // the class that defines how each wizard works
    constructor(x,y,ss='poison',id) {
      this.x = x //x and y function to track the wizards current position
      this.y = y
      this.xv = 0 //xv and yv track the wizard current 2 dimensional velocity
      this.yv = 0
      this.l = 50 // the height and length of the wizard's HITBOX  not sprite
      this.h = 50
      this.f_state = false //tracks whether the wizard is currently on the floor or not
      this.key_state = [0,0,0] //w a d states respectively
      this.change = true; // tracks whether the directional state of the wizard has changed
      this.right = true // tracks the current directional state of the wizard
      this.shoot = false //tracks spell use
      this.selected_spell = ss
      this.health = 100
      this.id = id; // puts the spell in front of them so they do not get hit
    }

    vel_update() { // runs each time and applies positional changes
      if (this.y > floor-5) { // checks whether the qizard is on the floor or not
        this.f_state =  true
        if (this.y > floor) { // makes sure that the wizard does not accidentaly clip out of bounds
          this.y = floor
        }
      }

      if (this.key_state[0] == true && this.f_state == true){ // if the user has indicated the wizard to jump, and the wizard is on the floor
        this.yv += 10
        this.key_state[0] = false // set the jumping state back to false
        this.f_state = false // because they have jumped floor state is false
      }

      if (this.key_state[1] == true && this.f_state == true){ // if user indicates to move left and is on the ground
        this.xv -= 10
        this.right = false // the character is moving left therefore right is false
      }
      else if (this.key_state[1] == true) { // if they indicated however are not on the ground
        this.xv -= .3 // smaller increase
        this.right = false
      }

      if (this.key_state[2] == true && this.f_state == true){ // if they indicated to move rihgt
        this.xv += 10
        this.right = true // the character is moving right therefore they are looking right
      }
       else if (this.key_state[2] == true) { // if they are indicate but not on ground
        this.xv += .3 // smaller increase
        this.right = true
      }

      if (this.f_state == true) {// if they are on the floor
        this.yv = 0 // they should not be moving on the y axis
        this.xv -= this.xv/2 // more friction because ground
      }
      else {
        this.yv -= .5 // gravity 
        this.xv -= Math.sign(this.xv) *.1 // mid-air friction
      }

      this.x += this.xv // apply velocity changes
      this.y -= this.yv
    }

    draw({ctx}) { // function that draws the hit box
      ctx.beginPath(); // code bugs out if I take out this useless begin&stroke
      ctx.stroke()
    }

  }

  var drawing_num = 1; // tracks how many drawings have been made
  var active_player // tracks which player is shooting

  var player1 = new Rectangle(0,floor,wizard1_spell,1)// creates wiz1/red wizard
  var last_wiz1 = 0; //tracks which last drawing was Wiz1
  var first_time = 0 //temp variable for some reason bug wont go away with out it

  var player2 = new Rectangle(rwall,floor,wizard2_spell,2)// creates wiz2/blue wizard
  var last_wiz2 = 0; //tracks which last drawing was wiz1
  player2.right = false // on default wiz1 should look left

  var players = [player1,player2]
  var spells = [] // a list of all the active spells

  game.addDrawing(function ({ctx,elapsed}) {
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,rwall+50,floor+50)// draws the background
    player1.draw({ctx})//draws the hitbox and also updates the velocity of each
    player2.draw({ctx})
    if (first_time == 0) {
      player2.key_state[1] = false
      player1.key_state[2] = false
      first_time ++
    }

    //draws health bars
    ctx.fillStyle = 'red'
    ctx.fillRect(0,0,player1.health*4,20)
    if (player2.health>=0) { //fixes bug where blue box goes negative in width
      ctx.fillStyle = 'blue'
      ctx.fillRect(400,0,player2.health*4,20)
    }
    // this section here gives each sprite class the data from their respective wiz
    rightwiz1.x = player1.x
    rightwiz1.y = player1.y
    leftwiz1.x = player1.x
    leftwiz1.y = player1.y

    rightwiz2.x = player2.x
    rightwiz2.y = player2.y
    leftwiz2.x = player2.x
    leftwiz2.y = player2.y

    if (player1.change == true) { // does orientation and animation for player 1
      if (last_wiz1 >= 1) { // removes the previous instance of that wizard
        game.removeDrawing(last_wiz1-1)
      }
      //documents which drawing this wizard is
      drawing_num += 1
      last_wiz1 = drawing_num

      if (player1.right == true) { //checks which direction the wiz is looking and draws the right wiz
        game.addDrawing(rightwiz1)
      }
      else {
        game.addDrawing(leftwiz1)
      }
      player1.change = false
    }

    if (player2.change == true) { // does same thing as last section but for wiz2
      if (last_wiz2 >= 1) {
        game.removeDrawing(last_wiz2-1)
      }
      drawing_num += 1
      last_wiz2 = drawing_num

      if (player2.right == true) {
        game.addDrawing(rightwiz2)
      }
      else {
        game.addDrawing(leftwiz2)
      }
      player2.change = false
    }

    if (player1.shoot == true || player2.shoot == true) {
      if (player1.shoot == true) {
        active_player = player1
      }
      else {
        active_player = player2
      }
      if(active_player.selected_spell == 'poison') {
        var shot = new Poison({
          src:poison_src,
          x:active_player.x+50,
          y:active_player.y-10,
          frameWidth:32,
          frameHeight:32,
          targetWidth:10,
          targetHeight:10,
          frameRate : 10,
          update : function ({sprite,stepTime}) {
            sprite.yv-=.5
            sprite.xv*=.99
            sprite.x += sprite.xv
            sprite.y -= sprite.yv
            if(sprite.y>floor+50) {
              sprite.yv*=-1
            }
            if(sprite.x>rwall+50 || sprite.x<0) {
              sprite.xv*=-1
            }
          }
        })
      }
      if(active_player.selected_spell == 'ice') {
        var shot = new Ice({
          src:ice_src,
          x:active_player.x+50,
          y:active_player.y-10,
          frameWidth:32,
          frameHeight:32,
          targetWidth:25,
          targetHeight:10,
          frameRate : 120,
          update : function ({sprite,stepTime}) {
            sprite.yv-=.1
            sprite.xv*=.99
            sprite.x += sprite.xv
            sprite.y -= sprite.yv
          }
        })
      }
      if(active_player.selected_spell == 'fire') {
        var shot = new Fire({
          src:fireball_src,
          x:active_player.x+50,
          y:active_player.y-10,
          frameWidth:32,
          frameHeight:32,
          targetWidth:5,
          targetHeight:5,
          frameRate : 10,
          update : function ({sprite,stepTime}) {
            sprite.yv-=.1
            if (Math.sign(sprite.xv) == 1) {
              sprite.xv**=1.03
            }
            else {
              sprite.xv*=-1
              sprite.xv**=1.03
              sprite.xv*=-1
            }
            sprite.x += sprite.xv
            sprite.y -= sprite.yv
            sprite.targetWidth += 5*stepTime/100;
            sprite.targetHeight += 5*stepTime/100;

          }
        })
      }
      game.addDrawing(shot)
      spells.push([shot,active_player.id])
      active_player.shoot = false  
    }

    for (let l = 0; l<spells.length; l++) {
      for (let g=0; g!=2; g++){
        if((spells[l][0].x >players[g].x && spells[l][0].x<players[g].x+50)&&(spells[l][0].y>players[g].y && spells[l][0].y<players[g].y+50)&&(spells[l][1]!=players[g].id)) {
           players[g].health-=spells[l][0].damage
          spells[l][0].deactivate()
          if (players[g].health<=0) {
            end=true;
          }
        }
        if (end==true) {
          spells[l][0].deactivate()
        }
      }
    }

    if (end==true) {
      if (player1.health > 0) {
        ctx.fillText("Wizard 1" + " Wins", rwall/2,floor/2)
      }
      else {
        ctx.fillText("Wizard 2" + " Wins", rwall/2,floor/2)
      }
    }
  })


  class Spell extends Sprite { //main spell class to be inherited
    constructor (params) {
      super(params);
      if (this.x<player1.x+51 && this.x>player1.x+49) {
        this.player=player1
      }
      else {
        this.player=player2
      }
      this.xv = params.vx
      this.yv = params.vy
      drawing_num++
      this.draw_id=drawing_num-1
      if(this.player.right == false) {
        this.x-=53
        this.xv*=-1
      }
      else{
        this.x+3
      }
      this.y+=20
      this.xv+=this.player.xv
      this.active = true
      this.update = (config) => {
        if (params.update) {
          params.update(config)
        }
        if (this.x>rwall+65) {
          this.deactivate()
        }
        if(this.y>floor+65) {
          this.deactivate()
        }
      }
    }

    deactivate () {
      this.active = false
      game.removeDrawing(this.draw_id)
      this.x = 10000
      this.y= -100
    }
  }

  class Poison extends Spell { //poison spell class
    constructor(params) {
      super(params);
      this.xv = this.player.xv+(10*Math.sign(this.player.xv))
      this.yv = 10
      this.damage = 50
    }
  }
  class Ice extends Spell { //ice spell class
    constructor(params) {
      super(params);
      this.xv = this.player.xv+(40*Math.sign(this.player.xv))
      this.yv = 0
      this.damage = 10
    }
  }
  class Fire extends Spell { //fire spell class
    constructor(params) {
      super(params);
      this.y+=30
      this.xv = this.player.xv+(3*Math.sign(this.player.xv))
      this.yv = 2.5
      this.damage = 20
    }
  }
  game.addHandler('keydown', function ({event}){ //tracks when a key is pressed down
    //mainly left right states
    if (end!=true){
        if (event.key == 'd') {
          player1.key_state[2]=true //d state
        }
        if (event.key == 'a') {
          player1.key_state[1]=true //a state
        }

        if (event.key == 'l') {
          player2.key_state[2]=true //d state
        }
        if (event.key == 'j') {
          player2.key_state[1]=true //a state
        }
      }
  })

  game.addHandler('keyup', function ({event,elapsed}) {//checks if a key is let go
    if (end!=true){
        if (event.key == 'd') {
          player1.key_state[2]=false //d state
        }
        if (event.key == 'a') {
          player1.key_state[1]=false //a state
        }

        if (event.key == 'l') {
          player2.key_state[2]=false //d state
        }
        if (event.key == 'j') {
          player2.key_state[1]=false //a state
        }
    }
  })

  game.addHandler('keypress', function ({event}) {
    if (end!=true){
        if ((event.key == 'w' || event.key == ' ')) {
          player1.key_state[0]=true //w state
        }   
        if (event.key == 'r') {//resets
          player1.x=0;player1.y=floor;player1.xv=0;player1.yv=0;
          player2.x=rwall;player2.y=floor;player2.xv=0;player2.yv=0;
        }
        if (event.key == 'a' || event.key == 'd') {
          if (player1.key_state[1] == false) {
            player1.change = true
          }
          else if(player1.key_state[2] == false) {
            player1.change = true
          }
        }
        if (event.key == 'e') {
          player1.shoot = true
        }

        if (event.key == 'i' || event.key == ' ') {
          player2.key_state[0]=true 
        }
        if (event.key == 'j' || event.key == 'l') {
          if (player2.key_state[1] == false) {
            player2.change = true
          }
          else if(player2.key_state[2] == false) {
            player2.change = true
          }
        }
        if (event.key == 'u') {
          player2.shoot = true
        }
    }
  })

  player2.key_state[1] = true
  player1.key_state[2] = true

  game.run() // run game
}