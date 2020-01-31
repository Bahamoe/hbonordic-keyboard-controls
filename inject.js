

function KeyController() {
    this.setup = function(videoEl) {
        this.keys = {
            space: 32,
            arrowLeft: 37,
            arrowRight: 39,
            keyF: 70,
        };
        this.videoEl = videoEl,
        this.controlBar = document.querySelector('.vjs-control-bar');
        this.forwardBtn = this.controlBar.querySelector('.forward-button');
        this.backwardBtn = this.controlBar.querySelector('.backward-button');
        this.fullscreenBtn = this.controlBar.querySelector('.vjs-fullscreen-control');
        window.addEventListener("keydown", this.handleKeyPress);
    };
    this.handleKeyPress = event => {

        switch (event.keyCode) {
            case this.keys.space:
                this.spacePress();
                break;

            case this.keys.arrowLeft:
                this.arrowLeftPress();
                break;

            case this.keys.arrowRight:
                this.arrowRightPress();
                break;

            case this.keys.keyF:
                this.keyFPress();
                break;
        
            default:
                break;
        }
    };
    this.spacePress = () => {
        if(this.videoEl.paused) {
            this.videoEl.play();
        }else{
            this.videoEl.pause();
        }
    };
    this.keyFPress = () => {
        this.fullscreenBtn.click();
    };
    this.arrowLeftPress = () => {
        if(!this.backwardBtn) {
            this.backwardBtn = this.controlBar.querySelector('.backward-button');
        }
        this.backwardBtn.click();
    };
    this.arrowRightPress = () => {
        if(!this.forwardBtn) {
            this.forwardBtn = this.controlBar.querySelector('.forward-button');
        }
        this.forwardBtn.click();
    };

}



let keyController = null;
const body = document.body;
let interval = setInterval(() => {
    if(body.classList['value'].includes('ready')) {
        const videoEl = document.querySelector('.vjs-tech');
        keyController = new KeyController();
        keyController.setup(videoEl);
        clearInterval(interval);
    }
}, 1000);