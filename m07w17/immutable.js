const user = {
  name: 'Carolyn',
  favColor: 'blue',
};

// bad
// const otherUser = user

// good
// const otherUser = { ...user };
// otherUser.name = 'Chelsea';

// better
const otherUser = { ...user, name: 'Chelsea' };

console.log('user', user);
console.log('otherUser', otherUser);

// Same thing with arrays
const userArr = ['Carolyn', 'blue'];

// bad
// const otherUserArr = userArr;

// good
const otherUserArr = [...userArr];

otherUserArr[0] = 'Chelsea';

console.log('user', userArr);
console.log('otherUser', otherUserArr);
