//= require ./photosets_controller
//= require ../mixins/paginates

Gallery.PhotosController = SC.ArrayProxy.create(Gallery.Paginates, {
  contentBinding: "Gallery.PhotosetsController.selected.photos",
  per_page: 35
});
