let selections = [];
let icons=[];

gBoard();
function loadIcons(){
    icons =[
        '<i class="fas fa-umbrella"></i>',
        '<i class="fas fa-bolt"></i>',
        '<i class="fas fa-cloud-meatball"></i>',
        '<i class="far fa-snowflake"></i>',
        '<i class="far fa-sun"></i>',
        '<i class="fas fa-poo-storm"></i>',
        '<i class="fas fa-cloud-rain"></i>',
        '<i class="fas fa-moon"></i>',
        '<i class="fas fa-cloud-moon-rain"></i>',
        

    ]

}

function gBoard(){
    loadIcons();
    selections = [];
    let board = document.getElementById('board');
    let cards = [];
    
    for (let i = 0; i < 18; i++){
        cards.push(`
        <div class="board__tiles--static" onclick="selectTile(${i})">
        <div class="board--tile" id="card${i}">
            <div class="board__tile--back tile" id="back${i}">
             ${icons[0]}

            </div>
            <div class="board__tile--front tile">
                <i class="fas fa-hat-wizard"></i>

            </div>

        </div>
    </div>
        `

        )
        if(i%2==1){
            icons.splice(0,1);
        }
    }
    cards.sort(()=>Math.random()-0.5);
    board.innerHTML = cards.join(' ');
}

function selectTile(i){
    let card = document.getElementById("card" + i);
    if(card.style.transform != "rotateY(180deg"){
        card.style.transform = "rotateY(180deg)"
        selections.push(i)
    }
    if(selections.length == 2){
        des(selections)
        selections=[]
    }

}

function des(selections){
    setTimeout(()=> {
        
        let b1= document.getElementById("back" + selections[0]);
        let b2= document.getElementById("back" + selections[1]);

        if(b1.innerHTML != b2.innerHTML){
            let t1 = document.getElementById("card" + selections[0]);
            let t2 = document.getElementById("card" + selections[1]);
            t1.style.transform = "rotateY(0deg)";
            t2.style.transform = "rotateY(0deg)";
        }else{
            b1.style.background = "#FAF1E6";
            b2.style.background = "#FAF1E6";

        }
    }, 1000);

}