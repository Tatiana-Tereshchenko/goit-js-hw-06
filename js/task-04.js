const decrementEl = document.querySelector('[data-action="decrement"]');
const inncrementEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');
console.log(decrementEl)
console.log(inncrementEl)
console.log(spanEl)



const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
}

decrementEl.addEventListener('click', function () {
    console.log('кликнули на декримент')
counterValue.decrement()
    spanEl.innerText = counterValue.value;
})
inncrementEl.addEventListener('click', function () {
    console.log('кликнули на декримент')
    counterValue.increment()
    spanEl.innerText = counterValue.value;
})