Gallery.PhotosetSelectView = SC.View.extend({
  templateName: 'photoset-select',

  click: function() {
    Gallery.PhotosetsController.set('selected', this.get("content"));
  },

  thumbnailUrl: function() {
    return this.get("content").thumbnailUrl;
  }.property("content")
});
