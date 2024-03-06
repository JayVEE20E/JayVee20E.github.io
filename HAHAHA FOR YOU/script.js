const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gift");
const yesBtn = document.querySelector(".yes-Btn");
const noBtn = document.querySelector(".noBTn")

yesBtn.addEventListener("click", () => {
question.innerHTML = "Aaaaaa, I like you too";
gif.src =
"https://raw.githubusercontent.com/DzareDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = math.floor(math.random() * maxX);
    const randomY = math.floor(math.random() * maxY);

    noBtn.Style.left = randomX + "px";
    noBtn.Style.top = randomY + "px";
});