class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :country
      t.integer :price
      t.string :image_url
      
      t.timestamps
    end
  end
end
