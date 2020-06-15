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
@team1 = Team.create!(name: 'Raiders', user: @user, sport_type: 'basketball')
@team2 = Team.create!(name: 'Warriors', user: @user, sport_type: 'soccer')
@team3 = Team.create!(name: 'Tigers', user: @user, sport_type: 'basketball')
@team4 = Team.create!(name: 'Terriers', user: @user, sport_type: 'soccer')

@victoria = Player.create!(user: @user, team: @team1, name: 'Victoria', height: 66, sex: 'Female', jersey: 4)
@alex = Player.create!(user: @user, team: @team1, name: 'Alex', height: 73, sex: 'Male', jersey: 28)
@raf = Player.create!(user: @user, team: @team1, name: 'Raf', height: 71, sex: 'Male', jersey: 9)
@andrew = Player.create!(user: @user, team: @team1, name: 'Andrew', height: 72, sex: 'Male', jersey: 2)
@sarah = Player.create!(user: @user, team: @team1, name: 'Sarah', height: 66, sex: 'Female', jersey: 5)
@brett = Player.create!(user: @user, team: @team1, name: 'Brett', height: 73, sex: 'Male', jersey: 29)
@anthony = Player.create!(user: @user, team: @team1, name: 'Anthony', height: 71, sex: 'Male', jersey: 10)
@kyle = Player.create!(user: @user, team: @team1, name: 'Kyle', height: 72, sex: 'Male', jersey: 2)

@elizabeth = Player.create!(user: @user, team: @team2, name: 'Elizabeth', height: 66, sex: 'Female', jersey: 13)
@dan = Player.create!(user: @user, team: @team2, name: 'Dan', height: 73, sex: 'Male', jersey: 14)
@trish = Player.create!(user: @user, team: @team2, name: 'Trish', height: 71, sex: 'Male', jersey: 15)
@chris = Player.create!(user: @user, team: @team2, name: 'Chris', height: 72, sex: 'Male', jersey: 16)
@kelsey = Player.create!(user: @user, team: @team2, name: 'Kelsey', height: 66, sex: 'Female', jersey: 17)
@fred = Player.create!(user: @user, team: @team2, name: 'Fred', height: 73, sex: 'Male', jersey: 18)
@lily = Player.create!(user: @user, team: @team2, name: 'Lily', height: 71, sex: 'Male', jersey: 19)
@alec = Player.create!(user: @user, team: @team2, name: 'Alec', height: 72, sex: 'Male', jersey: 20)

@jess = Player.create!(user: @user, team: @team3, name: 'Jess', height: 66, sex: 'Female', jersey: 4)
@chris = Player.create!(user: @user, team: @team3, name: 'Chris', height: 73, sex: 'Male', jersey: 28)
@nick = Player.create!(user: @user, team: @team3, name: 'Nick', height: 71, sex: 'Male', jersey: 9)
@drew = Player.create!(user: @user, team: @team3, name: 'Drew', height: 72, sex: 'Male', jersey: 2)
@sarah = Player.create!(user: @user, team: @team3, name: 'Sarah', height: 66, sex: 'Female', jersey: 5)
@tony = Player.create!(user: @user, team: @team3, name: 'Tony', height: 73, sex: 'Male', jersey: 29)
@lyle = Player.create!(user: @user, team: @team3, name: 'Lyle', height: 71, sex: 'Male', jersey: 10)
@dave = Player.create!(user: @user, team: @team3, name: 'Dave', height: 72, sex: 'Male', jersey: 2)

@rebecca = Player.create!(user: @user, team: @team4, name: 'Rebecca', height: 66, sex: 'Female', jersey: 4)
@liam = Player.create!(user: @user, team: @team4, name: 'Liam', height: 73, sex: 'Male', jersey: 28)
@noah = Player.create!(user: @user, team: @team4, name: 'Noah', height: 71, sex: 'Male', jersey: 9)
@will = Player.create!(user: @user, team: @team4, name: 'Will', height: 72, sex: 'Male', jersey: 2)
@grace = Player.create!(user: @user, team: @team4, name: 'Grace', height: 66, sex: 'Female', jersey: 5)
@james = Player.create!(user: @user, team: @team4, name: 'James', height: 73, sex: 'Male', jersey: 29)
@oliver = Player.create!(user: @user, team: @team4, name: 'Oliver', height: 71, sex: 'Male', jersey: 10)
@ben = Player.create!(user: @user, team: @team4, name: 'Ben', height: 72, sex: 'Male', jersey: 2)

# Team.create!(name: 'Team 1', user: @user, players: [@victoria, @alex, @raf, @andrew])

# Team.create!(name: 'Team 2', user: @user, players: [@elizabeth, @dan, @trish, @chris])
