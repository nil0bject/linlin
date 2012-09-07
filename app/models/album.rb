class Album < ActiveRecord::Base
  belongs_to :gallery
  attr_accessible :description, :title
end
