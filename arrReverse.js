let number = prompt("The any number");
function reverseNumber(number) {
  num = Array.from(number);
  newNum = num.reverse();
  reverse = newNum.join("");
  return reverse;
}

console.log(reverseNumber(number));
