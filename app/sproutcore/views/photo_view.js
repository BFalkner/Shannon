Gallery.PhotoView = SC.View.extend({
  classNameBindings: ["isLast:last"],
  
  isLast: function() {
    return (this.get("templateContext").contentIndex + 1) % 7 == 0;
  }.property("templateContext")
});
