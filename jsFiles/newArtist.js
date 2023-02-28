/*Gilson Batista 04/29/2018
JavaScript file for newArtist.html*/

//Clean form information

function resetAll(){
         document.form01.FristName.style.backgroundColor = "";
	     document.form01.ArtistLastName.style.backgroundColor = "";
	     document.form01.Password.style.backgroundColor = "";
	     document.form01.PasswordConfirm.style.backgroundColor = "";
	     document.form01.gender.style.backgroundColor = "";

}
//Validate form information
function validatForm01() {

//clean backgroundcollor
         document.form01.FristName.style.backgroundColor = "";
	     document.form01.ArtistLastName.style.backgroundColor = "";
	     document.form01.Password.style.backgroundColor = "";
	     document.form01.PasswordConfirm.style.backgroundColor = "";
	     document.form01.coutry.style.backgroundColor = "";
	     document.form01.gender.style.backgroundColor = "";

	     //  variables firstName 
	var firstName;
	//variable last name 
	var ArtistLastName;
	
	//variable regular expression
	var enterLastName;
	var enterName;
	var regEx = /^\d{2}/;

    // Get INPUT HTML element firstName
	firstName = document.form01.FristName;

	// First name at least 2 characters riqurement
	if (firstName.value.length <= 1) {
	    alert("First name must be greater than 1 character!");
	    document.form01.FristName.select();
	    document.form01.FristName.focus();
	    document.form01.FristName.style.backgroundColor = "gray";

	    return false;
	}
	
	//regEX input for first name 
	enterName = document.form01.FristName.value;  
	
//the first 2 characteres must be letrers

	
	if(regEx.test(enterName)) {
		//alert for must have minimum of 2 characthers iqual to letters
	    alert("the first 2 characteres must be letrers! of the aphabet!");
	    document.form01.FristName.style.backgroundColor = "gray";
		document.form01.FristName.select();
	    document.form01.FristName.focus();

	    return false;
	}

	//Get input HTML first name
	ArtistLastName = document.form01.ArtistLastName;
	// Last name at least 2 characters
	if (ArtistLastName.value.length<= 1) {
	    alert("Last name must be greater than 1 character!");
	    document.form01.ArtistLastName.select();
	    document.form01.ArtistLastName.focus();
	    document.form01.ArtistLastName.style.backgroundColor = "gray";

	    return false;

	}
 
	//the first 2 characteres must be letrers

	enterLastName = document.form01.ArtistLastName.value;
	
	if(regEx.test(enterLastName)) {
		//alert for last name requirimnet 
	    alert("the first 2 characteres must be letrers!");
	    document.form01.ArtistLastName.select();
	    document.form01.ArtistLastName.focus();
	    document.form01.ArtistLastName.style.backgroundColor = "gray";

	    return false;
	}
	//select an area a coutry
	if(document.form01.coutry.value==="99"){
	    alert("please select an area a coutry");
	    document.form01.coutry.focus();
	    document.form01.coutry.style.backgroundColor = "gray";

	    return false;
	    }

	    //selec a gender
	    if(document.form01.gender.value==="00"){
	       alert("Please selec a gender");
	       document.form01.gender.focus();
	       document.form01.gender.style.backgroundColor = "gray";

	       return false;
	    }
			//passWord

	    if(document.form01.Password.value.length<= 4
	        !==document.form01.PasswordConfirm.value.legnth<= 4){
	        alert("Password is too short.");
	        document.form01.Password.select();
	        document.form01.Password.focus();
	        document.form01.Password.style.backgroundColor = "gray";
	        document.form01.PasswordConfirm.style.backgroundColor = "gray";
	        return false;

	    }


	    //PassWordConfirmation
	    if(document.form01.Password.value
	       !==document.form01.PasswordConfirm.value){
	     alert("password must be egual!");
	     document.form01.PasswordConfirm.select();
	     document.form01.PasswordConfirm.select();
	     document.form01.PasswordConfirm.style.backgroundColor = "gray";
	     document.form01.Password.style.backgroundColor = "gray";


	    return false;

	    }

	// Data is good, go to server
	return true;

}
