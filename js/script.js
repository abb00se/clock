let secondArrow = document.querySelector('.s'),
 minuteArrow = document.querySelector('.m')
 hourArrow  = document.querySelector('.h')
 hourNumber  = document.querySelector('.hours')
 minutesNumber = document.querySelector('.minutes')

 function clock(){
    let time = new Date(),
      seconds = time.getSeconds() * 6,
      minutes = time.getMinutes() * 6,
      hours = time.getHours() * 30;
 
      secondArrow.style = `transform: rotate(${seconds}deg); transition 1s linear;`
      minuteArrow.style = `transform: rotate(${minutes}deg); transition 1s linear;`
      hourArrow.style = `transform: rotate(${hours}deg); transition 1s linear;`

      hourNumber.innerHTML = time.getHours() < 10 ? '0' +  time.getHours() : time.getHours()
      minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

        setTimeout(() => clock(),1000)
 }
 clock()    

 let links = document.querySelectorAll('.tabsItem'),
        tabs = document.querySelectorAll('.tabsContentItem');

for(let i = 0; i < links.length;i++){
    links[i].addEventListener('click', function(){
        for(let x = 0; x < tabs.length;x++){
            tabs[x].classList.remove('active')
            links[x].classList.remove('active')

        }
        links[i].classList.add('active')
        tabs[i].classList.add('active')
    })

    
}

let btn = document.querySelector('.stopwatch__btn')
let tabSpan = document.querySelector('.tabsLink__span')

// clearInterval

let watchS = document.querySelector('.stopwatch__seconds')
let watchM = document.querySelector('.stopwatch__minutes')
let watchH = document.querySelector('.stopwatch__hours')

function secund(sec, min, h, btn) {
    if(btn.innerHTML == 'stop') {
        if(sec == 60) {
            sec = 0
            if(min == 60) {
                min = 0
            } else {
                min++
                watchM.innerHTML = min
            }
        } else {
            sec++
            watchS.innerHTML = sec
        }
        
        setTimeout(() => {
            secund(sec, min, h, btn)
        }, 1000);
    }
}



btn.addEventListener('click', function() {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop' 
        tabSpan.classList.add('active')
        secund(0, 0, 0, btn)
    } else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        tabSpan.classList.add('active_clear')
        // clearInterval()
    }else{
        btn.innerHTML == 'clear'  
        btn.innerHTML = 'start'
        tabSpan.classList.remove('active')
        tabSpan.classList.remove('active_clear`')
        watchS.innerHTML = 0
        watchM.innerHTML = 0
        watchH.innerHTML = 0
    }  
    
   


})

