//= require ../mixins/paginates

Gallery.PhotosetsController = SC.ArrayProxy.create(Gallery.Paginates, {
  content: [],
  selected: null,
  per_page: 12,

  select: function(photoset) {
    photoset.fetchPhotos();
    this.set("selected", photoset);
  }
});
