console.log("Welcome to Spotify");

 

//intialie variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myprogressBar  = document.getElementById('myprogressBar')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let mastersongname = document.getElementById('mastersongname')

// audioElement.play();
 

let songs = [

    {songName: "Tum se hi", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songName: "Meri Sanso m Basa Hai", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Oo Saathi re", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Tere Mere Hotho pe", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Tu Hi re", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
 
]

songItem.forEach((element,i)=>{
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
   
    //Update seekbar
 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
})

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
})


//update all uper play button
//let upeericon = Array.from(document.getElementsById('upeericon'))


const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('upericon')).forEach((element)=>{
         
            element.classList.remove('fa-circle-pause')
            element.classList.add('fa-circle-play')
        })
}

Array.from(document.getElementsByClassName('upericon')).forEach((element)=>{

    element.addEventListener('click', (e)=>{
        
        makeallplay();

        songIndex = parseInt(e.target.id)

        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')


         
        audioElement.src = `songs/${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex-1].songName
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 1;
    }
    else{
        songIndex -= 1;
    }
      
     
        audioElement.src = `songs/${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex-1].songName
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    

        audioElement.src = `songs/${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex-1].songName
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')

})