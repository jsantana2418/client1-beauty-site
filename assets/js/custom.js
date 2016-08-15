//click on sub menu items will scroll to location and close sidebar menu
$(document).ready(function() {

    $('.offcanvas-menu li a').on("click", function() {
        $("body.offcanvas").removeClass();
    });
    /* fire the below even which is a ajax request to obtain information from user
    submission and send off to formspree and not reload the page, but populate
    a field notifying the user submission was sent and if the user decides to submit
    another form request clicking on any of the listed input fields it will clear
    the fields and success message. */
    $('.form-horizontal').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#client_Name').val();
        //get the email field value
        var email = $('#client_Email').val();
        //get the tel
        var tel = $('#contact_Number').val();
        //get the subject
        var subject = $('#subject_Selection').val();
        //get the message
        var message = $('#client_Message').val();
        //get the monthly specials
        var mSpecials = $('#monthlySpecials').val();

        //pretend we don't need validation

        //send to formspree
        $.ajax({
            url: 'https://formspree.io/info@lashnbrowsbyj.com',
            method: 'POST',
            data: {
                name: name,
                email: email,
                tel: tel,
                subject: subject,
                message: message,
                mSpecials: mSpecials,
            },
            dataType: "json",
            success: function() {
                console.log('success');
                $('#thankyouBlock').show();
                $('.form-horizontal').trigger('reset');
                $('input[type=text], input[type=email], input[type=tel]').on("click", function() {
                    $('#thankyouBlock').hide();
                });
            }
        });
    });
    //smooth scroll to an anchor on a page
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});
