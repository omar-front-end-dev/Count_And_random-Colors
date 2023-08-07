const btn_Increase = document.querySelectorAll(".box #increase");
let colors = ["#00ff04", "#fded3f", "#3ffd81", "#3f6bfd", "#fd3fa4", "#3ffdfd"];

btn_Increase.forEach((item)=>{
    item.addEventListener("click", addStyleAction);
});

function addStyleAction (){
    const card = this.closest(".box");
    const paragraph = card.querySelector("#count");
    paragraph.textContent++;
    paragraph.style.color = "#8a8a8b";
    const randNumber = parseInt(Math.random() * 5)
    card.style.backgroundColor = colors[randNumber];
};