module ApplicationHelper

  def picasa_client
    @picasa_client ||= Picasa::Client.new(user_id: "olivelinlin@gmail.com")
  end
  
end
