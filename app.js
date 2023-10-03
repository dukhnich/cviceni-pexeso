console.log('Funguju!')

const karticky = document.querySelectorAll('.karticka')
let openCards = [];
const clearOpen = () => {
    const srcArr = openCards.map(el => el.querySelector('img')?.src).sort();
    const doubles = [];
    srcArr.forEach((src, i) => {
        if (src && srcArr[i + 1] === src) {
            doubles.push(src);
        }
    })
    if (doubles.length) {
        const newOpen = [];
        openCards.forEach(el => {
            const src = el.querySelector('img')?.src;
            if (doubles.includes(src)) {
                el.disabled = true;
            } else {
                newOpen.push(el);
            }
        })
        openCards = newOpen;
    }
    openCards.forEach(el => {
        el.classList.toggle('otocena')
    });
    openCards = [];
}
karticky.forEach(el => {
    el.addEventListener('click', () => {
        if (openCards.length > 1) {
            return;
        }
        if (el.classList.contains('otocena')) {
            openCards.push(el);
        }
        el.classList.toggle('otocena');
        if (openCards.length > 1) {
            setTimeout(clearOpen, 1000)
        }
    })
})
