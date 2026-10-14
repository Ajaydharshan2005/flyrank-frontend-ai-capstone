const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateSettings({ displayName, email }) {
  const errors = {};
  const normalizedName = displayName.trim();
  const normalizedEmail = email.trim();

  if (!normalizedName) {
    errors.displayName = "Enter a display name.";
  }

  if (!normalizedEmail) {
    errors.email = "Enter an email address.";
  } else if (!emailPattern.test(normalizedEmail)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

function initializeSettingsForm(document) {
  const form = document.querySelector("#settings-form");
  const displayName = document.querySelector("#display-name");
  const email = document.querySelector("#email");
  const displayNameError = document.querySelector("#display-name-error");
  const emailError = document.querySelector("#email-error");
  const successMessage = document.querySelector("#success-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.textContent = "";

    const errors = validateSettings({
      displayName: displayName.value,
      email: email.value,
    });

    displayNameError.textContent = errors.displayName ?? "";
    displayNameError.hidden = !errors.displayName;
    displayName.setAttribute("aria-invalid", String(Boolean(errors.displayName)));

    emailError.textContent = errors.email ?? "";
    emailError.hidden = !errors.email;
    email.setAttribute("aria-invalid", String(Boolean(errors.email)));

    if (Object.keys(errors).length > 0) {
      return;
    }

    successMessage.textContent = "Settings validated successfully. No data was sent to a server.";
  });
}

initializeSettingsForm(document);