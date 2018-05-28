/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.7.1
 *
 */

$(document).ready(function () {


    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }

    // MetsiMenu
    $('#side-menu').metisMenu();

    // Footable
    $('.footable').footable();

    // Collapse ibox function
    $('.collapse-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').on('click', function () {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Minimalize menu
    $('.navbar-minimalize').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();

    });

    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarHeight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarHeight + "px");
        }

        if (navbarHeight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarHeight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarHeight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    })

    /***************************
     * Customized JS functions *
     ***************************/
    // Functions for user admin
    var usersAdminURL = "/usersadmin";
    // display confirm form for userType editing
    $(".footable tbody tr td").on("click", "button.setAdmin",  function(){
        var valArray = $(this).val().split('-');
        var userName = valArray[1];
        document.getElementById("targetAddAdminUsersID").innerHTML = userName;
        window.targetSJTUID = valArray[0];
        $('#setAdminModal').modal('show');
    });
    $(".footable tbody tr td").on("click", "button.revokeAdmin",  function(){
        var valArray = $(this).val().split('-');
        var userName = valArray[1];
        document.getElementById("targetRevokeAdminUsersID").innerHTML = userName;
        window.targetSJTUID = valArray[0];
        $('#revokeAdminModal').modal('show');
    });
    // Save Change btn in modal clicked, Confirm uerType changes
    $(".modal-footer").on("click", ".btn-confirm-change",  function(e){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        e.preventDefault();

        var targetType;

        //used to determine the http verb to use [add=POST], [update=PUT]
        var state = $(this).val();
        var type = "POST";
        var target_id = window.targetSJTUID;
        if (state === "set") {
            targetType = "admin";
        } else {
            if (target_id.charAt(0) === "6")
                targetType = "faculty";
            else
                targetType = "student";
        }
        // var target_id = $(this).parentNode.parentNode.children[1].children[1].innerText;

        var formData = {
            userType: targetType,
            _method: "PUT"
        };
        var my_url = usersAdminURL;
        my_url += '/' + target_id;
        $.ajax({
            type: type,
            url: my_url,
            data: formData,
            dataType: 'json',
            success: function (data) {
                //TODO Optimize to avoid reload each time
                location.reload();
                // if (state === "set")
                //     $('#setAdminModal').modal('hide');
                // else
                //     $('#revokeAdminModal').modal('hide');
            },
            error: function (data) {
                console.log('Error:', data);
            }
        });
    });
});


// Minimalize menu when screen is less than 768px
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}
