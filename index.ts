// 开学时间
const goSchoolTime: number = Date.parse("2025-02-16T08:00:00");
// 显示节点
const displayPosition: HTMLDivElement = document.querySelector(".time");

const updateTime: Function = (): void => {
  let seconds: number = Math.floor((goSchoolTime - Date.now()) / 1000);
  let day: number = 0, hour: number = 0, minutes: number = 0;
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
  displayPosition.textContent = `${day}天 ${hour}时 ${minutes}分 ${seconds}秒`;
}

setInterval(updateTime, 100);