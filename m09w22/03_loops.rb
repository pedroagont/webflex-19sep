# loop do break
i = 0
loop do
    i += 1
    puts i

    break if i > 5
end

# while
i = 0
while i < 5 do
    i += 1
    puts i
end

# until
i = 0
until i > 5 do
    i += 1
    puts i
end

# looping through  lists
names = ['John', 'Shafaq', 'Sheri']

# for loop
for name in names do
    puts "Hello #{name}!"
end

# each do
names.each do |name|
    puts "Hello #{name}!"
end

list = [1, 2, 3, 4, 5, 6]
# select
new_list = list.select do |num|
    num >= 3
end

puts new_list

# ranges
(5..10).each do |num|
    puts num
end

# times
10.times { puts 'hi!' }