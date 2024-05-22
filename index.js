const selectMenu = document.querySelectorAll("select");
const setContent = document.querySelector(".content");
const timeBox = document.querySelector(".timeBox");
const setAlarmButton = document.querySelector("button");
const clockRings = document.querySelector("img");
let alartTime , state = "noset";
const ringTone = new Audio("./audio/ringtoneAudio.mp3")
for (let i = 23 ; i >= 0 ; i--) {
    i = i <= 9 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend" , option);
}
for (let i = 59 ; i >=0 ; i--) {
    i = i <= 9 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend" , option);
}
setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = hour <= 9 ? "0" + hour : hour;
    minute = minute <= 9 ? "0" + minute : minute;
    second = second <= 9 ? "0" + second : second;
    timeBox.innerHTML = `${hour}:${minute}:${second}`;
    if (alartTime == `${hour}:${minute}`) {
        ringTone.play();
        ringTone.loop = true;
        clockRings.classList.add("clockRings");
    }
}, 1000);
setAlarmButton.addEventListener("click" , () => {
    if (selectMenu[0].value == "hour") {
        alert(`ساعت را انتخاب کنید`)
    } else if (selectMenu[1].value == "minute") {
        alert(`دقیقه را انتخاب کنید`)
    } else {
        checkState();
    }
});
function checkState () {
    if (state == "noset") {
        alartTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
        setAlarmButton.style.backgroundColor = "rgba(74,152,247,0.5)";
        setAlarmButton.style.color = "#000";
        setAlarmButton.innerHTML = "Clear Alarm";
        setContent.classList.add("disable");
        state = "set";
    } else {
        alartTime = ``;
        setAlarmButton.style.backgroundColor = "rgba(74,152,247,1)";
        setAlarmButton.style.color = "#fff";
        setAlarmButton.innerHTML = "Set Alarm";
        setContent.classList.remove("disable");
        ringTone.pause();
        clockRings.classList.remove("clockRings");
        state = "noset";
    }
}