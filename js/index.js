console.log("your index.js file is loaded correctly!");

$(document).ready(function() {
    // Handle navigation link clicks
    $('.ulnav li').click(function() {
        var targetText = $(this).text();
        var targetSection;

        if (targetText === 'About') {
            targetSection = $('.aboutme');
        } else if (targetText === 'Work') {
            targetSection = $('.myWork');
        }

        if (targetSection) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top
            }, 1000); // Adjust the duration as needed (1000 milliseconds = 1 second)
        }
    });

    // Handle logo click to scroll to top
    $('#topLogo').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000); // Adjust the duration as needed (1000 milliseconds = 1 second)
    });
});
