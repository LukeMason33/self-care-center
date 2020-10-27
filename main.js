var recieveMessageButton = document.querySelector(".recieve-message");
var meditationImage = document.querySelector(".meditate-img");
var displayedMessage = document.querySelector(".recieved-message");
var affirmation = document.querySelector("#affirmation");
var mantra = document.querySelector("#mantra");
var clearButton = document.querySelector(".clear-message");
var createOwnButton = document.querySelector(".create-own");
var displayForm = document.querySelector(".create-own-message");
var submitButton = document.querySelector(".submit");
var usersMessage = document.querySelector(".user-message");

var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices.",
];

var mantras = [
"Breathing in, I send myself love.",
"Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather."
];

recieveMessageButton.addEventListener("click", showMessage);
clearButton.addEventListener("click", clearMessage);
createOwnButton.addEventListener("click", showOwnForm);
submitButton.addEventListener("click", displayCustomMessage);

function showMessage() {
  if (mantra.checked === false && affirmation.checked === false) {
    alert("If you want to display a message, choose a choice below.")
  }
  else { showMessageClearButton();
  grabMessage();
  }
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function grabMessage (){
  if (mantra.checked) {
    displayedMessage.innerText = `${mantras[getRandomIndex(mantras)]}`
  }
  else if (affirmation.checked){
    displayedMessage.innerText = `${affirmations[getRandomIndex(affirmations)]}`
  }
};

function clearMessage() {
  showImage();
};

function showOwnForm() {
  displayForm.classList.remove("hidden");
  recieveMessageButton.classList.add("hidden");
  usersMessage.value = null;
  showImage();

};

function showMessageClearButton() {
  meditationImage.classList.add("hidden");
  displayedMessage.classList.remove("hidden");
  clearButton.classList.remove("hidden");
};

function showImage() {
  meditationImage.classList.remove("hidden");
  displayedMessage.classList.add("hidden");
  clearButton.classList.add("hidden");
};

function exitForm() {
  showMessageClearButton();
  displayForm.classList.add("hidden");
  recieveMessageButton.classList.remove("hidden");
}

function displayCustomMessage() {
  if (mantra.checked === false && affirmation.checked === false) {
    alert("If you want to display a message, choose a choice below.");
  }
  else {
    event.preventDefault();
    saveCustomIntoData();
    exitForm();
    displayedMessage.innerText = `${usersMessage.value}`;
  }
};

function saveCustomIntoData() {
  if (mantra.checked) {
    mantras.push(usersMessage.value);
  }
  else if (affirmation.checked){
    affirmations.push(usersMessage.value)
  }
};
