
function toggleFullscreen() {

    // fullscreen is on
    if(document.fullscreenElement ||
       document.webkitFullscreenElement ||
       document.mozFullScreenElement ||
       document.msFullscreenElement) {
        
        if(document.exitFullscreen) {

            document.exitFullscreen();
        }
        else if(document.webkitExitFullscreen) {

            document.webkitExitFullscreen();
        }
        else if(document.mozCancelFullScreen) {

            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {

            document.msExitFullscreen();
        }
    }
    else {
        
        // fullscreen available
        if(document.fullscreenEnabled ||
           document.webkitFullscreenEnabled ||
           document.mozFullScreenEnabled ||
           document.msFullscreenEnabled) {

            var element = document.documentElement;

            if(element.requestFullscreen) {

                element.requestFullscreen();
            }
            else if(element.mozRequestFullScreen) {

                element.mozRequestFullScreen();
            }
            else if(element.webkitRequestFullscreen) {

                element.webkitRequestFullscreen();
            }
            else if(element.msRequestFullscreen) {

                element.msRequestFullscreen();
            }
        }
    }
}
