import"./assets/styles-51b24ce4.js";import{i as m}from"./assets/vendor-77e16229.js";const o={formEl:document.querySelector(".form"),fieldsetEl:document.querySelector("fieldset")};o.formEl.addEventListener("submit",l);function l(e){e.preventDefault();const r=Number(o.formEl.elements.delay.value),s=o.formEl.elements.state.value;i(r,s).then(t=>{m.show({progressBarColor:"rgba(0, 255, 0)",progressBar:!0,title:"show",message:"✅ Fulfilled promise in:"})}).catch(t=>{m.error({progressBarColor:"rgba(255, 0, 0)",progressBar:!0,title:"error",message:"❌ Rejected promise in:"})})}function i(e,r){return new Promise((s,t)=>{setTimeout(()=>{r==="fulfilled"?s(`${e}ms`):t(`${e}ms`)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
