# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

apartments = [
{
   street: "Drexel Drive",
    city: "Lemon Grove",
    state: "CA",
    manager: "Bob Ross",
    email: "BobRoss@Happpylittletrees.com",
    price: "$2750/month",
    bedrooms: 2,
    bathrooms: 1,
    pets: "No",
    image: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/5/E/%7B35EB44B1-885E-4C0F-BA58-1A75903338DE%7D4d990986cff0489aaf84d9b928e50b00.jpg",
    user_id: 1


}
]
apartments.each do |each_apartment|
    user.apartments.create each_apartment
  puts "creating apartment #{each_apartment}"
end