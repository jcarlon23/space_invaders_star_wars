Rails.application.routes.draw do
  # GET /about
  get "about", to: "about#index"

  get "/", to: "main#index"

  root to: "game#main"
  get "game", to: "main#game"

end
