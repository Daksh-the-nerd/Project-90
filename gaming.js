function addUser()
{
    var player_2_username = document.getElementById("player2_name_input").value;
    var player_1_username = document.getElementById("player1_name_input").value;

    localStorage.setItem("1st_username",player_1_username);
    localStorage.setItem("2nd_username",player_2_username);



    window.location = "game_page.html"
}
var player1_score = 0 
var player2_score = 0
function send()
{
    var number_1 = document.getElementById("word1").value;
    var number_2 = document.getElementById("word2").value;
    var actual_answer = parseInt(number_1) * parseInt(number_2);

    var question = "<h4>" + number_1 + "x" + number_2 + "</h4>";
    var text_box = "<br> Answer : <input type='text' id= 'input_check_box'>";
    var check_button = "<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
    var row = question + text_box + check_button ; 
    document.getElementById("output").innerHTML = row
    
    var number_1 = document.getElementById("word1").innerHTML = "";
    var number_2 = document.getElementById("word2").innerHTML = "";

}


