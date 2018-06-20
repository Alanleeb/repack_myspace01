class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_profiles, Array

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids 
    Profile.where("id IN (?)", ids)
  end 

end

