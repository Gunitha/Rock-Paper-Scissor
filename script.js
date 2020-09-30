document.querySelector("#second").classList.add("visible");
document.querySelector("#final").classList.add("visible");
document.querySelector(".rule-container").classList.add("visible");

let score=0;
const buttonOption =["red","blue","yellow"];

for(var i=0;i<=2;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        const buttonClass = this.classList;
        document.querySelector(".first").classList.add("visible");
        document.querySelector("#second").classList.remove("visible");
        for(var j=0;j<=buttonClass.length;j++);{
            if(buttonClass[j]==="red"||"yellow"||"blue"){
                const user= buttonClass[j];
                const computer = computerChoice();
                compareColours(user,computer);
                switch(user){
                    case "red": document.querySelector(".user button").classList.remove("yellow","blue");
                    document.querySelector(".user button").classList.add("red");
                    document.querySelector(".user button img").scr="./images/icon-rock.svg";
                    document.querySelector(".play-div .player").classList.remove("yellow","blue");
                    document.querySelector(".play-div .player").classList.add("red");
                    document.querySelector(".play-div .player img").scr="./images/icon-rock.svg";
                    break;

                    case "yellow": document.querySelector(".user button").classList.remove("red","blue");
                    document.querySelector(".user button").classList.add("yellow");
                    document.querySelector(".user button img").scr="./images/icon-scissors.svg";
                    document.querySelector(".play-div .player").classList.remove("red","blue");
                    document.querySelector(".play-div .player").classList.add("yellow");
                    document.querySelector(".play-div .player img").scr="./images/icon-scissors.svg";
                    break;

                    case "blue": document.querySelector(".user button").classList.remove("red","yellow");
                    document.querySelector(".user button").classList.add("blue");
                    document.querySelector(".user button img").scr="./images/icon-paper.svg";
                    document.querySelector(".play-div .player").classList.remove("red","yellow");
                    document.querySelector(".play-div .player").classList.add("blue");
                    document.querySelector(".play-div .player img").scr="./images/icon-paper.svg";
                    break;
                }
            }
        }    
    })
}

function computerChoice(){
    const choice = Math.floor(Math.random()*3);
    const computerColour = buttonOption[choice];
    switch(computerColour){
        case "red":setTimeout(function(){
            document.querySelector(".comp button").classList.remove("empty","yellow","blue");
            document.querySelector(".comp button").classList.add("red");
            document.querySelector(".comp button img").scr="./images/icon-rock.svg";},500);
            document.querySelector(".play-div .bot").classList.remove("yellow","blue");
            document.querySelector(".play-div .bot").classList.add("red");
            document.querySelector(".play-div .bot img").scr="./images/icon-rock.svg";
            break;

        case "yellow":setTimeout(function(){
            document.querySelector(".comp button").classList.remove("empty","red","blue");
            document.querySelector(".comp button").classList.add("yellow");
            document.querySelector(".comp button img").scr="./images/icon-scissors.svg";},500);
            document.querySelector(".play-div .bot").classList.remove("red","blue");
            document.querySelector(".play-div .bot").classList.add("yellow");
            document.querySelector(".play-div .bot img").scr="./images/icon-scissors.svg";
            break;
        case "blue":setTimeout(function(){
            document.querySelector(".comp button").classList.remove("empty","yellow","red");
            document.querySelector(".comp button").classList.add("blue");
            document.querySelector(".comp button img").scr="./images/icon-paper.svg";},500);
            document.querySelector(".play-div .bot").classList.remove("yellow","red");
            document.querySelector(".play-div .bot").classList.add("blue");
            document.querySelector(".play-div .bot img").scr="./images/icon-paper.svg";
            break;
    }
    return computerColour;
}

let winDeclare = false;

function compareColours(player,bot){
    setTimeout(function(){
        document.querySelector("#second").classList.add("visible");
        document.querySelector("#final").classList.remove("visible");
    },1000);
    if(player==="red"&&bot==="yellow"||player==="yellow"&&bot==="blue"||player==="blue"&&bot==="red"){
        document.querySelector(".declare h1").innerTEXT="YOU WIN";
        score++;
        document.querySelector(".play-div button.player").classList.add("win");
        document.querySelector(".play-div button.bot").classList.remove("win");
    } 
    else if(player==="yellow"&&bot==="red"||player==="blue"&&bot==="yellow"||player==="red"&&bot==="blue"){
        document.querySelector(".declare h1").innerTEXT="YOU LOSE";
        score = 0;
        document.querySelector(".play-div button.bot").classList.add("win");
        document.querySelector(".play-div button.player").classList.remove("win");
    } 
    else if(player===bot){
        document.querySelector(".declare h1").innerTEXT="DRAW!";
        document.querySelector(".play-div button.bot").classList.remove("win");
        document.querySelector(".play-div button.player").classList.remove("win");
    } 
}

document.querySelector(".declare button").addEventListener("click",function(){
    document.querySelector("#final").classList.add("visible");
    document.querySelector(".final").classList.remove("visible");
    document.querySelector(".score h1").innerTEXT=score;
});

var container = false;

document.querySelector(".rule-box").addEventListener("click",function(){
    if(!container){
        document.querySelector(".area").classList.add("blur");
        document.querySelector(".rule-container").classList.remove("visible");
        container=true;
        document.querySelector(".cross").addEventListener("click",function(){
            document.querySelector(".area").classList.remove("blur");
            document.querySelector(".rule-container").classList.add("vision");
            container=false;
        });
    }
});
