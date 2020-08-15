
// Select The Start Game Button

document.querySelector(".control-button span").onclick = function (){
    let yourName = prompt('Enter Your Name:  ');

    if (yourName ==null || yourName == ""){
        document.querySelector('.name span').innerHTML = 'Unknown';
    }else{
        document.querySelector('.name span').innerHTML = yourName;
    }
document.querySelector('.control-button').remove();
};

// Effect Duration 
let duration = 1000;

//Select Blocks Container 
let blocksContainer = document.querySelector('.memory-game-blocks');

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

let orderRange = Array.from(Array(blocks.length).keys());

//let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
    
    block.addEventListener('click', function () {
        flipBlock(block);
        
    });
});

function flipBlock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');

    let allFlipped = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if (allFlipped.length === 2 ){
        
        stopClicking();


        checkMatchBlocks(allFlipped[0], allFlipped[1]);
    }
}

function stopClicking() {
    blocksContainer.classList.add('no-clicking');
    
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

function checkMatchBlocks(firstBlock, secondBlock) {
    
    let triesElement = document.querySelector('.tries span');

    if (firstBlock.dataset.plant === secondBlock.dataset.plant){
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        
    } else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        
        setTimeout(() => {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        }, duration);
    }

}
function shuffle(array) {
    let current = array.length,
    temp,
    random;

while (current > 0) {
    random = Math.floor(Math.random()*current);

    current--;

    temp = array[current];

    array[current] = array[random];

    array[random] = temp;
    
    }
    return array;
}

// if (triesElement.innerHTML === 3){
//     document.querySelector('button').style.visibility = 'hidden';

    document.querySelector('button').onclick = function restart() {
        location.reload();
    }
    restart(document.location.href);


// }else{
//     document.querySelector('button').style.display = 'none';
// }




// document.querySelector('button').style = function () {
//     if (allFlipped == false) {
//         document.querySelector('button').style.display = 'none';
//     }
// }


// function reset() {
//     if (allFlipped.length == null || allFlipped.length > 0 ) {
//         document.querySelector('button').innerHTML.remove();
        
//     } else {
//       let Rest = document.querySelector('button').innerHTML.add();
//     }
    
// }
