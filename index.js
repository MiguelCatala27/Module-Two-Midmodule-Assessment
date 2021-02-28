const diceImg = {
    1: '&#9856',
    2: '&#9857',
    3: '&#9858',
    4: '&#9859',
    5: '&#9860',
    6: '&#9861'
}
let inputHistory = 0
let oldRolls = []

function rollDice(){
    let invalid = document.getElementById('invalid')
    let diceTotal = document.getElementById('dice-para')
    let sum = document.getElementById('sum-para')
    let ul = document.querySelector('#roll-history')
    let input = Number(document.getElementById('input').value)

    if(input > 0){
        invalid.textContent = ""
        diceTotal.innerHTML = ""
        let sumDice = 0

        for(let i = 0; i < input; i++){
            let diceRolled = Math.floor((Math.random()*6)+ 1)
            diceTotal.innerHTML += diceImg[diceRolled]
            sumDice += diceRolled
        }
        inputHistory++
        sum.innerText = "Sum = " + sumDice
        oldRolls[inputHistory] = diceTotal.innerHTML + " = " + sumDice

        if(inputHistory > 1){
            let newList = document.createElement("li")
            newList.textContent = oldRolls[inputHistory -1]
            ul.appendChild(newList)
        }
    }

    else{
        invalid.textContent = "Please enter a number greater than 0"
        diceTotal.innerHTML = ""
    }
}