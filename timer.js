class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const time = Math.max(this.targetDate - Date.now(), 0);
      const { days, hours, mins, secs } = this.getTimeComponents(time);
      this.updateValues({ days, hours, mins, secs });
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  updateValues({ days, hours, mins, secs }) {
    document.querySelector(`${this.selector} [data-value="days"]`).textContent =
      days;
    document.querySelector(
      `${this.selector} [data-value="hours"]`
    ).textContent = hours;
    document.querySelector(`${this.selector} [data-value="mins"]`).textContent =
      mins;
    document.querySelector(`${this.selector} [data-value="secs"]`).textContent =
      secs;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 12, 2021"),
});

timer.start();
