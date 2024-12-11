const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const note = document.querySelector(".note");

btn.addEventListener("click", (e) => {
  const deger = input.value;

  if (deger.length !== 11 || !/^\d{3}-\d{2}-\d{4}$/.test(deger)) {
    note.textContent =
      "Hatalı SSN formatı. Lütfen 123-45-6789 formatında girin.";
    note.style.color = "red";
  } else {
    note.textContent = "SSN formatı geçerli";
    note.style.color = "green";
  }
});
