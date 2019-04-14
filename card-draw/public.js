// Public card draw, intended to allow users to upload their own songs + packs.

// You can even store binary data from an AJAX request.
req = new XMLHttpRequest();
req.open('GET', 'tournaments/rip11/banners', true);
req.responseType = 'arraybuffer';

req.addEventListener('readystatechange', function() {
    if (req.readyState === 4) { // readyState DONE
        localforage.setItem('photo', req.response).then(function(image) {
            // This will be a valid blob URI for an <img> tag.
            var blob = new Blob([image]);
            var imageURI = window.URL.createObjectURL(blob);
        }).catch(function(err) {
          // This code runs if there were any errors
          console.log(err);
        });
    }
});