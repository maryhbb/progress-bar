// const viewportHeight = window.innerHeight;

// window.addEventListener("scroll", () => {
//     const body = document.body;

//   const scrollHeight = body.getBoundingClientRect().top;
//   const min = Math.min(0 , viewportHeight + scrollHeight)
// //   console.log(scrollHeight);
//   console.log(min)
// //   console.log(viewportHeight)

// });

const progressEl = document.querySelector(".progressbar");

const onScroll = () => {
  const scrolled = window.scrollY;
  //   console.log(scrolled);

  const scrollHeight = document.documentElement.scrollHeight;
  //  console.log(scrollHeight)

  const viewportHeight = window.innerHeight;
  // console.log(viewportHeight);

  const scrollable = scrollHeight - viewportHeight;
//   console.log(scrollable);

  const scrolledInPercent = (scrolled * 100) / scrollable;
  console.log(scrolledInPercent);

  progressEl.style.backgroundImage = `linear-gradient(to right, red ${scrolledInPercent}%, transparent ${scrolledInPercent}%)`;
};

window.addEventListener("scroll", onScroll);
onScroll();
