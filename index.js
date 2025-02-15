// 开学时间
var goSchoolTime = Date.parse("2025-02-16T08:00:00");
// 显示节点
var displayPosition = document.querySelector(".time");
var updateTime = function () {
    var seconds = Math.floor((goSchoolTime - Date.now()) / 1000);
    var day = 0, hour = 0, minutes = 0;
    while (seconds >= 86400) {
        seconds -= 86400;
        day += 1;
    }
    while (seconds >= 3600) {
        seconds -= 3600;
        hour += 1;
    }
    while (seconds >= 60) {
        seconds -= 60;
        minutes += 1;
    }
    displayPosition.textContent = "".concat(day, "\u5929 ").concat(hour, "\u65F6 ").concat(minutes, "\u5206 ").concat(seconds, "\u79D2");
};
setInterval(updateTime, 100);
