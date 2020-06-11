# frozen_string_literal: true

class PlayersController < ApplicationController
  before_action :set_player, only: %i[show update destroy]

  # GET /players
  def index
    @team = Team.find(params[:team_id])
    @players = @team.players

    render json: @players, include: :team, status: :ok
  end

  # GET /players/1
  def show
    render json: @player
  end

  # POST /players
  def create
    @player = Player.new(player_params)

    if @player.save
      render json: @player, status: :created
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /players/1
  def update
    if @player.update(player_params)
      render json: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # DELETE /players/1
  def destroy
    @player.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_player
    @player = Player.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def player_params
    params.require(:player).permit(:name, :user_id, :height, :sex, :jersey)
  end
end
