// -------------toggle icon navbar *//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// -------------scroll sections active link *//

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // -------------sticky navbar-----*//

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 140);

    // -------------remove toggle icon and navbar when click navbar link(scroll) ---*//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ------------scroll reveal----------- /
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .center-text', { origin: 'top' });
ScrollReveal().reveal(' .box, .row, .contact form', { origin: 'bottom' });
ScrollReveal().reveal(' .home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal(' .home-content p, .about-text', { origin: 'right' });

// ------------typed js----------- /
const typed = new Typed('.multiple-text', {
    strings: ['a Frontend Developer', ' a Graphic Designer', 'an Instructor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true, 
    
});

// <!-- --form activation and submission-->

        const scriptURL = 'https://script.google.com/macros/s/AKfycbw2MmPNpXnaC1QDvfOJREF27mvuxn1ql8h8IJhbQos1Y2L7uQEWTgv3L38I6G5JCErU/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg')
      
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    if (response.ok) {
                        msg.innerHTML = "Message sent successfully";
                        setTimeout(() => {
                            msg.innerHTML = "";
                        }, 5000);
                        form.reset();
                    } else {
                        throw new Error('Server responded with an error!');
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    msg.innerHTML = "Failed to send message. Please try again.";
                    setTimeout(() => {
                        msg.innerHTML = "";
                    }, 5000);
                });
        });
        

