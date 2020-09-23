const input = document.querySelector('.input')
const button = document.querySelector('.btn')
const blockList = document.querySelector('.tasks')


function pushElement(text){
    const newElement = document.createElement('li')
    const deleteBatton = document.createElement('button')

    deleteBatton.textContent = 'delete'
    deleteBatton.addEventListener('click', function(e){
        blockList.removeChild(newElement)
    })

    newElement.textContent = text
    newElement.appendChild(deleteBatton)
    blockList.appendChild(newElement)
}

button.addEventListener('click', function(e){
    pushElement(input.value)
    input.value = ''
})