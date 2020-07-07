//selecting all dom elements
const result = document.querySelector("#result");
const plength = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate");
const clipBtn = document.querySelector("#clipboard");

//Eventlisteners
clipBtn.addEventListener("click", () => {
  result.select();
  document.execCommand("copy");
  alert(result.value);
});

generateBtn.addEventListener("click", () => {
  const length = +plength.value;
  const hasUpper = uppercase.checked;
  const haslower = lowercase.checked;
  const hasnumber = numbers.checked;
  const hassymbol = symbols.checked;

  result.value = generatePass(hasUpper, haslower, hasnumber, hassymbol, length);
});

function generatePass(hasUpper, haslower, hasnumber, hassymbol, length) {
  const totalchecked = hasUpper + haslower + hasnumber + hassymbol;
  const arrayObj = [
    { upper: hasUpper },
    { lower: haslower },
    { number: hasnumber },
    { specialChar: hassymbol },
  ];
  const filtered = arrayObj.filter((item) => {
    const key = Object.keys(item);
    const items = item[key] === true;
    return items;
  });

  if (totalchecked === 0) {
    return "";
  }
  let generatePasswoed = "";
  for (let i = 0; i < length; i += totalchecked) {
    filtered.forEach((item) => {
      const key = Object.keys(item)[0];
      generatePasswoed += randomFunction[key]();
      console.log(generatePasswoed);
    });
  }
  const finalpassword = generatePasswoed.slice(0, length);
  return finalpassword;
}

const randomFunction = {
  lower: lowerCase,
  upper: upperCase,
  number: numbersG,
  specialChar: specialCharcters,
};

function lowerCase() {
  // lowercasr charcode 97-122
  return String.fromCharCode(Math.floor(Math.random() * 26) + 96);
}

//uppercase 65 to 90
function upperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 64);
}

//48 to 57
function numbersG() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function specialCharcters() {
  const strings = "[^$.|?*+()";
  return strings[Math.floor(Math.random() * strings.length)];
}
