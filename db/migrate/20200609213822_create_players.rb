class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :height
      t.string :sex
      t.integer :jersey

      t.timestamps
    end
  end
end
