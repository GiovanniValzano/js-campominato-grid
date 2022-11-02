let eleGrid = document.querySelector('.grid')
let button = document.getElementById('play')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', play) 

function play() {
    eleGrid.innerHTML = ''
    for ( let i = 1; i <= difficulty.value * difficulty.value; i++) {
    const eleCell = document.createElement('div')
    eleCell.classList.add('cell')
    eleCell.style.width = "calc(100% / "+difficulty.value+")"
    eleCell.innerHTML = `${i}`
    eleGrid.append(eleCell)

    eleCell.addEventListener('click', function () {
        this.classList.toggle('active')  
    }) 
}
}