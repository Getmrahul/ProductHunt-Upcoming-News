Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"

  get '/api/ph/comments', to: "comments#index", :via => [:options]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/*path' => 'react#index'
end
