document.getElementById("scroller").onclick = function (){
    document.getElementById("scroller").style.backgroundColor = 'black';
    document.getElementById("cont").style.backgroundColor = 'white';
    document.getElementById("scroller2").style.display = 'block';
    document.getElementById("scroller").style.display = 'none';
    document.getElementById("body").style.backgroundImage = 'url(photos/blbg.png)';
    document.getElementById("logo").style.color = 'white';
    document.getElementById("heh1").style.color = 'white';
    document.getElementById("heh2").style.color = 'white';
    document.getElementById("heh3").style.color = 'white';
    document.getElementById("frontenddeveloper").style.color = 'white';
    document.getElementById("about").style.color = 'white';
    document.getElementById("myprojects").style.color = 'white';
    document.getElementById("tutorials").style.color = '#7aa6ff';
    document.getElementById("toggler").style.backgroundColor = 'white';



}

document.getElementById("scroller2").onclick = function (){
    document.getElementById("scroller").style.display = 'block';
    document.getElementById("scroller2").style.display = 'none';
    document.getElementById("cont").style.backgroundColor = 'black';
    document.getElementById("scroller").style.backgroundColor = 'white';
    document.getElementById("body").style.backgroundImage = 'url(photos/background.png)';
    document.getElementById("logo").style.color = 'black';
    document.getElementById("heh1").style.color = 'black';
    document.getElementById("heh2").style.color = 'black';
    document.getElementById("heh3").style.color = 'black';
    document.getElementById("frontenddeveloper").style.color = 'black';
    document.getElementById("about").style.color = '#807e7e';
    document.getElementById("myprojects").style.color = 'black';
}

