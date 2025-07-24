const players = [24,76,98,12,56];
const selected = players.filter(p => p > 40);
console.log(selected);


const friends = ['tom', 'jeary','nila', 'borat','Abid'];
const oddfriend = friends.filter(friends => friends.length > 4);
const oddfriends = friends.find(friends => friends.length > 3);
console.log(oddfriend)
console.log(oddfriends)



