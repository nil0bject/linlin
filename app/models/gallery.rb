class Gallery < ActiveRecord::Base
  has_many :albums
  attr_accessible :description, :title
end
