fetch("https://api.thecatapi.com/v1/images/search?api_key={API_KEY}&limit=10").then((e=>e.json())).then((e=>(console.log(e),e))).catch((e=>{throw console.error("Ошибка:",e),e}));
//# sourceMappingURL=index.7dea55e4.js.map
