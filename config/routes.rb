Rails.application.routes.draw do
  get "/", to: 'persons#index'
end
