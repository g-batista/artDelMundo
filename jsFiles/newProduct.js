/*Gilson Batista 04/29/2018
JavaScript file for newProduct.html*/

//resect all function
function resetAll(){
        document.form01.ArtistIdNumber.style.backgroundColor = "";
        document.form01.ArtistPassword.style.backgroundColor = "";
        document.form01.ProductPrice.style.backgroundColor = "";
        document.form01.ProductWeigth.style.backgroundColor = "";
        document.form01.OrganicPorcentage.style.backgroundColor = "";
        document.form01.ProductDescription.style.backgroundColor = "";

}

//Validate form information
function validatForm01() {


	    document.form01.ArtistIdNumber.style.backgroundColor = "";
        document.form01.ArtistPassword.style.backgroundColor = "";
        document.form01.ProductPrice.style.backgroundColor = "";
        document.form01.ProductWeigth.style.backgroundColor = "";
        document.form01.OrganicPorcentage.style.backgroundColor = "";
        document.form01.ProductDescription.style.backgroundColor = "";

        // create variables

    var artistIdNumber;
    var notNumber;
    var ProductPriceisNaN;
    var organicPorcent;

        // Get INPUT HTML element
    artistIdNumber = document.form01.ArtistIdNumber;

        //Artist Id Number
    if (artistIdNumber.value.length<=7){
        alert("Artist Id must have 8 digits!");
        document.form01.ArtistIdNumber.select();
	    document.form01.ArtistIdNumber.focus();
	    document.form01.ArtistIdNumber.style.backgroundColor = "gray";

	    //document.form01.ArtistIdNumber.style.backgroundColor = "gray";
        return false;
    }
    //Html Input for IsNaN
    notNumber = document.form01.ArtistIdNumber.value;

    //is not a number ID alert!
    if (isNaN(notNumber)){
   //NOt a number erro!
        alert("Artist ID must be only numbers!");
        document.form01.ArtistIdNumber.select();
        document.form01.ArtistIdNumber.style.backgroundColor = "gray";

        return false;
    }
    //Password comfimation at -least 5 characters

    if(document.form01.ArtistPassword.value.length<=4){
        alert("Artist Password Must Have at Leat 5 Characters");
        document.form01.ArtistPassword.select();
        document.form01.ArtistPassword.focus();
	    document.form01.ArtistPassword.style.backgroundColor = "gray";

        return false;
    }
    //HTML input for price not a number

    ProductPriceisNaN = document.form01.ProductPrice.value;

    //Product Price isNaN false alert
    if (isNaN(ProductPriceisNaN)){
        //not a number Alert!
        alert("Price Must be a number , Which can include a decimal point!");
        document.form01.ProductPrice.select();
        document.form01.ProductPrice.focus();
        document.form01.ProductPrice.style.backgroundColor = "gray";

        return false;
    }
    // Html input for greater or igual to zero
     ProductPriceisNaN = document.form01.ProductPrice.value;

    //price number greater or igual to zero
    if (ProductPriceisNaN<=-1){
        //alert for number smaller than 0
        alert("Product Price must be a number igual or greater tham zero!")
        document.form01.ProductPrice.select();
        document.form01.ProductPrice.focus();
        document.form01.ProductPrice.style.backgroundColor = "gray";

        return false;
    }
    //product weigth isNaN
    if (isNaN(document.form01.ProductWeigth.value)){
        //erro alert for wegth
        alert("The weigth value must be a number!");
        document.form01.ProductWeigth.select();
        document.form01.ProductWeigth.focus();
        document.form01.ProductWeigth.style.backgroundColor = "gray";
        return false;
    }
    //product weigth great than zero
    if(document.form01.ProductWeigth.value<=0){
    //alert! for nureric quantity
    alert("Weigth must be grather than zero!");
    return false;
    }

    //HtML input isNaN organic percentage
    organicPorcent = document.form01.OrganicPorcentage.value;

    //is not a number organic percentage
    if (isNaN(organicPorcent)){
     //not a number alert
            alert("Organic porcentage must be a numeric value, and can includ a decimal point!");
            document.form01.OrganicPorcentage.select();
            document.form01.OrganicPorcentage.focus();
	        document.form01.OrganicPorcentage.style.backgroundColor = "gray";

            return false;

    }

    /*organic porcentage needs to be greater
    or equal to zero and less or igual to 100*/
    if (organicPorcent<=-1||organicPorcent>=101){
        /*alert for the organic porcentage needs to be greater or
        equal to zero and less or egual to 100*/
        alert("Organic porcentage must be greater or egual to zero and less or equal to 100");
        document.form01.OrganicPorcentage.select();
        document.form01.OrganicPorcentage.focus();
	    document.form01.OrganicPorcentage.style.backgroundColor = "gray";

        return false;

    }

    //selec product
    if (document.form01.ProductCategory.value==="00"){
        //alert for product selction
        alert("Please select a product!");
        document.form01.ProductCategory.focus();
	    document.form01.ProductCategory.style.backgroundColor = "gray";

        return false;
    }

    //product description
    if (document.form01.ProductDescription.value.length<=9){
        //alert for short description
        alert("product description needs a mininum of 10 characters");
        document.form01.ProductDescription.focus();
	    document.form01.ProductDescription.style.backgroundColor = "gray";

        return false;
    }

 	// Data is good, go to server
return true;
}