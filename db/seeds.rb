# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Team.destroy_all

Player.destroy_all

User.destroy_all

@user = User.create!(username: 'Alex', email: 'alex@gmail.com', password: '123456')

@victoria = Player.create!(user: @user, name: 'Victoria', height: 66, sex: 'Female', jersey: 4)
@alex = Player.create!(user: @user, name: 'Alex', height: 73, sex: 'Male', jersey: 28)
@raf = Player.create!(user: @user, name: 'Raf', height: 71, sex: 'Male', jersey: 9)
@andrew = Player.create!(user: @user, name: 'Andrew', height: 72, sex: 'Male', jersey: 2)

@elizabeth = Player.create!(user: @user, name: 'Elizabeth', height: 66, sex: 'Female', jersey: 13)
@dan = Player.create!(user: @user, name: 'Dan', height: 73, sex: 'Male', jersey: 14)
@trish = Player.create!(user: @user, name: 'Trish', height: 71, sex: 'Male', jersey: 15)
@chris = Player.create!(user: @user, name: 'Chris', height: 72, sex: 'Male', jersey: 16)

Team.create!(name: 'Team 1', user: @user, players: [@victoria, @alex, @raf, @andrew])

Team.create!(name: 'Team 2', user: @user, players: [@elizabeth, @dan, @trish, @chris])
