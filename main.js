$(document).ready(function() {
    let isToggled = false;

    $('#toggle').click(function() {
        if (isToggled) {
            $('#background-container').css({'background-image': 'url(https://cdn.mos.cms.futurecdn.net/nT6eb3GNFQJ6AerZkWVqBo-320-80.gif)',
            'filter': 'none'}); 
            $('#hello').css({
                'color': 'whitesmoke', 
                'text-shadow': '1px 1px 10px #fff, 1px 1px 10px #ccc'
            });
            $('#toggle').text('Light mode');
            
        } else {

            $('#background-container').css({
                'filter': 'invert(1)',
                'background-size': 'cover',         
                'background-position': 'center',    
                'background-repeat': 'no-repeat'    
            });

            $('#toggle').text('Dark mode');
        }
        isToggled = !isToggled;
    });
});
