class PhotosetsController < ApplicationController
  UID = {:user_id => YAML.load_file("#{Rails.root}/config/flickr.yml")['flickr']['user_id']}

  caches_page :index, :show, :expires_in => 1.hour
  
  def index
    respond_to do |format|
      format.json do
        render :json => (flickr.photosets.getList(UID).map do |photoset|
          Hash[photoset].keep_if {|key, value| ["id", "title", "description"].include? key }
          .merge("thumbnailUrl" => load_thumbnail(photoset))
        end)
      end
    end
  end

  def show
    respond_to do |format|
      format.json do
        render :json => {
            :id => params[:id],
            :photos => (flickr.photosets.getPhotos(:photoset_id => params[:id], :extras => "url_sq,url_o")["photo"]
                          .map do |photo|
              {:url => photo["url_o"], :thumbnail_url => photo["url_sq"]}
            end)}
      end
    end
  end

  private
  def load_thumbnail photoset
    "http://farm#{photoset["farm"]}.static.flickr.com/#{photoset["server"]}/#{photoset["primary"]}_#{photoset["secret"]}_s.jpg"
  end
end
