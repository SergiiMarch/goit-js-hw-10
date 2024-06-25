import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  inputEl: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  spanDay: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSecond: document.querySelector('span[data-seconds]'),
};

//Робимо кнопку не активною
refs.startBtn.disabled = true;

//Змінна для зберігання вибраної дати користовачем
let userSelectedDate = null;
console.log(userSelectedDate);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.error({
        progressBarColor: 'rgba(255, 0, 0)',
        progressBar: true,
        title: 'attention',
        message: 'Please choose a date in the future',
      });
      refs.startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      refs.startBtn.disabled = false;
    }
  },
};

//Викликаю бібліотеку
flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

refs.startBtn.addEventListener('click', hundlerClick);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function hundlerClick() {
  refs.inputEl.disabled = true;
  refs.startBtn.disabled = true;

  const timerId = setInterval(() => {
    const dateNow = new Date();
    const timerClock = userSelectedDate - dateNow;

    if (timerClock < 0) {
      refs.inputEl.disabled = false;
      refs.startBtn.disabled = false;
      clearInterval(timerId);
      iziToast.info({
        title: 'Hello',
        message: 'timer reset!',
      });
      return;
    } else {
      const { days, hours, minutes, seconds } = convertMs(timerClock);
      refs.spanDay.textContent = addLeadingZero(days);
      refs.spanHours.textContent = addLeadingZero(hours);
      refs.spanMinutes.textContent = addLeadingZero(minutes);
      refs.spanSecond.textContent = addLeadingZero(seconds);
    }
  }, 1000);
}
