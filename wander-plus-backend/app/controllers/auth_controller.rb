class AuthController < ApplicationController

  # skip_before_action :authorized, only: [:create, :auto_login]

  # def log_in
  #   # byebug
  #   user=User.find_by(email: params[:user][:email])

  #   if user && user.authenticate(params[:user][:password])
  #     render json: {user: user, token: JWT.encode({user_id: user.id}, "whatEverSecretCode")}
  #     else
  #       render json: {error: "Invalid information"}
  #   end 
  # end


#   skip_before_action :authorized, only: [:login, :auto_login]
 
#  def login
#   @user = User.find_by(email: params[:user][:email])
 

#   if @user && @user.authenticate(params[:user][:password])
  
#     @token = encode_token({ user_id: @user.id })
#     render json: { user: @user, jwt: @token }, status: :accepted
#   else
#       render json: { error: 'Invalid email or password' }
#     end
#   end

#   def auto_login
#     @token = params[:token]
#     # byebug
#     user = User.find(JWT.decode(@token, "SecretCode", true, algorithm: 'HS256')[0]["user_id"])
#     render json: user
#   end

#   private

#   def login_params
#     params.require(:user).permit(:email, :password)
#   end
end



