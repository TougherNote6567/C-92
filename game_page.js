player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");


document.getElementById("p1_name").innerHTML=player1_name + " : ";
document.getElementById("p2_name").innerHTML=player2_name + " : ";

p1_score = 0;
p2_score = 0;

document.getElementById("score1").innerHTML = p1_score;
document.getElementById("score2").innerHTML = p2_score;

document.getElementById("qturn").innerHTML = "Question Turn - " + player1_name;
document.getElementById("aturn").innerHTML = "Answer Turn - " +   player2_name;

function send(){
    fetchWord = document.getElementById("word").value;
    changeWord = fetchWord.toLowerCase();
    console.log(changeWord); 

    charAt1 = changeWord.charAt(1);
    console.log(charAt1);

    wordLengthHalf = Math.floor(changeWord.length/2);
    charAt2 = changeWord.charAt(wordLengthHalf);
    console.log(charAt2);

    wordLastLetter = changeWord.length - 1;
    charAt3 = changeWord.charAt(wordLastLetter);
    console.log(charAt3);

    removeCharAt1 = changeWord.replace(charAt1, "_");
    console.log(removeCharAt1);

    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    console.log(removeCharAt2);

    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log(removeCharAt3);

    question = "<h4 id='questionDisplay'>Q." + removeCharAt3 + "</h4>";
    answer = "<br><input type='text' id='answerBox'>";
    answerCheck = "<br><br><button class='btn btn-info' onclick='checkAnswer()'>Check Answer</button>";
    gameHeart = question + answer + answerCheck;
    document.getElementById("output").innerHTML = gameHeart;
    document.getElementById("word").value = "";
}
QTurn = "player1";
ATurn = "player2";
function checkAnswer(){
getAnswer = document.getElementById("answerBox").value;
answer = getAnswer.toLowerCase();

if(changeWord == answer){

    if(ATurn == "player1"){
        p1_score = p1_score + 1;
        document.getElementById("score1").innerHTML = p1_score;
    }
    else{
        p2_score = p2_score + 1;
        document.getElementById("score2").innerHTML = p2_score;
    }
}

else if(changeWord != answer){

    if(ATurn == "player1"){
        p2_score = p2_score + 1;
        document.getElementById("score2").innerHTML = p2_score;
    }
    else{
        p1_score = p1_score + 1;
        document.getElementById("score1").innerHTML = p1_score;
    }
}

if(QTurn == "player1"){
QTurn = "player2";
document.getElementById("qturn").innerHTML = "Question Turn - " + player2_name;
}
else{
    QTurn = "player1";
    document.getElementById("qturn").innerHTML = "Question Turn - " + player1_name;
}

if(ATurn == "player1"){
ATurn = "player2";
document.getElementById("aturn").innerHTML = "Answer Turn - " + player2_name;
}
else{
    ATurn= "player1";
    document.getElementById("aturn").innerHTML = "Answer Turn - " + player1_name;
}
document.getElementById("output").innerHTML = "";
}