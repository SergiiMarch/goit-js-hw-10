import"./assets/styles-51b24ce4.js";import{f as p,i}from"./assets/vendor-77e16229.js";const t={inputEl:document.getElementById("datetime-picker"),startBtn:document.querySelector("button[data-start]"),spanDay:document.querySelector("span[data-days]"),spanHours:document.querySelector("span[data-hours]"),spanMinutes:document.querySelector("span[data-minutes]"),spanSecond:document.querySelector("span[data-seconds]")};t.startBtn.disabled=!0;let d=null;console.log(d);const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<=new Date?(i.error({progressBarColor:"rgba(255, 0, 0)",progressBar:!0,title:"attention",message:"Please choose a date in the future"}),t.startBtn.disabled=!0):(d=n,t.startBtn.disabled=!1)}};p("#datetime-picker",f);function h(e){const o=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:r,minutes:l,seconds:m}}t.startBtn.addEventListener("click",y);function s(e){return String(e).padStart(2,"0")}function y(){t.inputEl.disabled=!0,t.startBtn.disabled=!0;const e=setInterval(()=>{const a=d-new Date;if(a<0){t.inputEl.disabled=!1,t.startBtn.disabled=!1,clearInterval(e),i.info({title:"Hello",message:"timer reset!"});return}else{const{days:u,hours:c,minutes:o,seconds:r}=h(a);t.spanDay.textContent=s(u),t.spanHours.textContent=s(c),t.spanMinutes.textContent=s(o),t.spanSecond.textContent=s(r)}},1e3)}
//# sourceMappingURL=commonHelpers.js.map
