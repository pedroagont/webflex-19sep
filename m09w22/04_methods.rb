puts 'hi!'
# implicit returns
# cannot pass methods as callbacks
# math operatos = methods (2+2 ===> add(2,2))

def say_hello name
    puts "hello #{name}"
end

say_hello 'Pedro'
say_hello('Bob')

# say_hello('Foo', 'Bar', 'Baz')


def full_name(first, last)
    "#{first} #{last}"
end

full_name_var = full_name('Bob', 'Vance')
puts full_name_var

def change_it val
    val = 5
end

num = 10
puts num

change_it(num)
puts num