puts 'hi from 02!'

num = -2

if (num > 0)
    puts 'positive value'
else
    puts 'negative value'
end


first = 'Pedro'
last = 'Gonzalez'

if (first == 'Pedro' && last == 'Gonzalez')
    puts 'Great name!'
elsif (first == 'John' && last == 'Doe')
    puts 'Also great name!'
else 
    puts 'Name could be better!'
end

# unless (inverts the condition)
unless (first == 'Pedro')
    puts 'Choose a better name!'
else
    puts 'you choose well'
end

# reverse if!
hour = 7
puts 'good evening' if hour > 5

sunny = true
puts 'wear a rain jacket' unless sunny

# switch case
username = 'pikachu'

case username 
    when 'chewie'
        puts 'hello there'
        exit
    when 'kenobi'
        puts 'this is not the place you are looking for'
        exit
    else
        puts 'this is a default message!'
end

# ternary operator -> condition ? true : false
my_num = 88
puts my_num > 10 ? 'greater than 10' : 'lower than 10' 