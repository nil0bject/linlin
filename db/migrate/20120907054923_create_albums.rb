class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.text :description
      t.references :gallery

      t.timestamps
    end
    add_index :albums, :gallery_id
  end
end
