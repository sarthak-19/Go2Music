console.log("welcome to spotify");

songIndex=0;
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songs=[
    {"songName":"Memories Maroon 5", filePath:"music/memories.mp3",coverPath:"covers/1.jpg"}
];
let audioElement = new Audio("music/memories.mp3");

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else
    {
        audioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
});

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdated');

    let progress = (audioElement.currentTime/audioElement.duration)*100;
    myProgressBar.value = progress;
});
