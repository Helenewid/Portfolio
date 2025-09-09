


document.addEventListener("DOMContentLoaded", () => {
  const welcomeEl = document.getElementById("welcome-text");

  const greetings = [
    "Welcome",
    "Bienvenue",
    "Velkommen",
    "Willkommen",
    "Bienvenido",
    "Welcome",
    "환영합니다",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 120;

  function typeGreeting() {
    const currentWord = greetings[wordIndex];
    const visibleText = currentWord.slice(0, charIndex);
    welcomeEl.textContent = visibleText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeGreeting, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeGreeting, typingSpeed / 2);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % greetings.length;
      }
      setTimeout(typeGreeting, isDeleting ? 1000 : 1200);
    }
  }

  typeGreeting();
});
