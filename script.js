console.log("welcome to spotify");

// import { readdirSync } from 'fs';
// var files = readdirSync('music/');


let songIndex=0;
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');
let songNameBottom=document.getElementById('songNameBottom');
console.log(songNameBottom);
let gif = document.getElementById('gif');
let audioElement = new Audio("music/1.mp3");
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Memories - Maroon 5", filePath:"music/1.mp3",coverPath:"images/1.jpg"},
    {songName:"I Believe In You - Michael Buble", filePath:"music/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Choo Lo - The Local Train", filePath:"music/2.mp3",coverPath:"images/1.jpg"}
];

songItems.forEach((element,i)=> {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

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

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');
    });
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        if(audioElement.paused || audioElement.currentTime<=0)
        {
        // console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        gif.style.opacity=1;
        songNameBottom.innerText = songs[songIndex].songName;
        console.log(songs[songIndex].songName);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`music/${songIndex + 1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        }
        else
        {
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            gif.style.opacity=0;
        }
    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src=`music/${songIndex + 1}.mp3`;
    songNameBottom.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=9;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=`music/${songIndex + 1}.mp3`;
    songNameBottom.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
});