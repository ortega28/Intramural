# frozen_string_literal: true

Rails.application.routes.draw do
  resources :teams do
    resources :players
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
