<script>
function startLoopingCountdown(durationInSeconds, loopIntervalInDays) {
  let timer = durationInSeconds;
  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timer > 0) {
      timer--;
      setTimeout(updateCountdown, 1000);
    } else {
      // Reset timer for the next loop
      timer = durationInSeconds;
      setTimeout(updateCountdown, 1000 * 60 * 60 * 24 * loopIntervalInDays);
    }
  }

  updateCountdown();
}

// Example: Start a countdown for 5 minutes, and loop every 10 days
startLoopingCountdown(5 * 60, 10);
</script>