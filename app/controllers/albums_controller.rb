class AlbumsController < ApplicationController
  def show
    @photos = picasa_client.album.show(params[:id]).photos
  end
end
