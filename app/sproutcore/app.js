//= require sproutcore-2.0.beta.3
//= require_self
//= require_tree "./models"
//= require_tree "./controllers"
//= require_tree "./views"

var App = SC.Application.create({
  ready: function(){
    this._super();
    this.fetchPhotosets();
  },

  fetchPhotosets: function(){
    $.ajax('/photosets.json', {
      success: function(data){
        App.photosetsController.beginPropertyChanges();
        data.forEach(function(set){
          App.photosetsController.pushObject(App.Photoset.create({
            id: set.id,
            title: set.title,
            description: set.description,
            thumbnailUrl: set.thumbnailUrl
          }));
        });
        App.photosetsController.endPropertyChanges();
      },
      error: function(response, status, error){
        console.error(status, error, response.responseText);
      }
    });
  }
});
