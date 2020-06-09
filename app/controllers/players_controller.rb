# frozen_string_literal: true

class PlayersController < ApplicationController
  before_action :set_player, only: %i[show update destroy]

  # GET /players
  def index
    @players = Player.all

    render json: @players
  end
end
