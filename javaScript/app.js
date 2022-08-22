const playerArray = [];

function displayPlayer(player) {
    // console.log(player);
    const playerNamesArea = document.getElementById('players-name');
    playerNamesArea.innerHTML = '';

    for (let i = 0; i < player.length; i++) {
        // console.log(playerName[i].playerNameFromWebsite);
        // console.log(playerArray[i]);
        const playerName = player[i].playerNameFromWebsite;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${i + 1}</th>
        <td>${playerName}</td>
        `;

        playerNamesArea.appendChild(tr);


        // const totalPlayerAdded = document.getElementById('total-player-number');
        // totalPlayerAdded.innerText = playerArray.length;
        // console.log(totalPlayerAdded.innerText);

        // if(player.length > 5){
        //     alert("You can't add more players.")
        // }

    }
}


function addToSelectArea(event) {
    const playerNameFromWebsite = event.parentNode.parentNode.children[0].innerText;

    const playerNameObject = {
        playerNameFromWebsite: playerNameFromWebsite
    }

    playerArray.push(playerNameObject);

    const totalPlayerAdded = document.getElementById('total-player-number');
    totalPlayerAdded.innerText = playerArray.length;

    const number = totalPlayerAdded
    console.log(number);
    // if (number > '5') {
    //     alert("You can't add more players.");
    //     return;
    // }

    displayPlayer(playerArray);
}