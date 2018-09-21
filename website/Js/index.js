var tag=["矜持是什么","性生活","性爱","性虐狂","挽回爱情","分手挽回","瞳爱情感",
        "婚姻经营","放弃婚姻","离婚原因","女神计划","夫妻",
        "男女相处","情感维系","结婚"];
var rtag=document.getElementsByClassName('tags');
function randomtag(){
    rtag[0].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[1].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[2].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[3].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[4].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[5].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[6].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[7].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[8].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[9].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[10].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[11].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[12].innerHTML=tag[Math.floor(Math.random()*tag.length)];
    rtag[13].innerHTML=tag[Math.floor(Math.random()*tag.length)];
}
var btn=document.getElementsByClassName('randomtag');
debugger;
btn.click=randomtag();