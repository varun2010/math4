var player1,player2;
function login(){
    player1=document.getElementById("player-1").value;
    player2=document.getElementById("player-2").value;
    if(player1==""){
        if(player2==""){
            document.getElementById("player-2").placeholder="please enter your name";
            document.getElementById("player-1").placeholder="please enter your name";
        }
        else{
            localStorage.setItem("player1",player1);
            localStorage.setItem("player2",player2);
            window.location="game_page.html";
        };
    }
    else{
    localStorage.setItem("player1",player1);
    localStorage.setItem("player2",player2);
    window.location="game_page.html";
    };
}