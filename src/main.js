import { showModal } from "./module/modal";
const myBtn = document.getElementById("myBtn");
const messageParagraph = document.getElementById("messageParagraph");

myBtn.addEventListener("click", () => {
  const config = {
    message: "Are you sure you want to continue?",
    callback: (didAgree) => {
      messageParagraph.textContent = `You just clicked ${
        didAgree ? "Yes" : "Cancel"
      }`;
    },
  };

  showModal(config);
});
