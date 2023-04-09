// 1
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const num = document.querySelector('.number')
let number = 0

function upp() {
    number++
    num.innerHTML = number
}

function downn() {
    number--
    num.innerHTML = number
}

up.addEventListener('click', upp)
down.addEventListener('click', downn)

// 2
const color = document.querySelector('.color')
const text = document.querySelector('.text')
const but = document.querySelector('.but')
function get_info() {
    text.style.color = color.value
}
but.addEventListener('click', get_info)

// 3
const email = document.querySelector('.email')
const login = document.querySelector('.login')
const pas = document.querySelector('.pas')
const pas2 = document.querySelector('.pas2')
const but2 = document.querySelector('.but2')

function check() {
    if (pas2.value != pas.value) {
        alert("Repeated password is not correct")
        return
    }
    alert(`to ${email.value} sended confirm mail`)
}

but2.addEventListener('click', check)