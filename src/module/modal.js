function showModal({ message, callback }) {
  const currModal = createModal();

  const currModalBackdrop = createModalBackdrop();
  const content = CurrModalContent(currModal, { message, callback });

  currModal.appendChild(currModalBackdrop);
  currModal.appendChild(content);

  document.body.appendChild(currModal);
}

function createModal() {
  const element = document.createElement("div");
  element.classList.add("modal");
  element.id = createUniqueId();

  return element;
}

function createModalBackdrop() {
  const element = document.createElement("div");
  element.classList.add("modal-backdrop");
  return element;
}

function createModalContent(parent, { message, callback }) {
  // content container
  const content = document.createElement("div");
  content.classList.add("modal__content");

  // message
  const contentMessage = document.createElement("p");
  contentMessage.classList.add("modal__content-message");
  contentMessage.textContent = message;

  // button container
  const buttonContainer = document.createElement("div");
  contentMessage.classList.add("modal__button-container");

  //yes button
  const yesBtn = document.createElement("button");
  yesBtn.classList.add("button");
  yesBtn.textContent = "Yes";
  yesBtn.addEventListener("click", () => {
    callback(true);
    closeModal();
  });

  //cancel button
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    callback(false);
    closeModal();
  });

  buttonContainer.append(yesBtn, cancelBtn);
  content.append(contentMessage, buttonContainer);

  return content;
}

function closeModal(id) {
  const modal = document.getElementById(id);

  if (!modal) {
    return;
  }

  modal.remove();
}

function createUniqueId() {
  return `id-${new Date().getTime()}`;
}

export { showModal };
