const playerArray = [];

function displayPlayer(player) {

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
    }
}

function addToSelectArea(event) {

    const numberArea = document.getElementById('total-player-number');
    const numberString = numberArea.innerText
    const number = parseInt(numberString);

    if (number >= 5) {
        alert("You can't add more player.");
        return;
    }

    const playerNameFromWebsite = event.parentNode.parentNode.children[0].innerText;

    const playerNameObject = {
        playerNameFromWebsite: playerNameFromWebsite
    }

    playerArray.push(playerNameObject);

    const totalPlayerAdded = document.getElementById('total-player-number');
    totalPlayerAdded.innerText = playerArray.length;

    event.disabled = true ;
    displayPlayer(playerArray);
}
                            // Player Expenses
document.getElementById('calculatePlayerAmount').addEventListener('click', function () {

    const playerNumber = getInnerTextByUsingId('total-player-number');
    const perPlayerAmount = getValueByUsingId('per-Player-Amount');

    const playerTotalAmount = playerNumber * perPlayerAmount;

    setInnerTextByUsingId('playerTotal', playerTotalAmount);
})
                                    // Total Amount
document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const playerExpenses = getInnerTextByUsingId('playerTotal');
    const managerAmount = getValueByUsingId('manager-amount');
    const coachAmount = getValueByUsingId('coach-amount');

    const totalAmount = playerExpenses + managerAmount + coachAmount;

    setInnerTextByUsingId('total-amount', totalAmount);
})