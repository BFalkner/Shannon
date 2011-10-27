Gallery.Photoset = SC.Object.extend({
  id: null,
  title: null,
  description: null,
  thumbnailUrl: null
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
