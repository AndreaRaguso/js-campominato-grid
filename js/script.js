let submit = document.getElementById("submit");

const cellContainer = document.getElementById('cell-container');


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const numeriGenerati = [];

submit.onclick = function(){

    for (let i = 0; i < 100; i++) {

        const newCell = createNewCell();
        cellContainer.append(newCell);

    }

    function createNewCell() {

        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click',
        
            function () {
                
                console.log(this);
                console.log(this.classList);

                if(this.classList.contains('clicked')){
                    this.classList.remove('clicked');
                    cell.innerHTML = "";
                }
                else{
                    this.classList.add('clicked');
                    cell.innerHTML = randomNumber;
                }

            }
        
        );

        let randomNumber = getRandomNumber(1, 100);

        while(numeriGenerati.includes(randomNumber)){
            randomNumber = getRandomNumber(1, 100);
        }

        numeriGenerati.push(randomNumber);

        console.log(numeriGenerati);

        console.log(randomNumber);

        if(randomNumber % 2 == 0){
            cell.classList.add('even');
        }
        else {
            cell.classList.add('odd');
        }

        return cell;

    }
    
}
