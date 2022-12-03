const navBar = document.querySelector(".header")
document.addEventListener('scroll', () => {
    if (window.scrollY > 550) {
        navBar.classList.add('on-scrolling');
        navBar.style.position = 'sticky';
        navBar.style.top = '0px';
    }
    else {
        navBar.classList.remove('on-scrolling');
        navBar.style.position = 'relative';
    }
})



const observerAbout = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('moveFromRight');
        }
    });
});
observerAbout.observe(document.querySelector('.about'));

const observerVideo = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('moveFromBottom');
        }
    });
});
observerVideo.observe(document.querySelector('.video-player'));

const observerComments = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('moveFromBottom');
        }
    });
});
observerComments.observe(document.querySelector('.comments'));

const observerExperts = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('moveFromBottom');
        }
    });
});
observerExperts.observe(document.querySelector('.experts'));

let wasUsed = false;
const [c1, c2, c3] = [...document.querySelectorAll('[data-counter]')];
let countersDeleter;
const observerStat = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('moveFromLeft');
            if (!wasUsed) {
                setTimeout(() => {
                    const c1Del = setInterval(() => {
                        c1.textContent = (+c1.textContent) + 1;
                        if (c1.textContent == c1.dataset.maxValue) {
                            clearInterval(c1Del);
                        }
                    }, 90);
                    const c2Del = setInterval(() => {
                        c2.textContent = (+c2.textContent) + 1;
                        if (c2.textContent == c2.dataset.maxValue) {
                            clearInterval(c2Del);
                        }
                    }, 90);
                    const c3Del = setInterval(() => {
                        c3.textContent = (+c3.textContent) + 1;
                        if (c3.textContent == c3.dataset.maxValue) {
                            clearInterval(c3Del);
                        }
                    }, 30);
                }, 1500);
                wasUsed = true;
            }
        }
    });
});
observerStat.observe(document.querySelector('.statistics'));


document.querySelector('#about').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.about').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

document.querySelector('#comments').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.comments').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
})

const link = document.querySelector("#emailLink")
const form = document.querySelector('.needs-validation')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    event.stopPropagation()

    if (!form.classList.contains('was-validated'))
        form.classList.add('was-validated')

    if (form.checkValidity()) {
        const _get = id => document.querySelector(id).value;
        const _reset = id => document.querySelector(id).value = '';
        link.href += `body=От: ${_get('#senderName')}.   ${_get('#emailText')}&subject=${_get('#senderTitle')}`;
        link.click();
        _reset('#senderName');
        _reset('#emailText');
        _reset('#senderTitle');
        _reset('#senderEmail');
        form.classList.remove('was-validated')
    }

}, false)