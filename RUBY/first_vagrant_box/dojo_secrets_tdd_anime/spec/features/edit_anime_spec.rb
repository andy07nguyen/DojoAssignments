require 'rails_helper'

RSpec.describe 'editing anime' do
  it 'displays a form with values ready prepopulated' do
    anime = Anime.create(name:"Naruto")
    visit "/animes/#{anime.id}/edit"

    expect(find_field('name').value).to eq(anime.name)
  end
end
