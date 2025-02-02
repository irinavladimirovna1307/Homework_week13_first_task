document.getElementById("birthday").addEventListener("input", function () {
  document.getElementById("error").style.display = "none"; // Скрываем ошибку при вводе
});

function calculateDays() {
  let input = document.getElementById("birthday").value;
  let resultElement = document.getElementById("result");
  let errorElement = document.getElementById("error");

  if (!input) {
    errorElement.style.display = "block"; // Показываем ошибку
    resultElement.textContent = "";
    return;
  }

  errorElement.style.display = "none"; // Скрываем ошибку при успешном вводе

  let today = new Date();
  let birthDate = new Date(input + "T00:00:00"); // Избегаем смещения времени

  // Устанавливаем день рождения на этот год
  birthDate.setFullYear(today.getFullYear());

  // Если день рождения уже прошёл в этом году, считаем до следующего года
  if (birthDate < today) {
    birthDate.setFullYear(today.getFullYear() + 1);
  }

  let diffTime = birthDate.getTime() - today.getTime();
  let daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  resultElement.textContent = `До дня рождения осталось ${daysLeft} ${getCorrectWord(
    daysLeft
  )}`;
}

function getCorrectWord(number) {
  let lastDigit = number % 10;
  let lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "дней";
  }
  if (lastDigit === 1) {
    return "день";
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return "дня";
  }
  return "дней";
}
