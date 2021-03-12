// script timer
window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    // timer

    let deadline = '2021-03-13';
    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t / (1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }

    }

    function setClock(id, endtime){
        
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock(){
            
            let t = getTimeRemaining(endtime);

            if (t.total > 0){
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            }else{
                hours.textContent = "0";
                minutes.textContent = "0";
                seconds.textContent = "0";
                clearInterval(timeInterval);
            }

        }
    }
setClock('timer', deadline);
});