const cat = document.getElementById("cat");
const score = document.getElementById("score");

let sc = 0;
score.innerText = sc; // 초기 점수 설정

// PC와 모바일 환경 모두에서 동작하도록 touchstart 이벤트를 추가합니다.
cat.addEventListener("mousedown", handleCatClick);
cat.addEventListener("touchstart", handleCatClick);

function handleCatClick() {
    cat.src = "/assets/img/waaaa.png";

    const audio = new Audio("/assets/pop.mp3");
    audio.play();

    sc += 1;
    score.innerText = sc;
}

// PC와 모바일 환경 모두에서 동작하도록 touchend 이벤트를 추가합니다.
cat.addEventListener("mouseup", handleCatRelease);
cat.addEventListener("touchend", handleCatRelease);

function handleCatRelease() {
    cat.src = "/assets/img/normal.png";
}
