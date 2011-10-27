//= require sproutcore-2.0.beta.3
//= require_self
//= require_tree "./models"
//= require_tree "./controllers"
//= require_tree "./views"

var Gallery = SC.Application.create({
  ready: function(){
    this._super();
    this.fetchPhotosets();
  },

  fetchPhotosets: function(){
    Gallery.Photoset.fetch(function(photosets) {
      Gallery.PhotosetsController.beginPropertyChanges();
      Gallery.PhotosetsController.pushObjects(photosets);
      Gallery.PhotosetsController.endPropertyChanges();
    });
  }
});
