# frozen_string_literal: true

class DropPlayersTeamsTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :players_teams do |t|
      t.bigint 'team_id', null: false
      t.bigint 'player_id', null: false
    end
  end
end
