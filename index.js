document.addEventListener("DOMContentLoaded", () => {
  const date = document.querySelector("#date");
  const cursor = document.querySelector("#cursor");
  const fps = 1;

  function refreshDate() {
    const now = new Date();
    const formatting = /.+?(?=\sGMT)/i;
    date.innerHTML = formatting.exec(now);
    setTimeout(() => {
      requestAnimationFrame(refreshDate);
    }, 1000 / fps);
  }

  let visible = true;

  function blink() {
    if (visible) {
      cursor.style.visibility = "hidden";
      visible = false;
    } else {
      cursor.style.visibility = "visible";
      visible = true;
    }

    setTimeout(() => {
      requestAnimationFrame(blink);
    }, 1000 / fps / 2);
  }

  refreshDate();
  blink();
});
