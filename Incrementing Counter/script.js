const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target"); // converted from string to number with the +
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`; // Round Up
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
