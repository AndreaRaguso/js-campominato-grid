let submit = document.getElementById("submit");

const cellContainer = document.getElementById('cell-container');


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const numeriGenerati = [];

submit.onclick = function(){

    let choose = document.getElementById("choose").value;
    var caselle = 0;
    var righe = 0;

    if(choose == "Peaceful"){
        caselle = 100;
        righe = 10;
    }
    else if(choose == "Medium"){
        caselle = 81;
        righe = 9;
    }

    else if (choose == "Hard"){
        caselle = 49;
        righe = 7;
    }


    else {
        alert("Hai inserito dati sbagliati");
    }


    for (let i = 0; i < caselle; i++) {

        const newCell = createNewCell();
        cellContainer.append(newCell);

    }

    function createNewCell() {

        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.height = "calc(100% / " + righe + ")";
        cell.style.width = "calc(100% / " + righe + ")";
        console.log(righe);
        cell.addEventListener('click',
        
            function () {
                

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

        let randomNumber = getRandomNumber(1, caselle);

        while(numeriGenerati.includes(randomNumber)){
            randomNumber = getRandomNumber(1, caselle);
        }

        numeriGenerati.push(randomNumber);

        return cell;

    }

}
