# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Location.destroy_all
User.destroy_all
Review.destroy_all

Location.create(city: "Hawaii", country: "United States", image_url: "https://www.gannett-cdn.com/presto/2020/08/19/USAT/b3c017d4-716c-4aee-afda-91f330062315-VPC_HAWAII_EXTENDS_QUARANTINE_wide_getty.jpg?crop=1080%2C1080%2Cx415%2Cy0&quality=10")
Location.create(city: "Paris", country: "France", image_url: "https://www.libertytravel.com/sites/default/files/styles/full_size/public/france-h.jpg?itok=7ffg3Nv8")
Location.create(city: "Santorini", country: "Greece", image_url: "https://cdn.architecturendesign.net/wp-content/uploads/2015/10/AD-Stunning-Photos-Of-Santorini-Greece-09.jpg")
Location.create(city: "New York City", country: "United States", image_url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fplaces%2Fnew-york-ny_416x416.jpg")
Location.create(city: "Venice", country: "Italy", image_url: "https://img.travelawaits.com/filter:centercrop/quill/2/b/2/5/3/6/2b253633748caabab2c9933173a66d6000756625.jpg?w=800&h=800")
Location.create(city: "Rome", country: "Italy", image_url: "https://img.travelawaits.com/filter:centercrop/quill/f/c/6/a/a/8/fc6aa8b0336b99d781294590d034f9202dfd37dd.jpg?w=800&h=800")
Location.create(city: "Hong Kong", country: "China", image_url: "https://static01.nyt.com/images/2020/06/03/world/03hongkong-damages-1/03hongkong-damages-1-mobileMasterAt3x.jpg")
Location.create(city: "Bangkok", country: "Thailand", image_url: "https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Bangkok_Thailand_HERO_GettyImages_HERO_1920x1280.jpg")
Location.create(city: "London", country: "England", image_url: "https://www.syracuse.edu/wp-content/uploads/london-large-image-1100x733.jpg")
Location.create(city: "Tokyo", country: "Japan", image_url: "https://i.insider.com/5d26280921a86107bb51bd92?width=1067&format=jpeg")
Location.create(city: "Austin", country: "United States", image_url: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_640,q_75,w_640,x_5990,y_1546/v1/clients/austin/Austin_Skyline_Panoramic_from_East_credit_JOSEPH_HAUBERT_expires_10_1_2020_4853d9d6-de3d-4968-aff5-4d9f6119b7c1.jpg")
Location.create(city: "Washington DC", country: "United States", image_url: "https://img.travelawaits.com/filter:centercrop/quill/2/3/a/a/2/4/23aa249905a77c40bbb4ea4dad5f9d0a0d6f35d2.jpg?w=800&h=800")
Location.create(city: "Cairo", country: "Egypt", image_url: "https://www.travelive.com/public/img/travel2egypt/great-sphinx-and-pyramids-of-giza-in-cairo.jpg")


User.create(email: 'lala@gmail.com', password: '123')
User.create(email: 'jon@gmail.com', password: '123')

Review.create(title: 'Best city to visit!', description: "There were so many places to visit, non-stop fun! Be prepared for an amazing vacation!", score: 5, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'Top 5 city', description: 'Weather was great during our time here and the fun never stopped.', score: 4, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'Bad weather', description: 'The weather ruined our trip. It was raining 4/5 days that we were here.', score: 1, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'Too hot!', description: 'Make sure to pack a lot of tanks and shorts.', score: 3, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'Amazing food!', description: 'The food here was out of this world!', score: 5, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: '', description: 'I had a lovely time.', score: 1, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'Boring city!', description: "Not much to do, we just found a few decent food options", score: 2, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'What an adventure!', description: 'Our tour guide was amazing! We visited so many beautiful museums and tried a lot of amazing cuisine.', score: 5, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'Bring some good walking shoes!', description: 'If you plan on checking out all the cool spots around the city, be prepared to walk 10-20 miles a day.', score: 4, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'Just ok', description: "Weather was okay during our spring break trip. Had a nice trip around the city, but there wasn't a lot going on.", score: 3, location_id: Location.all.sample.id, user_id: User.all.sample.id)
Review.create(title: 'Just ok', description: "Weather was okay during our spring break trip. Had a nice trip around the city, but there wasn't a lot going on.", score: 3, location_id: Location.first.id, user_id: User.all.sample.id)
Review.create(title: 'Just ok', description: "Weather was okay during our spring break trip. Had a nice trip around the city, but there wasn't a lot going on.", score: 3, location_id: Location.first.id, user_id: User.all.sample.id)

