var playlist = [
    {
        title: "Beside You",
        artist: "keshi",
        file: "/audio/besideyou.mp3",
        cover: "/images/besideyou_cover.jpg"
    },
    {
        title: "Host",
        artist: "Color Out",
        file: "/audio/host.mp3",
        cover: "/images/host_cover.png"
    },
    {
        title: "I Know Now",
        artist: "Xander Black",
        file: "/audio/iknownow.mp3",
        cover: "/images/iknownow_cover.png"
    },
];


var currentTrack = 0;
var sound = new Howl({
    src: [playlist[currentTrack].file],
    volume: 0.5,
    onend: function() {
        skip('next');
    }
});

function togglePlayPause() {
    var playPauseBtn = document.getElementById('playPause');
    var playPauseIcon = document.getElementById('play-pause-icon');
    if (sound.playing()) {
        sound.pause();
        playPauseIcon.src = '/images/play.png'; 
        playPauseIcon.alt = 'Play';
    } else {
        sound.play();
        playPauseIcon.src = '/images/pause.png'; 
        playPauseIcon.alt = 'Pause';
    }
}

function skip(direction) {
    sound.stop();
    if (direction === 'next') {
        currentTrack = (currentTrack + 1) % playlist.length;
    } else {
        currentTrack = (currentTrack + playlist.length - 1) % playlist.length;
    }
    sound = new Howl({
        src: [playlist[currentTrack].file],
        volume: 0.5,
        onplay: updateTrackInfo,
        onend: function() {
            skip('next');
        }
    });
    sound.play();
}

function updateTrackInfo() {
    document.getElementById('track-title').textContent = playlist[currentTrack].title;
    document.getElementById('track-artist').textContent = playlist[currentTrack].artist;
    document.getElementById('track-art').src = playlist[currentTrack].cover;
    document.getElementById('play-pause-icon').classList.replace('fa-play', 'fa-pause');
}

function adjustVolume(value) {
    sound.volume(value);
}

window.onload = function() {
    updateTrackInfo();
};
