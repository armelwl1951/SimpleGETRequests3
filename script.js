'use strict';


function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => validateResponse(response))
    //.then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(errorMessage);
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`
  )
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error();
  }
  return response.json();
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $(".results").empty();
  let breed = $("#userInput").val();
    getDogImage(breed);
  });
}

function errorMessage(message){
  $('.results').append(`<p>Breed not found!<br>
  Make sure your input is lowercase and check your spelling</p>`);
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

