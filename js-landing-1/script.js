document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.anim-items');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 4);
                
            if (windowCenter > scrollOffset) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});
