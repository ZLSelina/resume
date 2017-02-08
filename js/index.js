~(function(){
    var musicBox=document.getElementById('music'),
        music=musicBox.getElementsByTagName('audio')[0];
    window.setTimeout(function(){
        music.play();
        musicBox.className='music musicMove';
    },1000);
    musicBox.addEventListener('click',function(){
        if(music.paused){
            music.play();
            musicBox.className='music musicMove';
        }else {
            music.pause();
            musicBox.className='music';
        }
    });
}());