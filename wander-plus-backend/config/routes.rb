Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/locations', to: 'locations#index' 
  get '/reviews', to: 'reviews#index'
  get '/locations/:id', to: 'locations#show'
  post '/reviews', to: 'reviews#create'
end
