// AI-assisted: Used ChatGPT to help structure the JavaScript features for navigation, FAQ accordion, back-to-top, and form validation.

document.addEventListener("DOMContentLoaded", () => {
  updateFooterYear();
  setupHamburgerMenu();
  setupBackToTopButton();
  renderFaqItems();
  setupContactFormValidation();
  setMinimumDate();
});

function updateFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function setupHamburgerMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navToggle || !siteNav) return;

  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("nav-open");

    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        siteNav.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function setupBackToTopButton() {
  const backToTopButton = document.getElementById("backToTop");

  if (!backToTopButton) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function renderFaqItems() {
  const faqList = document.getElementById("faq-list");

  if (!faqList) return;

  const faqItems = [
    {
      question: "What is included in each package?",
      answer: "Each package includes charms, chains, tools, instruction cards, and guidance during the activity."
    },
    {
      question: "Can I add extra guests?",
      answer: "Yes. Additional guests can be added up to 10 total for an extra $22 per person."
    },
    {
      question: "Do you provide tables and chairs?",
      answer: "No. A clear table space must be available for setup, since tables and furniture are not provided."
    },
    {
      question: "Can we use more than 5 charms?",
      answer: "Yes. Guests can add extra charms for an additional fee."
    },
    {
      question: "When is your next pop-up event?",
      answer: "Follow us on Instagram to stay updated — we always post upcoming pop-ups there."
    },
    {
      question: "What events are these packages good for?",
      answer: "They are perfect for birthdays, Grad parties, girls’ nights, small gatherings, and other creative events."
    }
  ];

  faqItems.forEach((item) => {
    const faqCard = document.createElement("article");
    faqCard.classList.add("faq-item");

    faqCard.innerHTML = `
      <button class="faq-question" type="button">
        <span>${item.question}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    `;

    faqList.appendChild(faqCard);
  });

  const faqQuestions = faqList.querySelectorAll(".faq-question");

  faqQuestions.forEach((button) => {
    button.addEventListener("click", () => {
      const currentItem = button.parentElement;
      const isActive = currentItem.classList.contains("active");

      faqList.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        const icon = item.querySelector(".faq-icon");
        if (icon) icon.textContent = "+";
      });

      if (!isActive) {
        currentItem.classList.add("active");
        const icon = currentItem.querySelector(".faq-icon");
        if (icon) icon.textContent = "−";
      }
    });
  });
}

function setupContactFormValidation() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const dateInput = document.getElementById("event-date");
  const packageInput = document.getElementById("package");
  const detailsInput = document.getElementById("event-details");
  const successMessage = document.getElementById("form-success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    clearError(nameInput);
    clearError(emailInput);
    clearError(phoneInput);
    clearError(dateInput);
    clearError(packageInput);
    clearError(detailsInput);
    successMessage.textContent = "";

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your full name.");
      isValid = false;
    }

    if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    if (phoneInput.value.trim() === "") {
      showError(phoneInput, "Please enter your phone number.");
      isValid = false;
    }

    if (dateInput.value === "") {
      showError(dateInput, "Please select an event date.");
      isValid = false;
    }

    if (packageInput.value === "") {
      showError(packageInput, "Please select a package.");
      isValid = false;
    }

    if (detailsInput.value.trim().length < 10) {
      showError(detailsInput, "Please enter at least 10 characters.");
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent = "Thanks! We’ll get back to you soon.";
      form.reset();
    }
  });

  [nameInput, emailInput, phoneInput, dateInput, packageInput, detailsInput].forEach((input) => {
    const eventType = input.tagName === "SELECT" ? "change" : "input";

    input.addEventListener(eventType, () => {
      clearError(input);
      successMessage.textContent = "";
    });
  });
}

function showError(input, message) {
  const errorElement = input.parentElement.querySelector(".error-message");
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function clearError(input) {
  const errorElement = input.parentElement.querySelector(".error-message");
  if (errorElement) {
    errorElement.textContent = "";
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setMinimumDate() {
  const dateInput = document.getElementById("event-date");
  if (!dateInput) return;

  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
}