// Get the current time and date using Day.js
const currentTime = () => {
    return dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  };
  
  // Update the current time every second
  setInterval(() => {
    document.getElementById("current-time").textContent = currentTime();
  }, 1000);
  