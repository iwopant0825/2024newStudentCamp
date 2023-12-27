const cat = document.getElementById("cat");
const score = document.getElementById("score");

let sc = 0;
cat.addEventListener("mousedown", () => {
    cat.src = "/assets/img/waaaa.png";

    const audio = new Audio("/assets/pop.mp3");
    audio.play();

    sc += 1;
    score.innerText = sc;
});

cat.addEventListener("mouseup", () => {
    cat.src = "/assets/img/normal.png";
});
