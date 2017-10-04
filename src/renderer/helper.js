export default {
  formatTime(value) {
    let seconds = Math.floor(value % 60)
    let minutes = Math.floor(value / 60)

    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    return `${minutes}:${seconds}`
  }
}
