class TimesController < ApplicationController
  def main
    # render text: Time.new
    @time = Time.new
  end
end
