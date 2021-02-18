class User < ApplicationRecord
    has_many :reviews
    has_many :locations, through: :reviews


    has_secure_password
    validates :email, uniqueness: true
end
