const labels = document.querySelectorAll(".form-control label"); // node list

labels.forEach((label) => {
  label.innerHTML = label.innerText // we have the inner text
    .split("") // split it into an array, each letter on its own item in the array
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    ) // mapping to create an array with span around it
    .join(""); // return back to a string
});
