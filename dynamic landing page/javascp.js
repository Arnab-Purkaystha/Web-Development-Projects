const time = document.getElementById('time'),
    greet = document.getElementById('greet'),
    namee = document.getElementById('namee'),
    focuss = document.getElementById('focuss');
const showAMPM = true;
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // Am or PM
    const ampm = h >= 12 ? 'PM' : 'AM'
    //12 hr format
    h = h % 12 || 12;
    time.innerHTML = `${h}<span>:</span>${addzero(m)}<span>:</span>${addzero(s)} ${showAMPM ? ampm : ''}`;
    setTimeout(startTime, 1000);

    function addzero(i) {
        return (parseInt(i, 10) < 10 ? '0' : '') + i; // add zero in front of numbers < 10

    }

}
function setbg() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('morn.jpg')";
        document.body.style.backgroundSize = "1536px 721px";
        document.body.style.backgroundRepeat = 'no-repeat';
        greet.textContent = 'Good Morning';
        document.body.style.color = 'white';
        document.getElementById('focuss').style.color = 'black';
        document.getElementById('focuss').style.opacity = '0.95';
    }
    else if (hour < 19) {
        //evening
        document.body.style.backgroundImage = "url('afternoon.jpg')";
        document.body.style.backgroundSize = "1536px 721px";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.color = 'white';
        greet.textContent = 'Good Afternoon';
    }
    else {
        // night
        document.body.style.backgroundImage = "url('night.jpg')";
        greet.textContent = 'Good evening';
        document.body.style.backgroundSize = "1536px 721px";
        // document.body.style.backgroundSize = "1536px 722px";
        // document.body.style.display= 'flex';
        // document.body.style.backgroundSize= 'contain';
        document.body.style.backgroundRepeat = 'no-repeat';
        // document.body.style.backgroundPosition= 'center';
        document.body.style.color = 'white';

    }

}
// setName
function setname(e) {
    if (e.type == 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('namee', e.target.innerText)
            namee.blur();
        }

    } else {
        localStorage.setItem('namee', e.target.innerText)
    }

}
//getname
function getname() {
    if (localStorage.getItem('namee') == null) {
        namee.textContent = '[Enter Name]';
    }
    else {
        namee.textContent = localStorage.getItem('namee')
    }
}
//Getfocus
function getFocus() {
    if (localStorage.getItem('focuss') == null) {
        focuss.textContent = '[Enter Focus]';
    }
    else {
        namee.textContent = localStorage.getItem('focuss')
    }
}
namee.addEventListener('keypress', setname)
namee.addEventListener('blur', setname)

startTime();
setbg();
getname();
getFocus();
