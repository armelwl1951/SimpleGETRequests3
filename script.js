'use strict';

function getDogImage( inputBreed )  {
  const url = `https://dog.ceo/api/breed/${inputBreed}/images/random`;

  fetch( url )
    .then( response => {
      if ( response.ok ) { 
        return response.json()
      }
      throw new Error( 'This breed was not found. Please try checking your spelling and try again.' );
    })
    .then( responseJson => {
      $( '.error' ).empty();
      displayResults( responseJson );
    })
    .catch( error => {
      $( '.error' ).text( `Something went wrong: ${error.message}` );
      $( '.results-img' ).empty();
    })
}

function displayResults( responseJson ) {
  console.log( responseJson );
  $( '#results-list' ).empty();
  $( '.results-img' ).html(`<img src="${responseJson.message}" class="results-img">`);
  $( '.results' ).removeClass( 'hidden' );
}

function watchForm() {
  $( 'form' ).submit( event => {
    event.preventDefault();
    let inputBreed = $( '#name' ).val();
    getDogImage( inputBreed );
  });
}

$(function() {
  console.log( 'App loaded! Waiting for submit!' );
  watchForm();
});
