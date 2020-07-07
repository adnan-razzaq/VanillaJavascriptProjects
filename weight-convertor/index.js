const output = document.getElementById("output");
output.style.visibility = "hidden";
document.getElementById("weight").addEventListener("input", (e) => {
  output.style.visibility = "visible";
  const lbs = e.target.value;
  document.getElementById("grams-output").innerHTML = lbs / 0.0022046;
  document.getElementById("Kilograms-output").innerHTML = lbs / 2.2046;
  document.getElementById("ounces-output").innerHTML = lbs * 16;
});
