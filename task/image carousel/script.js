let images = document.querySelectorAll(".image")
let count = 0;

images.forEach((e, i) => {
    e.style.left = `${i * 100}%`
})

function slide() {
    images.forEach(e => {
        e.style.transform = `translateX(-${count * 100}%)`
    })
}

function pre() {
    count--
    if (count < 0) {
        count = images.length - 1
    }
    slide()
}

function next() {
    count++
    if (count >= images.length) {
        count = 0
    }
    slide()
}