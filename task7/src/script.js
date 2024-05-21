
$(document).ready(function() {
    // Task 1: Display Welcome Message
    $('#welcomeButton').click(function() {
        $('#welcomeMessage').show();
    });

    // Task 2: Change background color of input boxes on click
    $('.inputBox').click(function() {
        $(this).css('background-color', 'yellow');
    });

    // Task 3: Toggle styles on element
    $('#toggleStyleButton').click(function() {
        $('#styleElement').toggleClass('style1 style2');
    });

    // Task 4: Display text box content on button
    $('#textBoxButton').click(function() {
        var text = $('#textBox').val();
        $(this).text(text);
    });
});
