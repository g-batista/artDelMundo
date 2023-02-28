/*Gison Batista 05/5/2018
javaScript File for friendsInfo.html*/
//reset style function
function  runQuestionBox(){
    //varible fom quetions form

    var sendQuestion;
    //varable definition

    sendQuestion = document.getElementById("submitQuestion");
    sendQuestion.innerHTML = "<form name='formeQuestion' id='formQuestionCSS'"
                             +" action='http://itins3.madisoncollege.edu/echo.php'"
                             +" method='post'>"
                             +" <label>First Name:</label>"
                             +" <input type='text'"
                             +" name='firstName'"
                             +" placeholder='First Name'"
                             +" maxlength='15'"
                             +" />"
                             +" </br></br>"
                             +" <label>Last Name:</label>"
                             +" <input type='text'"
                             +" name='Last Name'"
                             +" placeholder='Last Name'"
                             +" maxlength='15'"
                             +" />"
                             +" </br></br>"
                             +" <label>Email:</label>"
                             +" <input type='email'"
                             +" name='email'"
                             +" maxlength='40'"
                             +" placeholder='email address'"
                             +" />"
                             +" </br></br>"
                             +" </br></br>"
                             +" <label>Live Your Question Here:</label>"
                             +" <textarea"
                             +" id='textArea'"
                             +" type='text'"
                             +" name='text'"
                             +" placeholder='live your comment here'"
                             +" >"
                             +"</textarea>"
							 +" </br></br>"
							 +" <label>Submit button:</label>"
							 +" <input type='submit' value='submit form'"
							 +" />"
							 +" </br></br>"
							 +" <label>Clear Button:</label>"
							 +" <input type='reset' value='clear DO NOT SEND'"
							 +" />"
                             +" </form>";
}



















