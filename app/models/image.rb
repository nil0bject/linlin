class Image < ActiveRecord::Base
  belongs_to :album
  attr_accessible :description, :title
end
