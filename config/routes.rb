Rails.application.routes.draw do
  get '/todolist' => 'todolist#index'
  post '/todolist' => 'todolist#create'
  # get 'todolist/update'
  delete '/todolist' => 'todolist#delete'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
