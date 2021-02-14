
function myFunction() {
    // get the thank you message
    var thank = document.getElementById("thank");

    // variable for number of cakes
    var quant = document.getElementById("quantity");

    // get the the value from the text area
    var textarea = document.getElementById("text");
    var userInput = textarea.value;

    // variable to store the key word from the text area
    var key = "vegan";

    // variable to see which topping checked
    var topping = document.querySelector('input[name="dot"]:checked');

    // check to see if vegan is in text area
    if(userInput.match(key) != null){

    // the user input vegan
    alert("Warning! Cheesecakes contain dairy!");
        $(document).ready(function(){
        // reload the original prompts
        $("h2").hide();
        $("p").show();
        $("table").show();
        $("textarea").show();
        $("button").show();
        });
    }
    else{
    // print variables in the h4 under the thank you message
    document.getElementById("inst").innerHTML ="\n" + quant.value + " " + topping.value + " cheesecakes with special instructions: " + userInput;
    }
}