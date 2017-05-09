class UsersController < ApplicationController
  def new
  end

  def login
    # puts "#"*30+" -UsersController- "+"#"*30
    @user = User.find_by(username: params[:username])
    puts "#"*20, @user.inspect, "#"*20
    if @user
      session[:user_id] = @user.id
      redirect_to messages_path
    else
      flash[:errors] = ["Could not find username"]
      redirect_to :back
    end
  end

  def logout
    reset_session
    redirect_to users_new_path
  end
end
