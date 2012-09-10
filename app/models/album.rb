class Album < ActiveRecord::Base
  belongs_to :gallery
  has_many :images
  attr_accessible :description, :title, :gallery
end
