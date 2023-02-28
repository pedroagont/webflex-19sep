# hashes
# associative array, a way to store key value pairs

user = {
    "username" => "johns",
    "password" => "1234",
    "logged_in" => false
}
puts user
puts user['username']

# symbols
user = {
    :username => "johns",
    :password => "1234",
    :logged_in => false
}
puts user[':username']


user = {
    username: 'bob',
    password: '1234',
    logged_in: true
}

my_key = 'username'
puts user[my_key]

user[my_key.to_sym]

puts user