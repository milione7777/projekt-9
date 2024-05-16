// завдання 1
function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(["Html", "CSS", "Java", "JavaScript", "Python"]);

// завдання 2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");

  const numberOfWords = words.length;

  return numberOfWords * pricePerWord;
}

const message = "Замовлення гравіювання";
const pricePerWord = 10;
console.log(calculateEngravingPrice(message, pricePerWord));

// завдання 3
function findLongestWord(string) {
  const words = string.split(" ");

  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(
  findLongestWord(
    "сонце вишня олівець книга море небо яблуко радість квітка стілець"
  )
);

// завдання 4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

console.log(formatString("Цей рядок містить менше сорока символів."));
console.log(
  formatString(
    "Цей рядок є дуже довгим і перевищує сорок символів, тому він буде обрізаний."
  )
);

// завдання 5
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
    return true;
  }
  return false;
}
console.log(checkForSpam("This is a great sale!"));
console.log(checkForSpam("Get your FREE SPAM now!"));
console.log(checkForSpam("Hello, how are you?"));

// завдання 6

let numbers = [];
let input;

while (true) { 
  input = prompt("Введіть число (натисніть Cancel для завершення):");

  if (input === null) {
    break;
  }

  const number = Number(input);
  if (!isNaN(number)) {
    numbers.push(number);
  } else {
    alert("Будь ласка, введіть коректне число");
  }
}

let total = 0;
if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Загальна сума чисел дорівнює ${total}`);
} else {
  alert("Масив порожній. Немає чисел для підсумку.");
}


// завдання 7
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
      return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }
  
  if (!isLoginUnique(allLogins, login)) {
      return 'Такий логін уже використовується!';
  }
  
  allLogins.push(login);
  return 'Логін успішно доданий!';
}

const logins = ['user1', 'admin', 'guest'];

console.log(addLogin(logins, 'user'));
console.log(addLogin(logins, 'admin'));
console.log(addLogin(logins, 'a')); 
console.log(addLogin(logins, 'newUser123'));