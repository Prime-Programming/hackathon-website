$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function() {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    }); 

    // navbar hide on scroll
    const hero = document.getElementById('soc');
    const navbar = document.querySelector('header');

    let lastScrollY = window.scrollY;

    function handleScroll() {
        const scrollY = window.scrollY;

        if (scrollY > hero.clientHeight) {
            navbar.style.top = `-${navbar.clientHeight}px`;
        } else {
            navbar.style.top = 0;
        }

        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', handleScroll);

    //preloader
    
    
    //tilt mouse following effect
    const imageContainer = document.querySelector('.image');
    const tiltImage = imageContainer.querySelector('.tilt');

    const borderSize = 250; // adjust value to increase border

    imageContainer.addEventListener('mousemove', (event) => {
        const containerRect = imageContainer.getBoundingClientRect();

        const mouseX = event.clientX - containerRect.left;
        const mouseY = event.clientY - containerRect.top;

         const tiltX = (mouseX - containerRect.width / 2) / containerRect.width * borderSize;
         const tiltY = (mouseY - containerRect.height / 2) / containerRect.height * borderSize;

        tiltImage.style.transform = `translate(${tiltX}px, ${tiltY}px)`;
    });

    imageContainer.addEventListener('mouseleave', () => {
        tiltImage.style.transform = 'translate(0, 0)';
    });


    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function(event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function() {
        if (document.visibilityState === "visible") {
            document.title = "FADI CS CLUB";
            $("#favicon").attr("href", "assets/images/favicon.png");
        } else {
            document.title = "Come Back!";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [
        '<span class="motto" style="color: #bd78dd">const</span><span style="color: #e5c07b" class="motto"> slogan</span><span style="color: #51b2bd"> =</span><span style="color: #54a0dd" class="motto"> code</span><span style="color: #c4774e">(</span><span style="color: #d45f5d" class="motto">today</span><span style="color: #c4774e">)</span><br><span class="motto" style="color: #54a0dd">.then</span><span style="color: #c4774e">(</span><span style="color: #d45f5d" class="motto">conquer</span><span style="color: #bd78dd"> =></span><span style="color: #54a0dd" class="motto"> tomorrow</span><span style="color: #bd78dd">(</span><span style="color: #d45f5d" class="motto">conquer</span><span style="color: #bd78dd">)</span><span style="color: #c4774e">)</span>'
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 25,
    backDelay: 7000,
});

// disable developer mode
document.onkeydown = function(e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', {
    delay: 200
});
srtop.reveal('.home .content p', {
    delay: 200
});
srtop.reveal('.home .content .btn', {
    delay: 200
});

srtop.reveal('.home .image', {
    delay: 400
});
srtop.reveal('.home .linkedin', {
    interval: 600
});
srtop.reveal('.home .github', {
    interval: 800
});
srtop.reveal('.home .twitter', {
    interval: 1000
});
srtop.reveal('.home .telegram', {
    interval: 600
});
srtop.reveal('.home .instagram', {
    interval: 600
});
srtop.reveal('.home .dev', {
    interval: 600
});