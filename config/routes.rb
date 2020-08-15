Rails.application.routes.draw do
  resources :cocktails, only: [:index, :new, :show, :create, :destroy] do
    resources :doses, only: [:new, :create]
  end

  resources :doses, only: [:destroy]
end
