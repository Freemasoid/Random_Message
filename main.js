//Show who is making action success throw
const char = ['Bard', 'Barbarian', 'Mage', 'Rogue'];
let rChar = Math.floor(Math.random()* char.length);
console.log(`Action success throw for ${char[rChar]}`);

//Show dice roll value
let dice20 = Math.floor(Math.random()*20);
console.log(`The Dice has spoken: ${dice20}`);

//Random message output based on dice roll value and character that made roll

if (char[rChar] === 'Mage'){
    if (dice20 <= 10) {
        console.log('Casted fireball explodes right in front of you incenerating your eyebrows and magnificent beard');
    }
    else if (dice20 > 10 && dice20 <= 19) {
        console.log(`Your lightning zap has accedentally revived giant rat killed by goblins.\n
        It's family is was very very greatful and now fighting by your side till the end of battle.`)
    }
    else if (dice20 === 20) {
        console.log(`Your firestorm has insenerated enemy creatures below your level and dealt scaled damage to higher leveled enemies.`)
    }
} else if (char[rChar] === 'Rogue'){
    if (dice20 <= 10){ 
        console.log(`You have successfully stolen Barbarian's underwear. Wait, he had any?`)
    } else if (dice20 > 10 && dice20 <= 19) {
        console.log(`Enemy never saw you comming allowing you to deal additional x1.5 damage with your Shadowstep ability.`)
    } else if (dice20 === 20){
        console.log(`Your illusion copies sucsessfully distracted an enemy allowing your teammates to make an additional turn`)
    }
} else if (char[rChar] === 'Barbarian'){
    if (dice20 <=10){
        console.log(`Your Vortex scratched no emeny. Except Bard. Meat is back on menu boys!`)
    } else if (dice20 > 10 && dice20 <= 19){
        console.log(`Your Earthquake strike has squashed a nasty gobling.\n
        Make an additional throw to determine earthquake wave strength.`)
    } else if (dice20 === 20){
        console.log(`Your Primodial nourishment terrifies the enemy. Roll the dice to determine debuff scale.`)
    }
} else if (char[rChar] === 'Bard'){
    if (dice20 <=10){
        console.log(`Trying to convice ogre that size is not everything was not a good idea. Or was it?`)
    } else if (dice20 > 10 && dice20 <= 19){
        console.log(`Your warsong has boosted party's moral increasing environmental resistance by 15%`)
    } else if (dice20 === 20){
        console.log('You have successfully seduced the dragon. However, nobody said it was female.')
    }
}