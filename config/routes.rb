Rails.application.routes.draw do
  root to: 'cocktails#index'
  resources :cocktails, only: [:index, :new, :show, :create, :destroy] do
    resources :doses, only: [:new, :create]
  end
  get 'cocktails/:id/doses', to: 'cocktails#show'
  resources :doses, only: [:destroy]
end
