const viewportHeight = window.innerHeight;


window.addEventListener("scroll", () => {
    const body = document.body;

  const scrollHeight = body.getBoundingClientRect().top;
  const min = Math.min(0 , viewportHeight + scrollHeight)
//   console.log(scrollHeight);
  console.log(min)
//   console.log(viewportHeight)

});

