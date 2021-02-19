Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/locations', to: 'locations#index' 
  get '/reviews', to: 'reviews#index'
  get '/locations/:id', to: 'locations#show'
  post '/reviews', to: 'reviews#create'

  # post "/login", to: "auth#log_in"
  # post '/login', to: 'auth#login'
  # post '/auto_login', to: 'auth#auto_login'
  # get '/logged_in', to: 'application#logged_in?'

end
