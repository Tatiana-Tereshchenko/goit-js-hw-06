const inputEl = document.querySelector('#font-size-control');
console.log(inputEl)
const textEl = document.querySelector('#text')
console.log(textEl)

inputEl.addEventListener('input', () => {
    textEl. style.fontSize = `${inputEl.value}px`
})