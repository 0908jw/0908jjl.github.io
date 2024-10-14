$(document).ready(function() {
    let isToggled = false;

    $('#toggle').click(function() {
        if (isToggled) {
            $('#background-container').css('background-image', 'url(https://cdn.mos.cms.futurecdn.net/nT6eb3GNFQJ6AerZkWVqBo-320-80.gif)'); 
            $('#hello').css({
                'color': 'whitesmoke', 
                'text-shadow': '1px 1px 10px #fff, 1px 1px 10px #ccc'
            });
        } else {
            $('#background-container').css({
                'background-image': 'url(./image/whiteversion.gif)',
                'background-size': 'cover',         
                'background-position': 'center',    
                'background-repeat': 'no-repeat'    
            });
            $('#hello').css({
                'color': '#000000',
                'text-shadow': '2px 2px 20px #000000, 2px 2px 20px #000000'
            });
        }
        isToggled = !isToggled;
    });
});
