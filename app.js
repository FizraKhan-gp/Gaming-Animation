var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");
var left = 0;
var right = 0;
function animateChar(){
    //character 1 - Right Arrow Key
    if(event.keyCode == 39 && left < 1300){
        left = left+10
        char1.style.left = left + "px"
        char1.style.transform = "scaleX(1)"
        char1.src="https://www.fightersgeneration.com/characters/alicewf.gif"
        setTimeout(()=>{
            char1.src="https://www.fightersgeneration.com/characters/alicestance.gif"
        },1000)

    }
    //character 1 - Left Arrow Key
      if(event.keyCode == 37 && left > 30){
        left = left-10
        char1.style.left = left + "px"
        char1.style.transform = "scaleX(-1)"
        char1.src="https://www.fightersgeneration.com/characters/alicewf.gif"
        setTimeout(()=>{
            char1.src="https://www.fightersgeneration.com/characters/alicestance.gif"
        },1000)
    }
    //character 1 - Space Key
    if(event.keyCode == 32){
        // char1.src="https://www.fightersgeneration.com/np8/char/alice-doubleprojectile.gif"
        // char1.style.height="250px"
        //  setTimeout(()=>{
        //     char1.src="https://www.fightersgeneration.com/characters/alicestance.gif"
        // },1000)
        
        char1.src ="https://www.fightersgeneration.com/characters/alice12.gif"
        char1.style.height= "250px"
        setTimeout(()=>{
            char1.src ="https://www.fightersgeneration.com/characters/alicestance.gif"
            char1.style.height= "90px"

        },3000)
    }
   // Character 2 - D (Right)
    if (event.keyCode == 68 && right < 1200) {
        right = right + 10;
        char2.style.left = right + "px";
        char2.style.transform = "scaleX(1)";
        char2.src = "assets/images/akuma-snkwin.gif";
    }

    // Character 2 - A (Left)
    if (event.keyCode == 65 && right > 30) {
        right = right - 10;
        char2.style.left = right + "px";
        char2.style.transform = "scaleX(-1)";
        char2.src = "assets/images/akuma-snkwin.gif";
    }
       // Character 2 - W (Jump)
    if (event.keyCode == 87) {
        char2.style.height = "250px";

        setTimeout(() => {
            char2.src="https://www.fightersgeneration.com/characters/akuma-ts-taunt1.gif"
            char2.style.height = "200px";
        }, 1000);
    }
  
}

window.onkeydown = animateChar

alert("Welcome to Fighting Game! 🎮");

alert("Player 1: Use Arrow Keys to Move and Space to Jump.");

alert("Player 2: Use A, D keys to Move and W to Jump.");

alert("Game Started! Best of Luck 😊");