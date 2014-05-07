class GalleriesController < ApplicationController
  def index
    @albums = picasa_client.album.list.albums
    @albums.delete(@albums.first)
  end
end
