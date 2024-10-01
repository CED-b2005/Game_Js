const display = document.getElementById('display-game')
const infor = document.getElementById('infor')
const next = document.getElementById('next')


var winW = window.innerWidth;
var winH = window.innerHeight;
function sizeList(object, type, value) {
    for (let i = 0; i < object.length; i++) {
        object[i].style.setProperty(type[i], `${value[i]}px`)
    }
}

function check() {
    if (winH / 1.5 >= winW) {
        sizeList([display, display, infor, infor, next, next],
            ['--valueW', '--valueH', '--valueW', '--valueH', '--valueW', '--valueH',],
            [winW / 2.2, winW / 1.1, winW / 2.2, winW / 1.1, winW / 2.2, winW * 3 / 22]
        )
    }
    else {

        sizeList([display, display, infor, infor, next, next],
            ['--valueW', '--valueH', '--valueW', '--valueH', '--valueW', '--valueH'],
            [winH / 2.8, winH / 1.4, winH / 2.8, winH / 1.4, winH / 2.8, winH * 3 / 14]
        )
    }
}

check()
window.addEventListener('resize', function () {
    winW = window.innerWidth;
    winH = window.innerHeight;
    check()
})





// display.style.setProperty('--valueW', `${window.innerWidth / 3}px`)
// display.style.setProperty('--valueH', `${window.innerHeight / 1.35}px`)

// infor.style.setProperty('--valueW', `${window.innerWidth / 3}px`)
// infor.style.setProperty('--valueH', `${window.innerHeight / 1.35}px`)