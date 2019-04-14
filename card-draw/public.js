// Public card draw, intended to allow users to upload their own songs + packs.

// Works as follows:
// ---
// `fetch`es an image.
// Throws it into localForage.

// Todo:
// uploading & initially storing files:
  // upload a file
  // upload a directory
  // store its contents into localforage
// write a loadSongs() that grabs stuff from localstorage and loads it into
  // some object in memory

// define the upload format for the user.
// probably: json file as the one we currently have, directory full of banners

// Useful reading: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

var debug = true;
var test_image = ("tournaments/rip11/banners/acidburst-bn.png");
  
$(document).ready(() => {

  var myImage = document.getElementById('image');

  // https://stackoverflow.com/a/44069294/1234621
  // looks like it's a promise that returns a blob?
  // then it does what it wants with it.
  fetch(test_image).then(function(response) {
    // return it (resolving the promise?) so that the .then callbacks run.
    return response.blob();
  }).then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;

    // store it
    localforage.setItem('img1', myBlob).then(function (value) {
      // Do other things once the value has been saved.
    }).catch(function(err) {
      console.log(err);
    });

  });

});