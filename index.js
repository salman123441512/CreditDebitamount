

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 100;

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                setTimeout(updateCounter, 50);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});
//   USER DASHBOARD
$(document).ready(function () {
    function collapseSidebar() {
        $('#mysidenav').css('width', '70px');
        $('#main').css('margin-left', '70px');
        $('.logo').css('visibility', 'hidden');
        $('.logo span').css('visibility', 'visible');
        $('.logo span').css('margin-left', '-10px');
        $('.icon-a').css('visibility', 'hidden');
        $('.icons').css('visibility', 'visible');
        $('.icons').css('margin-left', '-8px');
        $('.nav1').hide();
        $('.nav2').show();
        $('body').css('overflow-y', 'scroll'); // Enable scroll on body
    }

    function expandSidebar() {
        $('#mysidenav').css('width', '300px');
        $('#main').css('margin-left', '290px');
        $('.logo').css('visibility', 'visible');
        $('.logo span').css('visibility', 'visible');
        $('.icon-a').css('visibility', 'visible');
        $('.icons').css('visibility', 'visible');
        $('.nav1').show();
        $('.nav2').hide();
        $('body').css('overflow-y', 'scroll'); // Disable scroll on body
    }

    $('.nav1').click(function () {
        collapseSidebar();
    });

    $('.nav2').click(function () {
        expandSidebar();
    });

    function adjustNav() {
        if ($(window).width() <= 768) {
            collapseSidebar();
        } else {
            expandSidebar();
        }
    }

    $(window).resize(function () {
        adjustNav();
    });

    adjustNav();  // Adjust on page load
});

//    SEND MONEY 

$(document).ready(function () {
    function handleDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        $(event.currentTarget).addClass('dragover');
    }

    function handleDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        $(event.currentTarget).removeClass('dragover');
    }

    function handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        $(event.currentTarget).removeClass('dragover');
        var files = event.originalEvent.dataTransfer.files;
        var inputField = $(event.currentTarget).find('input[type="file"]');
        inputField[0].files = files;
        // Optional: display file names or handle files here
        console.log(files);
       
    }

    $('.file-drop-area').on('dragover', handleDragOver);
    $('.file-drop-area').on('dragleave', handleDragLeave);
    $('.file-drop-area').on('drop', handleDrop);

    $('input[type="file"]').on('change', function (event) {
        var files = event.target.files;
        console.log(files);
        // Optional: handle files here
    });
});

