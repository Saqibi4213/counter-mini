const count = document.querySelector('.count');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const changeBy = document.querySelector('.changeBy');
const resetBtn = document.querySelector('.reset-btn');

plus.addEventListener ('click', () =>{
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue + changeByValue;
});

minus.addEventListener ('click', () =>{
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue - changeByValue;
});


resetBtn.addEventListener ('click', () => {
    count.innerText = 0;
});



