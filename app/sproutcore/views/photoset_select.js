App.PhotosetSelect = SC.View.extend({
  click: function() {
    App.photosetController.set('content', this.get("content"));
  }
});
