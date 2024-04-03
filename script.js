function fun(element) {
  const country = document.getElementById(element);
  return country;
}

function sendCheat(country, text_1, text_2) {
  country.options[0].text = text_1;
  country.options[1].text = text_2;
  country.options[1].value = text_2;
}

function closee(element) {
  document.querySelector(element).style.display = "none";
}

let count = 0;
const verify = document.querySelector("#btn").addEventListener("click", () => {
  count++;

  const country_1 = fun("country_1");
  const country_2 = fun("country_2");
  const country_3 = fun("country_3");
  const country_4 = fun("country_4");
  const country_5 = fun("country_5");
  const country_6 = fun("country_6");
  const country_7 = fun("country_7");
  const Cheat = document.querySelector(".Cheat");

  if (count === 3) {
    Cheat.style.display = "inline-block";
  }
  const verify_input =
    country_1.value !== "" &&
    country_2.value !== "" &&
    country_3.value !== "" &&
    country_4.value !== "" &&
    country_5.value !== "" &&
    country_6.value !== "" &&
    country_7.value !== "";
  const correct_answer =
    country_1.value === "I" &&
    country_2.value === "told" &&
    country_3.value === "you" &&
    country_4.value === "I'm not" &&
    country_5.value === "good" &&
    country_6.value === "at" &&
    country_7.value === "geography";

  if (verify_input) {
    if (correct_answer) {
      document.querySelector(".hidden_1").style.display = "flex";
    } else {
      document.querySelector(".hidden_3").style.display = "flex";
    }
  } else {
    document.querySelector(".hidden_2").style.display = "flex";
  }

  country_1.selectedIndex = 0;
  country_2.selectedIndex = 0;
  country_3.selectedIndex = 0;
  country_4.selectedIndex = 0;
  country_5.selectedIndex = 0;
  country_6.selectedIndex = 0;
  country_7.selectedIndex = 0;
});



const Cheat = document.querySelector("#Cheat").addEventListener("click", () => {
  sendCheat(fun("country_1"), "Click Me", "I");
  sendCheat(fun("country_2"), "Click Me", "told");
  sendCheat(fun("country_3"), "Click Me", "you");
  sendCheat(fun("country_4"), "Click Me", "I'm not");
  sendCheat(fun("country_5"), "Click Me", "good");
  sendCheat(fun("country_6"), "Click Me", "at");
  sendCheat(fun("country_7"), "Click Me", "geography");

  remove(fun("country_1"));
  remove(fun("country_2"));
  remove(fun("country_3"));
  remove(fun("country_4"));
  remove(fun("country_5"));
  remove(fun("country_6"));
  remove(fun("country_7"));
});

function remove(country) {
  for (let i = 2; i < 8; i++) {
    country.options[i].style.display = "none";
  }
}
