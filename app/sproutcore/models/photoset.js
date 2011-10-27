Gallery.Photoset = SC.Object.extend({
  id: null,
  title: null,
  description: null,
  thumbnailUrl: null,

  photos: [],

  _photos_loaded: false,
  fetchPhotos: function() {
    if (this.get("_photos_loaded")) return;
    var self = this;
    $.ajax('/photosets/' + this.get("id") + '.json', {
      success: function(data){
        var photos = data.photos.map(function(photo){
          return Gallery.Photo.create({
            url: photo.url,
            thumbnailUrl: photo.thumbnailUrl
          });
        });
        self.set("photos", photos);
        self.set("_photos_loaded", true);
      },
      error: function(response, status, error){
        console.error(status, error, response.responseText);
      }
    });
  }
});

Gallery.Photoset.fetch = function(callback) {
  $.ajax('/photosets.json', {
    success: function(data){
      var photosets = data.map(function(photoset){
        return Gallery.Photoset.create({
          id: photoset.id,
          title: photoset.title,
          description: photoset.description,
          thumbnailUrl: photoset.thumbnailUrl
        });
      });
      callback(photosets);
    },
    error: function(response, status, error){
      console.error(status, error, response.responseText);
    }
  });
};
