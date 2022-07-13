Rails.application.routes.draw do
  devise_for :accounts
  get '/', to: 'hello#index'
  get 'hello', to: 'hello#index'
  get 'hello/index'
  get 'hello/login_check'
  get 'hello/study_page'


  get 'hello/japanese'
  get 'hello/japanese_elem'
  get 'hello/japanese_elem_1'
  get 'hello/japanese_elem_2'
  get 'hello/japanese_elem_3'
  get 'hello/japanese_elem_4'
  get 'hello/japanese_elem_5'
  get 'hello/japanese_elem_6'

  get 'hello/japanese_j_high'
  get 'hello/japanese_j_high_modern'
  get 'hello/japanese_j_high_old'
  get 'hello/japanese_j_high_grammar'

  get 'hello/japanese_high'
  get 'hello/japanese_high_modern'
  get 'hello/japanese_high_old'


  get 'hello/math'
  get 'hello/math_elem'
  get 'hello/math_elem_1'
  get 'hello/math_elem_2'
  get 'hello/math_elem_3'
  get 'hello/math_elem_4'
  get 'hello/math_elem_5'
  get 'hello/math_elem_6'

  get 'hello/math_j_high'
  get 'hello/math_j_high_1'
  get 'hello/math_j_high_2'
  get 'hello/math_j_high_3'

  get 'hello/math_high'
  get 'hello/math_high_1A2B'
  get 'hello/math_high_3C'


  get 'hello/social_studies'
  get 'hello/social_studies_elem'
  get 'hello/social_studies_elem_3'
  get 'hello/social_studies_elem_4'
  get 'hello/social_studies_elem_5'
  get 'hello/social_studies_elem_6'

  get 'hello/social_studies_j_high'
  get 'hello/social_studies_j_high_1'
  get 'hello/social_studies_j_high_2'
  get 'hello/social_studies_j_high_3'

  get 'hello/social_studies_high'
  get 'hello/social_studies_high_worldhistory'
  get 'hello/social_studies_high_japanesehistory'
  get 'hello/social_studies_high_geography'
  get 'hello/social_studies_high_ethics'
  get 'hello/social_studies_high_poleco'


  get 'hello/science'
  get 'hello/science_elem'
  get 'hello/science_elem_3'
  get 'hello/science_elem_4'
  get 'hello/science_elem_5'
  get 'hello/science_elem_6'

  get 'hello/science_j_high'
  get 'hello/science_j_high_1'
  get 'hello/science_j_high_2'
  get 'hello/science_j_high_3'

  get 'hello/science_high'
  get 'hello/science_high_physics'
  get 'hello/science_high_chemistry'
  get 'hello/science_high_biology'
  get 'hello/science_high_geology'

  
  get 'hello/english'
  get 'hello/english_elem'
  get 'hello/english_elem_3_6'
  get 'hello/english_elem_voca'

  get 'hello/english_j_high'
  get 'hello/english_j_high_1'
  get 'hello/english_j_high_2'
  get 'hello/english_j_high_3'

  get 'hello/english_high'
  get 'hello/english_high_listening'
  get 'hello/english_high_reading'
  get 'hello/english_high_speaking'
  get 'hello/english_high_writing'
  get 'hello/english_high_grammar'
  get 'hello/english_high_voca'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
