/*Gison Batista 05/5/2018
javaScript File for custommerComment.html*/
//reset style function
function resetAll(){

          document.form01.FristName.style.backgroundColor = "";
          document.form01.text.style.backgroundColor = "";
          document.form01.passwordComfirm.style.backgroundColor = "";
          document.form01.password.style.backgroundColor = "";
          }

//onclick buttonfuction
function runContactBox(){
    //alert for staff member to contact

    //variable contactStaff
    var contactStaff;
        //definition of the variable
    contactStaff = document.getElementById("contactStaffForm");
    contactStaff.innerHTML ="<form name='formInner' id='formCSS'"
                       +" action='http://itins3.madisoncollege.edu/echo.php'"
                       +" method='post'>"
                       +" <label>Cell Phone number:</label>"
                       +" <input type='text'"
                       +" name='TelephoneNumber'"
                       +" placeholder='Telephone Number'"
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
                       +" <label>Submit button:</label>"
                       +" <input type='submit' value='submit form'"
                       +" />"
                       +" </br></br>"
                       +" <label>Clear Button:</label>"
                       +" <input type='reset' value='clear DO NOT SEND'"
                       +" />"
                       +" </form>";
}

//fucntion form validation
function validatForm01(){

    //clean backgournd colors
    document.form01.FristName.style.backgroundColor = "";
    document.form01.text.style.backgroundColor = "";
    document.form01.passwordComfirm.style.backgroundColor = "";
    document.form01.password.style.backgroundColor = "";
  	   // create variables
  var fristName;
  //requred fild for first name refEX
  var enterName;
  var regEx = /^\d{4}/;

  //html input for firt name
 fristName = document.form01.FristName;

    if(fristName.value.length<=3){
        //alert for frist name
       alert("Frist name must content at least 4 characteres!");
       document.form01.FristName.select();
       document.form01.FristName.style.backgroundColor = "yellow";

       return false;
    }

    //html input for first name
  enterName = document.form01.FristName.value;

    //statement reiquering the 4 firt 4 first letters
    if(regEx.test(enterName)){
        //alert for the 4 characters of frist name
        alert("The frist 4 characters must be letters of the alphabet!");
        document.form01.FristName.select();
        document.form01.FristName.style.backgroundColor = "yellow";

    return false;
    }

            //password confirmation
   if((document.form01.password.value
        !==document.form01.passwordComfirm.value)
       ||(document.form01.password.value.length<=4)){
		//alert fom passowor and password confirmation
		alert("password must have same value and needs to have 5 characthers!");
		document.form01.password.style.backgroundColor = "yellow";
		document.form01.passwordComfirm.style.backgroundColor = "yellow";
		document.form01.password.select();
		document.form01.password.focus();

    return false;
    }

    //comnte text area 10 characters minimun
    if(document.form01.text.value.length<=9){
        //alert tex area for minum characters
        alert(" text area requires 10 characters minimun!");
        document.form01.text.focus();
        document.form01.text.style.backgroundColor = "yellow";

    return false;
    }


	// Data is good, go to server

return true;
}


