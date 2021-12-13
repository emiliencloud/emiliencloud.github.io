document.addEventListener('mousemove', function(e){
    this.querySelectorAll('.parallax').forEach(move=>{
        const score = move.getAttribute('data-score');
        const x = (window.innerWidth - e.pageX * score) / 500;
        const y = (window.innerWidth - e.pageY * score) / 500;

        move.style.transform = `
                    translateX(${x}px)
                    translateY(${y}px)
        `;
    })
});