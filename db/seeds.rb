200.times do
    user_name = Faker::Superhero.name
    age = Faker::Number.number(2)
    quote = Faker::DumbAndDumber.quote
    avatar = Faker::Avatar.image(user_name, '50x50', 'png', 'set2')
    Profile.create(user_name: user_name, age: age, quote: quote, avatar: avatar)
   end
