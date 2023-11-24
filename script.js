const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// CURSOR SCRIPT STARTS HERE⬇
const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursor.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 350, fill: "forwards"})
})

// CURSOR SCRIPT ENDS HERE🛑

const boundingElm = document.querySelector('.bounding-elm')

boundingElm.