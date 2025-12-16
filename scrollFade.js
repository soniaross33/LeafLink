export function initScrollFades(scrollEl, wrapperEl) {
  function updateFades() {
    const atTop = scrollEl.scrollTop <= 1;
    const atBottom =
      scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 1;

    wrapperEl.classList.toggle("show-top", !atTop);
    wrapperEl.classList.toggle("show-bottom", !atBottom);
  }

  scrollEl.addEventListener("scroll", updateFades);
  window.addEventListener("resize", updateFades);

  // run once on init
  updateFades();
}
