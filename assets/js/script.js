// variables defined
    var formEl = document.querySelector("#form-box");
    var submitBtnEl = document.querySelector("#submit");
    var foodImageEl = document.querySelector("#food-image");
    var quoteTypeEl = document.querySelector("#quote-type");
    var selectFoodEl = document.querySelector("#select-food");
    var authorSpace = document.querySelector("#quote-author");
    var quoteSpace = document.querySelector("#quote");
    var foodTypeInput 
    var quoteTypeInput

// materialize says we must initialize the select element for the dropdown list. 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

   // capture user food choice
    var getFoodType = function() {
       foodTypeInput = event.target.value.trim();
        };

    // display random food image
    var displayImage = function(data) {
        var randomImage = data.image;
        console.log(randomImage);
        foodImageEl.setAttribute("src", randomImage)
    }
    

    var getFoodImage = function(event) {
        console.log("click");
        event.preventDefault();
        // console.log(foodTypeInput)
        // var apiLink = "https://foodish-api.herokuapp.com/images/api" + foodTypeInput + "/";
        var apiLink = "https://foodish-api.herokuapp.com/api/images/burger/"
        fetch(apiLink).then(function(response) {

            if(response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    displayImage(data);
                })
            } else {
                alert('Error: ' + response.statusText);
              }
        })
            .catch(function (error) {
              alert('Unable to connect to foodish database');
              console.log(error);
            })    
    };

    
          var userVal= function(){
                var userEl = document.getElementById(selectFoodEl).value;
                return userEl;
              });
          console.log(userEl)
            }; userVal();

            var tagLink =function () {
              apiLinkimage.searchParams.append(userEl);
            }
            
    selectFoodEl.addEventListener("submit", getFoodImage)


//display fetched quote and quote author 
var displayQuote = function(data) {
    var randomQuote = data.content;
    console.log(randomQuote); 
    quoteSpace.textContent =  '"' + randomQuote + '"';
  };
var displayAuthor = function(data) {
    var quoteAuthor = data.author;
    console.log(quoteAuthor);
    authorSpace.textContent = quoteAuthor;
  };

//   fetch quote from API
var getQuote = function() {
    console.log(quoteTypeInput);
    var quoteApiUrl = "https://api.quotable.io/random?tags=" + quoteTypeInput;
      fetch(quoteApiUrl).then(function(response) {
          if(response.ok) {
              response.json().then(function(data) {
                  displayQuote(data);
                  displayAuthor(data)
              })
          }
      })
    };
    

var getData = function(event) {
    event.preventDefault();
    getFoodImage(getFoodType);
    getQuote(getQuoteType);
}

// event listeners
quoteTypeEl.addEventListener("change", getQuoteType)
selectFoodEl.addEventListener("change", getFoodType);
formEl.addEventListener("submit", getData);