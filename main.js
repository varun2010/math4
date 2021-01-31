player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
function send(){
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_word="<h4 id='word_display'>"+number1+" X "+number2+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}

question="player1";
answer="player2";

function check(){
    get_ans=document.getElementById("input_check_box").value;
    if(get_ans==actual_answer){
        if(answer=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question=="player1"){
        question="player2";
        answer="player1";
        document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
    }
    else{
        question="player1";
        answer="player2";
        document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name; 
    }
    document.getElementById("output").innerHTML="";
}