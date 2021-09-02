let icons


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
    let board = document.getElementById('board');
    let tiles = [];

    for (let i = 0; i < 18; i++){
        tiles.push(`
        <div class="board__tiles--static">
        <div class="board--tile" id="tile${i}">
            <div class="board__tile--back tile">
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
    tiles.sort(()=>Math.random()-0.5);
    board.innerHTML = tiles.join('');
}