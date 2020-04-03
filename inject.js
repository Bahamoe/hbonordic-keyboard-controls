

function KeyController() {
    this.setup = function(videoEl) {
        this.keys = {
            space: 32,
            enter: 13,
            arrowLeft: 37,
            arrowUp: 38,
            arrowRight: 39,
            arrowDown: 40,
            keyF: 70,
            keyM: 77,
        };
        this.videoEl = videoEl,
        this.controlBar = document.querySelector('.vjs-control-bar');
        this.fullscreenBtn = this.controlBar.querySelector('.vjs-fullscreen-control');
        window.addEventListener("keydown", this.handleKeyPress);
    };
    this.handleKeyPress = event => {
        switch (event.keyCode) {
            case this.keys.space:
            case this.keys.enter:
                this.playPauseToggle();
                break;

            case this.keys.arrowLeft:
                this.seekVideo(-10);
                break;

            case this.keys.arrowRight:
                this.seekVideo(+10);
                break;

            case this.keys.keyF:
                this.fullscreenToggle();
                break;

            case this.keys.keyM:
                this.muteToggle();
                break;

            case this.keys.arrowUp:
                this.changeVolume(+0.1);
                break;

            case this.keys.arrowDown:
                this.changeVolume(-0.1);
                break;
        
            default:
                break;
        }
    };
    this.playPauseToggle = () => {
        if(this.videoEl.paused) {
            this.videoEl.play();
        }else{
            this.videoEl.pause();
        }
    };
    this.fullscreenToggle = () => {
        this.fullscreenBtn.click();
    };
    this.muteToggle = () => {
        this.videoEl.muted = !this.videoEl.muted;
    };
    this.seekVideo = (duration) => {
        this.videoEl.currentTime += duration;
    }
    this.changeVolume = (addition) => {
        const currentVolume = this.videoEl.volume;
        let newVolume = currentVolume + addition;
        if(newVolume > 0.9) {
            newVolume = 1;
        }else if(newVolume < 0.1) {
            newVolume = 0;
        }
        this.videoEl.volume = newVolume;
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