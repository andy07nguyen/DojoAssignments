class StudentsController < ApplicationController
  def index
    @dojo = Dojo.find_by(id: params[:id])
    @userDojo = Student.where(dojo_id:params[:id]).all
    @user = Student.find_by(id:params[:id])
    # puts "#"*50, "#{@userDojo.inspect}", "#"*50
    # puts "#"*50, "#{@user.inspect}", "#"*50
  end

  def new
    @dojos = Dojo.all
    @dojo = Dojo.find_by(id: params[:id])
    # puts "#"*50, "#{@dojo.inspect}", "#"*50
  end

  def create
    @student = Student.new(student_params)

    if @student.save
      redirect_to "/dojos/#{@student.dojo_id}/students", notice: "You have successfully created a Student!"
    else
      flash[:errors] = @student.errors.full_messages
      redirect_to :back
    end
  end

  def show
    @user = Student.find_by(id:params[:id])
    @dojo = Dojo.find_by(id:@user.dojo_id)
    @students = Student.where(dojo_id: @user.dojo_id, created_at: @user.created_at).all
    # puts "#"*50, "#{@user.inspect}", "#"*50
    # puts "#"*50, "#{@dojo.inspect}", "#"*50
    # puts "#"*50, "#{@students.inspect}", "#"*50
  end

  def edit
    @user = Student.find_by(id:params[:id])
    @dojo = Dojo.find_by(id:@user.dojo_id)
    @dojos = Dojo.all
    # puts "#"*50, "#{@user.inspect}", "#"*50
  end

  def update
    @user = Student.find(params[:id])
    @dojo = Dojo.find_by(id:@user.dojo_id)
    puts "#"*50, "#{@user.inspect}", "#"*50

    if @user.update(student_params)
      redirect_to "/dojos/#{@dojo.id}/students/#{@user.id}", notice: "You have successfully updated a Student!"
    else
      flash[:errors] = @dojo.errors.full_messages
      redirect_to :back
    end
  end

  private
    def student_params
      params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
    end

end
