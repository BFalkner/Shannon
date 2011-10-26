FlickRaw.api_key = YAML.load_file("#{Rails.root}/config/flickr.yml")['flickr']['key']
FlickRaw.shared_secret = YAML.load_file("#{Rails.root}/config/flickr.yml")['flickr']['secret']
