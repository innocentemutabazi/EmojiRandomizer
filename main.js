const emoji =['😊','😂','🤣','❤️','😍','😒','👌','😘','💕','😁','👍','🙌','🤞','✌️','🤷‍♂️','🤷‍♀️','🤦‍♂️','🤦‍♀️','😉','😢','💖','😜','😅','😆','😉','😊','😋','🤗','🤩','🤔','🫥','😶','😑','😐','🤨','🫡']
const changeface = document.querySelector('#face');
const randomizerButton = document.querySelector('button')
randomizerButton.addEventListener('click',()=>{
    let round= Math.floor(Math.random()*36);
    let result = emoji[round];
    changeface.innerHTML = result;
});
console.log(emoji.length);