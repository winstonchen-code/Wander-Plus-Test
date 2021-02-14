# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Location.create(name: "Hawaii", image_url: "https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg")
Location.create(name: "Hawaii", image_url: "https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg")


User.create ()

Review.create(title: 'great place', description: 'I had a lovely time.', score: 5, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'great place', description: 'I had a lovely time.', score: 1, location_id: Location.all.sample.id, user_id: User.all.sample.id)

