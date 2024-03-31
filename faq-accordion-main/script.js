const plusIconToggle = document.querySelectorAll(".toggle");

console.log(plusIconToggle.length);

for (let i = 0; i < plusIconToggle.length; i++) {
  const icon = plusIconToggle[i];
  icon.addEventListener("click", function () {
    const answer = this.parentElement.nextElementSibling; 
    answer.classList.toggle("visible");
    if (icon.classList.contains("plus")) {
      icon.classList.add("minus");
      icon.classList.remove("plus");
    } else {
      icon.classList.add("plus");
      icon.classList.remove("minus");
    }
  });
}
