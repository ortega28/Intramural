# frozen_string_literal: true

class AddTypeToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :sport_type, :string
  end
end
