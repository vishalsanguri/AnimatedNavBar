const triggers = document.querySelectorAll("li");
const back = document.querySelector(".back");
// console.log(triggers);
function handleEnter() {
  const elem = this.querySelector("div");
  elem.classList.add("trigger");

  setTimeout(() => {
    elem.classList.contains("trigger") && elem.classList.add("trigger-active");
  }, 150);
  const dimen = elem.getBoundingClientRect();
  const width = dimen.width;
  const height = dimen.height;
  const top = dimen.top;
  const left = dimen.left;
  back.classList.add("back-trigger");
  back.style.width = `${width}px`;
  back.style.height = `${height}px`;
  scrolly = window.scrollY;
  scrollx = window.scrollX;
  back.style.transform = `translate(${left}px,${top + scrolly}px)`;
}
function handleLeave() {
  const elem = this.querySelector("div");
  elem.classList.remove("trigger");
  elem.classList.remove("trigger-active");
  back.classList.remove("back-trigger");
  //   console.log(this);
}

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", handleEnter);
  trigger.addEventListener("mouseleave", handleLeave);
});
