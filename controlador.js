let board = new Board();
board.addBoxes();
let player1 = new Player('el pillo');
let player2 = new Player('el deniz');
let dado = new Dado();

document.getElementById("boton1").addEventListener("click", ( )=>{
    movPlayer(player1, board.boxes);
});

document.getElementById("boton2").addEventListener("click", ( )=>{
    movPlayer(player2, board.boxes);
});

let movPlayer = (player, boxes) => {
    let valorDado = dado.lanzar();
    player.walk(valorDado, boxes);
    console.log(player.getPosition());

    if (player==player1) {
        document.getElementById("movimientos").innerHTML+= `Dado: ${valorDado} <br> Jugador 1: ${player1.name} está en ${player.getPosition()} <br>`;
        document.getElementById("movimientos").innerHTML+= `------------------------------------ <br>`;
        if(player.getPosition()>=100){
        document.getElementById("movimientos").innerHTML+= `YA GANASTE CAMPEÓN`;
        }
    }
    else{
        document.getElementById("movimientos").innerHTML+= `Dado: ${valorDado} <br> Jugador 2: ${player2.name} está en ${player.getPosition()} <br>`;
        document.getElementById("movimientos").innerHTML+= `------------------------------------ <br>`;
        if(player.getPosition()>=100){
        document.getElementById("movimientos").innerHTML+= `YA GANASTE CAMPEÓN!`;
        }
    }
}