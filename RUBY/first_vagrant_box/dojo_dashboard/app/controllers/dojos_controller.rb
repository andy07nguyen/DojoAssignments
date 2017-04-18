class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
  end

  def new
    @dojo = Dojo.new
    # fail
  end

  def create
    @dojo = Dojo.new(dojo_params)

    if @dojo.save
      redirect_to '/dojos', notice: "You have successfully created a Dojo!"
    else
      flash[:errors] = @dojo.errors.full_messages
      redirect_to :back
    end
  end

  def show
    @branch = Dojo.find_by(id: params[:id])
    # puts "#{params[:id]}"
  end

  def edit
    @branch = Dojo.find_by(id: params[:id])
  end

  def update
    @dojo = Dojo.find(params[:id])
    # puts "#"*50, "#{@dojo.inspect}", "#"*50
    # fail
    if @dojo.update(dojo_params)
      redirect_to '/dojos', notice: "You have successfully updated a Dojo!"
    else
      flash[:errors] = @dojo.errors.full_messages
      redirect_to :back
    end
  end

  def destroy
    Dojo.find(params[:id]).destroy
    redirect_to '/dojos'
  end

  private
    def dojo_params
      params.require(:dojo).permit(:branch, :street, :city, :state)
    end



end
