Gallery.PhotosetView = SC.View.extend({
  templateName: 'photoset',
  photoset: null,

  init: function() {
    this._super();
    Shadowbox.init({
      skipSetup: true
    });
  }
});
