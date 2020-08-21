class Cocktail < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  has_one_attached :photo
  validates :photo, presence: true, dimension: { min: 440..500 }, size: { less_than: 2.megabytes, message: 'max size is 2 mb' }
end
