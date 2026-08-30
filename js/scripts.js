
const mainContainer = document.querySelector('.container');
//criar titulo
const titulo = document.createElement('h1');
titulo.textContent = 'Cronometro Full JS';
mainContainer.appendChild(titulo);
//criar section timer
const sectionTimer = document.createElement('section');
sectionTimer.classList.add('timer');
mainContainer.appendChild(sectionTimer);
//criar conteudos do cronometro
const timeMinutes = document.createElement('p');
timeMinutes.classList.add('time');
timeMinutes.setAttribute('id', 'minutes');
timeMinutes.textContent = '00';

const separator1 = document.createElement('p');
separator1.classList.add('separator');
separator1.textContent = ':';

const timeSeconds = document.createElement('p');
timeSeconds.classList.add('time');
timeSeconds.setAttribute('id', 'seconds');
timeSeconds.textContent = '00';

const separator2 = document.createElement('p');
separator2.classList.add('separator');
separator2.textContent = ':';

const timeMilliseconds = document.createElement('p');
timeMilliseconds.classList.add('time');
timeMilliseconds.setAttribute('id', 'milliseconds');
timeMilliseconds.textContent = '000';

sectionTimer.appendChild(timeMinutes);
sectionTimer.appendChild(separator1);
sectionTimer.appendChild(timeSeconds);
sectionTimer.appendChild(separator2);
sectionTimer.appendChild(timeMilliseconds);

//criar section buttons
const sectionButtons = document.createElement('section');
sectionButtons.classList.add('buttons');
mainContainer.appendChild(sectionButtons);

//criar botoes
const startBtn = document.createElement('button');
startBtn.classList.add('btn');
startBtn.setAttribute('id', 'startBtn');
startBtn.textContent = 'Start';

const pauseBtn = document.createElement('button');
pauseBtn.classList.add('btn');
pauseBtn.setAttribute('id', 'pauseBtn');
pauseBtn.textContent = 'Pause';

const resumeBtn = document.createElement('button');
resumeBtn.classList.add('btn');
resumeBtn.setAttribute('id', 'resumeBtn');
resumeBtn.textContent = 'Resume';

const resetBtn = document.createElement('button');
resetBtn.classList.add('btn');
resetBtn.setAttribute('id', 'resetBtn');
resetBtn.textContent = 'Reset';

sectionButtons.appendChild(startBtn);
sectionButtons.appendChild(resumeBtn);
sectionButtons.appendChild(pauseBtn);
sectionButtons.appendChild(resetBtn);

//implementaçao do projeto
let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);


function startTimer(){

    interval = setInterval(() => {

        if(!isPaused){
            milliseconds += 10;

            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }
            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            timeMilliseconds.textContent = formatMilliseconds(milliseconds);
            timeSeconds.textContent = formatTime(seconds);
            timeMinutes.textContent = formatTime(minutes);
        }   
    }, 10)

    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
}

function resumeTimer(){
    isPaused = false;
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isPaused = false;

    timeMinutes.textContent = '00';
    timeSeconds.textContent = '00';
    timeMilliseconds.textContent = '000';

    startBtn.style.display = 'block';
    resumeBtn.style.display = 'none';
    pauseBtn.style.display = 'none';
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, '0') : time
}