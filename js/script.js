window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    let hideTabContent = (a = 1) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent();

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide'); 
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', () => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer 

    let deadLine = '2020-07-02'; // Создаем переменную в которой указываем конечную дату

    function getTimeRemaning(endtime) {   // функция для определания разницы между конечной и текущей датой
        let nowDate = new Date();
        nowDate.setHours(nowDate.getHours() + 3);  // Добавляем 3 часа что бы было московское время
        
        let t = Date.parse(endtime) - Date.parse(nowDate), 
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaning(endtime);
            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else { hours.textContent = t.hours;}

            if (t.minutes < 10) {
                hours.textContent = '0' + t.minutes;
            } else {minutes.textContent = t.minutes;}

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else { seconds.textContent = t.seconds;}
            
            if (t.total <= 0) {
                 clearInterval(timeInterval);
            }
        }    
    }

    setClock('timer', deadLine);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');
            


    let modal = {
        showModal: function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden'; // при открытии модального окна запрещает "скролить" страницу
            },
        closeModal: function () {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
    
    };
      

    for (let i = 0; i < descriptionBtn.length; i++) { 
        descriptionBtn[i].addEventListener('click', modal.showModal);
    };

    more.addEventListener('click', modal.showModal);
    close.addEventListener('click', modal.closeModal);

    // class Options {
    //     constructor (height, width, background, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.background = background;
    //         this.fontSize = fontSize;
    //         this.textAlign = textAlign;
    //     }
    //     addNewDiv() {
    //         let newDiv = document.createElement('div');
    //         newDiv.innerHTML = 'Ну это Жека синьер ДЖИЭС разработчик осваивает ЕС6';
    //         document.body.append(newDiv);
    //         console.log(this.height);
    //         newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.background}; fontSize: ${this.fontSize}; textAlign: ${this.textAlign};`;
    //      }
    // }

    // let newDiv = new Options (300, 300, '#00FFFF', 15, 'center');
    // newDiv.addNewDiv();


});
 