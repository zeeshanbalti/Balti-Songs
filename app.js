console.log("Hay Its Balghari Song Album");
//  Initialize the Variable

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let playGiff = document.getElementById("playGiff");
let songItem = Array.from(document.getElementsByClassName("songItem"))
let song = [
    {songName:'Hay la Balghari - Balghari song', soungPath:'songs/1.mp3', coverPath:'covers/1.jpg'},
    {songName:'Gila Matha - Noorima Reham', soungPath:'songs/2.mp3', coverPath:'covers/2.jpg'},
    {songName:'Ni Nas pon Strik Na Ra', soungPath:'songs/3.mp3', coverPath:'covers/3.jpg'},
    {songName:'Na yati Drong La Thona', soungPath:'songs/4.mp3', coverPath:'covers/4.jpg'},
    {songName:'Ata hn yad', soungPath:'songs/5.mp3', coverPath:'covers/5.jpg'},
    {songName:'Kahani suno Bsdk', soungPath:'songs/6.mp3', coverPath:'covers/6.jpg'},
    {songName:'Ishq da wallah', soungPath:'songs/7.mp3', coverPath:'covers/7.jpg'},
    {songName:'Tu kuja man kuja', soungPath:'songs/8.mp3', coverPath:'covers/8.jpg'},
    {songName:'Aray pagal', soungPath:'songs/9.mp3', coverPath:'covers/9.jpg'},
];

songItem.forEach((element, i)=> {
    console.log(element , i);
    element.getElementsByTagName('img')[0].src = song[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = song[i].songName

});
// audioElement.play()


masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        playGiff.style.opacity=1;
        console.log("click")
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play');
        playGiff.style.opacity=0;
        console.log("False")
    }
});

audioElement.addEventListener('timeupdate', ()=>{

    console.log("time Update")

    //Update seek Bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress)
    myProgressBar.value= progress
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100 ;
})