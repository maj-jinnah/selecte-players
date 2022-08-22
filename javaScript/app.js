const playerArray = [];

function displayPlayer(playerName){
    console.log(playerArray);
    // const playerNamesArea = document.getElementById('players-name');

    // for( let i= 0; i < playerArray.length; i++){
    //     // console.log(playerArray[i]);
    //     const playerName = playerArray[i];
    //     console.log(playerName);
    // }
}


function addToSelectArea(event){
    const playerNameFromWebsite = event.parentNode.parentNode.children[0].innerText;
    
    const playerNameObject = {
        playerNameFromWebsite: playerNameFromWebsite
    }

    playerArray.push(playerNameObject);

    const totalPlayerAdded = document.getElementById('total-player-number');
    totalPlayerAdded.innerText = playerArray.length;
    // console.log(totalPlayerAdded.innerText);

    displayPlayer(playerArray);
}