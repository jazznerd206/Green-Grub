//Function that captures the user input
$("#search-recipe").on("click", function(event) {

    //Prevents the form from submitting by itself
        event.preventDefault();
    
        // This line grabs the input from the textbox
        var recipeInput = $("#recipe-input").val().trim();
    
        
    
    });

//Function that displays the recipe using ajax call
function getRecipe() {


    var recipeName = $(this).attr("data-name");
    
    //Concatenation of the search url with the search term and api key
     var queryURL = "https://edamam-recipe-search.p.rapidapi.com/search" +
     recipeName + "&api_key=00b3b4c0a6mshdbf29fcf967ac95p1c0a77jsnb8bfba4efc2f";
    
     $.ajax({
         url: queryURL,
         method: "GET"
       }).then(function(response) {
           results = response.data;
           //For loop for result item
           for (var i = 0; i < results.length; i++) {
    

               // Creating a div for the recipe
               var recipeDiv = $("<div>");
    
               // Storing the recipe
               var recipe = $("<p class='recipe'>").text("Here is your recipe: " + results[i].recipe);
              
               
    
               // Creating an image tag
               var recipeImage = $("<img>");
    
             
               
    


               recipeDiv.append(carImage);
              
    

               $("#recipes-appear-here").prepend(recipeDiv);
            };
        });
        
    }


    const axios = require("axios");

    axios({
        "method":"GET",
        "url":"https://edamam-recipe-search.p.rapidapi.com/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"edamam-recipe-search.p.rapidapi.com",
        "x-rapidapi-key":"00b3b4c0a6mshdbf29fcf967ac95p1c0a77jsnb8bfba4efc2f"
        },"params":{
        "q": recipeInput
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
            console.log(error)
          })