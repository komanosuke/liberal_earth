Rails.application.routes.draw do
  devise_for :accounts
  get '/', to: 'hello#index'
  get 'hello', to: 'hello#index'
  get 'hello/index'
  get 'hello/login_check'
  get 'hello/study_page'
  get 'hello/japanese'
  get 'hello/math'
  get 'hello/social_studies'
  get 'hello/science'
  get 'hello/english'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
