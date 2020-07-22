var arrr;
var fawelioke = ["á", "Á", "é", "É", "ẹ́", "Ẹ́", "í", "Í", "ó", "Ó", "ọ́", "Ọ́", "ú", "Ú", "á", "Á", "é", "É", "ẹ́", "Ẹ́", 
                    "í", "Í" , "ó", "Ó", "ọ́", "Ọ́", "ú", "Ú"];

var faweliarin = ["a", "A", "e", "E", "ẹ", "Ẹ", "I" ,"I", "o", "O." ,"ọ", "Ọ", "u", "U",
                    "a", "A", "e", "ẹ", "E", "Ẹ", "i", "I",  "o", "ọ", "O", "Ọ", "u", "U"];

var fawelisale = ["à", "À", "è", "È", "ẹ̀", "Ẹ̀", "ì", "Ì", "ò", "Ò", "ọ̀", "Ọ̀", "ù", "Ù", "à", "À", "è",
                        "È" ,"ẹ̀", "Ẹ̀", "ì", "Ì", "ò", "Ò", "ọ̀", "Ọ̀", "ù", "Ù"];

var nasalisale = ["ǹ", "Ǹ", "m̀", "M̀", "ǹ", "Ǹ", "m̀", "M̀", "̀"];

var nasaloke = ["ń", "Ń", "ḿ", "Ḿ", "ń", "Ń", "ḿ", "Ḿ", "́"];

var soundstoplay = [];


function resplitString(newstring) {
    document.getElementById('playtext').innerHTML = "Loading... Please wait....";

    var string = newstring;
    string = string.toLowerCase();
    arrr = [];
    if(string.length >0){
    var splitters = ["gb","GB","b","B","d","D","f","F","g","G","j","J","k","K","l","L","m","n","N","M","p","P","r","R","ṣh","Ṣh","s","S","ṣ","Ṣ","t","T","w","W","y","Y"];
    var list = [string];
    
    for(var i=0, len=splitters.length; i<len; i++) {
        traverseList(list, splitters[i], 0);
    }
    
    arrr = (flatten(list));
  console.log(arrr);
    document.getElementById('playtext').innerHTML = "Click to play Sound";
    document.getElementById('playhide').style.display="inline";
    
}
else{

    alert('Invalid word');

}

}

function helpsplitString() {
    document.getElementById('playtext').innerHTML = "Loading... Please wait....";
    var string = document.getElementById('search-input').value;
    string = string.toLowerCase();
    if(string.length >0){
   
    arrr = [];
    arrr = string.split("");
    console.log(arrr);
    document.getElementById('playtext').innerHTML = "Click to play Sound";
    document.getElementById('playhide').style.display="inline";
    } 
    
else{

    alert('Invalid word');

}
}

function splitString() {
    document.getElementById('playtext').innerHTML = "Loading... Please wait....";

    var string = document.getElementById('search-input').value;
    string = string.toLowerCase();
    arrr = [];
    if(string.length >0){
    var splitters = ["gb","GB","b","B","d","D","f","F","g","G","j","J","k","K","l","L","m","n","N","M","p","P","r","R","ṣh","Ṣh","s","S","ṣ","Ṣ","t","T","w","W","y","Y"," "];
    var list = [string];
    for(var i=0, len=splitters.length; i<len; i++) {
        traverseList(list, splitters[i], 0);
    }
    
    arrr = (flatten(list));
    if(list.length > 1){
   
   
    if(arrr[arrr.length-1].length>2){
        console.log("Caught the error");
        resplitString(arrr[1]);
    }
    else{
    console.log(arrr);
    document.getElementById('playtext').innerHTML = "Click to play Sound";
    document.getElementById('playhide').style.display="inline";
    }
}
else
{
console.log(arrr);
if(arrr[arrr.length-1].length>2){
    console.log("Caught the error");
    resplitString(arrr[arrr.length-1]);

}
else{
    console.log(arrr);
document.getElementById('playtext').innerHTML = "Click to play Sound";
document.getElementById('playhide').style.display="inline";
}
}

}
else{

    alert('Invalid word');

}

}



traverseList = function(list, splitter, index) {
    if(list[index]) {
        if((list.constructor !== String) && (list[index].constructor === String))
            (list[index] != list[index].split(splitter)) ? list[index] = list[index].split(splitter) : null;
        (list[index].constructor === Array) ? traverseList(list[index], splitter, 0) : null;
        (list.constructor === Array) ? traverseList(list, splitter, index+1) : null;    
    }
}

flatten = function(arr) {
    return arr.reduce(function(acc, val) {
        return acc.concat(val.constructor === Array ? flatten(val) : val);
    },[]);
}


function checkTone(splitted, number){
    number = parseInt(number);

    if(fawelioke.includes(splitted)){

        soundstoplay[number] = "audio/Mih.mp3";
   
    }    
    else if(fawelisale.includes(splitted)){

        soundstoplay[number] = "audio/Doh.mp3";
   
    }
    else if(faweliarin.includes(splitted)){

        soundstoplay[number] = "audio/Reh.mp3";

    }
    else if(nasalisale.includes(splitted)){

        soundstoplay[number] = "audio/Doh.mp3";
   

    }
    else if(nasaloke.includes(splitted)){

        soundstoplay[number] = "audio/Mih.mp3";
   
    }

}

function playSound(){
    soundstoplay = [];
    for (i = 0; i < arrr.length; i++) {
       
        if(arrr[i].length >0)
        {
            var j = i+1;
            if(j<=arrr.length-1){
                if(nasaloke.includes(arrr[j])){
                    i = j;
                    console.log(arrr[i]);
                    checkTone(arrr[i], i);
    
                }
                else if(nasalisale.includes(arrr[j])){
                    i = j;
                    console.log(arrr[i]);
                    checkTone(arrr[i], i);

                }
                else{
                    console.log(arrr[i]);
                    checkTone(arrr[i], i); 
                }
            }else{
                console.log(arrr[i]);
                checkTone(arrr[i], i); 

            }
                //Do some stuff here
         }
        else
        {
        
            soundstoplay[i] = "";

        }
    
    }

    soundstoplay = soundstoplay.filter(Boolean);

    console.log(soundstoplay);

    playAllSOund();
} 


function myFunction() {
    document.getElementById('playtext').innerHTML = "";
    document.getElementById('playhide').style.display="none";
 
}
function playAllSOund(){
    var start = true;
    var audio = new Audio(),
    i = 0;
    var playlist = soundstoplay;
    if(playlist.length !=1){
    console.log(playlist);
    audio.addEventListener('ended', function () {
  if(start){
    i = ++i < playlist.length ? i : 0;
    console.log(i);
    audio.src = playlist[i];
    audio.play();

 if(i== playlist.length-1){
      start = false;
  }  
}
}, true);


audio.volume = 0.5;
audio.loop = false;
audio.src = playlist[0];
audio.play();
}
else{
    audio.volume = 0.5;
    audio.loop = false;
    audio.src = playlist[0];
    audio.play();  
}

}
  