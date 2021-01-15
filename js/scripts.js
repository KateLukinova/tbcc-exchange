
$( document ).ready(function() {
    $('.contact-form').on('submit', function (e) {

        e.preventDefault();

        $.ajax({
            type: 'post',
            url: 'form_processing.php',
            data: $('form').serialize(),
            success: function () {
                $('.form-button').addClass('active').text('Thank you')
            }
        });
    });

    $('#lang-select').select2()

});
