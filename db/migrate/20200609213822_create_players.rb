# frozen_string_literal: true

class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :height
      t.string :sex
      t.integer :jersey

      t.references :user, null: false, foreign_key: true
      t.references :team, null: false, foreign_key: true
      t.timestamps
    end
  end
end
