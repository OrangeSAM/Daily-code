import about from  './about.md'

if (about) {
    let ele = document.getElementById('app')
    ele.innerHTML = about
}