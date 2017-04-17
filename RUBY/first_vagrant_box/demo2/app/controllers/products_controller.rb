class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    # render :text => "Came to Create method"
    @product = Product.create( name: params[:name], description: params[:description])
    puts "#"*50, @product.inspect, "#"*50
    redirect_to '/products/index'
  end

end
