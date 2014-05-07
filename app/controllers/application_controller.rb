class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def picasa_client
    @picasa_client ||= Picasa::Client.new(user_id: "olivelinlin@gmail.com")
  end
end
