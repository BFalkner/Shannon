//= require ./photosets_controller

Gallery.PhotosController = SC.ArrayProxy.create({
  contentBinding: "Gallery.PhotosetsController.selected.photos",
  page: 0,
  per_page: 36,
  current_page: [],

  next_page: function() {
    if (this.get("page") == this.get("_last_page_index")) return;
    this.set("page", this.get("page") + 1);
  },

  previous_page: function() {
    if (this.get("page") == 0) return;
    this.set("page", this.get("page") - 1)
  },

  _load_current_page: function() {
    var begin = this.get("page") * this.get("per_page");
    var end = begin + this.get("per_page");
    this.set("current_page", this.slice(begin, end));
  }.observes("page", "@each"),

  _last_page_index: function() {
    return Math.ceil(this.get("length") / this.get("per_page")) - 1;
  }.property(),

  _reset_page: function() {
    this.set("page", 0);
  }.observes("content")
});
