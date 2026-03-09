const button = document.querySelector("updateBtn");
const input = document.querySelector("headlineInput");
const cta = document.querySelector("h2");

button.addEventListener("click",()=>{
    if (input.value.trim() !=="") {
        cta.textContent = input.value;
    }
});