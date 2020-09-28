const input = document.querySelector('.input')
const button = document.querySelector('.btn')
const blockList = document.querySelector('.tasks')

function pushElement(text){
    const newElement = document.createElement('li')
    const deleteBatton = document.createElement('button')
    newElement.className = 'task'

    deleteBatton.textContent = 'delete'
    deleteBatton.className = 'del'
    deleteBatton.addEventListener('click', function(e){
        blockList.removeChild(newElement)
    })

    // newElement.addEventListener('click', )

    newElement.textContent = text
    newElement.appendChild(deleteBatton)
    blockList.appendChild(newElement)
}

button.addEventListener('click', function(e){
    if(input.value.length >= 1 ){
        pushElement(input.value)
        input.value = ''
    } else {
        alert('Input field cannot be empty')
    }
    
})