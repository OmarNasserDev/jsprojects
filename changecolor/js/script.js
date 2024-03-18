let changebtn = document.querySelector('.changebtn')
let colorViewer = document.querySelector('.colorViewer')

const colors = ['red', 'green', 'blue', "orange"]
let index = 0
changebtn.onclick = function () {
    colorViewer.style.backgroundColor = colors[index]
    index++
    if (index == 4) {
        index = 0
    }
}
