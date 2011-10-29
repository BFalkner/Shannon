
Gallery.PhotosetsController = SC.ArrayProxy.create({
  content: [],
  selected: null,
  page: 0,
  per_page: 12,
  current_page: [],

  next_page: function() {
    if (this.get("has_no_next_page")) return;
    this.set("page", this.get("page") + 1);
  },

  previous_page: function() {
    if (this.get("has_no_previous_page")) return;
    this.set("page", this.get("page") - 1)
  },

  has_no_next_page: function() {
    return this.get("page") == this.get("_last_page_index");
  }.property("page", "_last_page_index"),

  has_no_previous_page: function() {
    return this.get("page") == 0;
  }.property("page"),

  _load_current_page: function() {
    var begin = this.get("page") * this.get("per_page");
    var end = begin + this.get("per_page");
    this.set("current_page", this.slice(begin, end));
  }.observes("page", "@each"),

  _last_page_index: function() {
    return Math.max(0, Math.ceil(this.get("length") / this.get("per_page")) - 1);
  }.property("@each"),

  select: function(photoset) {
    photoset.fetchPhotos();
    this.set("selected", photoset);
  }
});
