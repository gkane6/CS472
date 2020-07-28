/*

A field for users to enter large (multi-line) amounts of text.
It should be 4 rows by 30 columns in size.
Wrap it in a bordered field set box with the label "Text".
Add a second bordered field set box labeled "Decoration" that contains the following controls:
A button labeled: Bigger Decorations!
A checkbox labeled "Bling"
NOTE: Controls are sometimes used in forms; but you must not use the form tag on your page.
Modify your JS code so that when the user clicks "Bigger Decorations!", the text in the text area will get larger.

Make sure your text area has an id attribute so your JS code can talk to it.
Modify your JS function so that it now changes the text area's font size to 24pt .
Use proper units, such as "4em", and proper naming conventions.
Add an onchange on the checkbox that calls a function that pops up an alert.
Modify your new function to set the text area's font weight to bold.
You can see if a checkbox is checked by examining its checked attribute. (Give it an id.)
When the box is unchecked, the font weight should go back to normal.
Once the bold part works, add the following styles to the text when the box is checked:
change its color to green
underline the text (this is the CSS text-decoration property)

*/

window.onload = () => {
  const biggerButton = document.getElementById("bigger");
  const blinButton = document.getElementById("bling");
  const pigButton = document.getElementById("piglatin");
  const textAre = document.getElementById("textarea");
  const malko = document.getElementById("malc");
  textAre.style.fontSize = "12pt";

  const biggerDeco = () => {
    setInterval(() => {
      var style = window
        .getComputedStyle(textAre, null)
        .getPropertyValue("font-size");
      var fontSize = parseInt(style);
      console.log(style);
      console.log(fontSize);
      const newFont = fontSize + 2;
      // now you have a proper float for the font size (yes, it can be a float, not just an integer)
      textAre.style.fontSize = `${newFont}px`;
    }, 500);
  };

  const onBling = () => {
    if (blinButton.checked) {
      textAre.style.fontWeight = "bold";
      textAre.style.color = "green";
      textAre.style.textDecorationLine = "underline";
      console.log(document.getElementsByTagName("body")[0]);
      document.getElementsByTagName("body")[0].style.backgroundImage =
        "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    } else {
      textAre.style.fontWeight = "normal";
      document.getElementsByTagName("body")[0].style.background = "white";
    }
  };

  const onPig = () => {
    textA = textAre.value.split(" ").filter((elm) => {
      return elm.length > 0;
    });
    console.log(textA);
    const vowels = ["e", "u", "i", "o", "a", "y"];
    const pigWrds = textA.map((elm) => {
      if (vowels.includes(elm[0].toLowerCase())) {
        return elm + "ay";
      } else {
        return elm.substring(1) + elm[0] + "ay";
      }
    });
    console.log(pigWrds);
    textAre.value = pigWrds.join(" ");
  };

  const onMalkovich = () => {
    textA = textAre.value.split(" ").filter((elm) => {
      return elm.length > 0;
    });
    const malk = textA.map((elm) => {
      return elm.length >= 5 ? "Malkovich" : elm;
    });
    textAre.value = malk.join(" ");
  };

  biggerButton.onclick = biggerDeco;
  blinButton.onchange = onBling;
  pigButton.onclick = onPig;
  malko.onclick = onMalkovich;
};
