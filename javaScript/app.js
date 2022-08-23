const playerArray = [];

function displayPlayer(player) {


    // check
    // const numberArea = document.getElementById('total-player-number');
    // const numberString = numberArea.innerText
    // const number = parseInt(numberString);

    // // console.log(number);
    // if (number > 5) {
    //     alert("You can't add more player");
    //     return;
    // }
    // playerNumberCheck();




    const playerNamesArea = document.getElementById('players-name');
    playerNamesArea.innerHTML = '';

    for (let i = 0; i < player.length; i++) {
        const playerName = player[i].playerNameFromWebsite;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${playerName}</td>
        `;

        playerNamesArea.appendChild(tr);

        // const numberArea = document.getElementById('total-player-number');
        // const numberString = numberArea.innerText
        // const number = parseInt(numberString);

        // // console.log(number);
        // if (number > 5) {
        //     alert("You can't add more player");
        //     break;
        // }

    }

    // return;

}


function addToSelectArea(event) {


    //              // check
    const numberArea = document.getElementById('total-player-number');
    const numberString = numberArea.innerText
    const number = parseInt(numberString);

    // console.log(number);
    if (number >= 5) {
        alert("You can't add more player");
        return;
    }
    // playerNumberCheck();



    // document.getElementById('select-btn').disabled = true;

    const playerNameFromWebsite = event.parentNode.parentNode.children[0].innerText;

    const playerNameObject = {
        playerNameFromWebsite: playerNameFromWebsite
    }

    playerArray.push(playerNameObject);

    const totalPlayerAdded = document.getElementById('total-player-number');
    totalPlayerAdded.innerText = playerArray.length;

    // const number = totalPlayerAdded
    // console.log(number);

    // if (number > '5') {
    //     alert("You can't add more players.");
    //     return;
    // }

    displayPlayer(playerArray);
}













function getValueByUsingId() {

}
function getInnerTextByUsingId() {

}
function setInnerTextByUsingId() {

}


                            // Player Expenses
document.getElementById('calculatePlayerAmount').addEventListener('click', function () {
    // console.log('btn clicked');
    const playerNumberField = document.getElementById('total-player-number');
    const playerNumberString = playerNumberField.innerText;
    const playerNumber = parseInt(playerNumberString);

    // console.log(playerNumber);

    const perPlayerAmountField = document.getElementById('per-Player-Amount');
    const perPlayerAmountString = perPlayerAmountField.value;
    const perPlayerAmount = parseInt(perPlayerAmountString);

    // console.log(perPlayerAmount);

    const playerTotalAmount = playerNumber * perPlayerAmount;

    const playerTotalField = document.getElementById('playerTotal');
    playerTotalField.innerText = playerTotalAmount;

})



                                    // Total Amount
document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const playerExpensesField = document.getElementById('playerTotal');
    const playerExpensesString = playerExpensesField.innerText;
    const playerExpenses = parseInt(playerExpensesString);

    // console.log(playerExpenses);

    const managerAmountField = document.getElementById('manager-amount');
    const managerAmountString = managerAmountField.value;
    const managerAmount = parseInt(managerAmountString);

    // console.log(managerAmount);

    const coachAmountField = document.getElementById('coach-amount');
    const coachAmountString = coachAmountField.value;
    const coachAmount = parseInt(coachAmountString);

    // console.log(coachAmount);

    const totalAmount = playerExpenses + managerAmount + coachAmount;

    const totalAmountField = document.getElementById('total-amount');
    totalAmountField.innerText = totalAmount;

})