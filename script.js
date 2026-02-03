// ================= NAVIGATION =================
function showPage(page) {
  ["home", "about", "register", "contact"].forEach(id =>
    document.getElementById(id).classList.add("hidden")
  );

  document.getElementById(page).classList.remove("hidden");
}

// ================= REGISTER APP =================
const TOTAL = 200;
let registered = 0;

const regEl = document.getElementById("registeredSeats");
const remEl = document.getElementById("remainingSeats");

const form = document.getElementById("userForm");
const error = document.getElementById("error");
const content = document.getElementById("content");
const output = document.getElementById("output");

form.addEventListener("submit", e => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const course = document.getElementById("course").value;

  error.textContent = "";

  // NAME
  if (fullname.length < 1 || fullname.length > 15) {
    error.textContent = "❌ Full Name must be between 1 and 15 characters.";
    return;
  }

  // AGE
  if (age < 10 || age > 100) {
    error.textContent = "❌ Age must be between 10 and 100.";
    return;
  }

  // EMAIL
  if (!email.includes("@")) {
    error.textContent = "❌ Please enter a valid email address.";
    return;
  }

  // PASSWORD RULE
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!passwordPattern.test(password)) {
    error.textContent =
      "❌ Password wrong! Must be at least 8 characters and include uppercase, lowercase, and a number.";
    return;
  }

  // COURSE
  if (course === "") {
    error.textContent = "❌ Please select a course.";
    return;
  }

  // SEATS
  if (registered >= TOTAL) {
    error.textContent = "❌ No remaining client slots available.";
    return;
  }

  // UPDATE COUNTERS
  registered++;
  regEl.textContent = registered;
  remEl.textContent = TOTAL - registered;

  // SHOW OUTPUT (NO PASSWORD)
  content.classList.remove("hidden");

  output.innerHTML += `
    <p>
      <strong>Name:</strong> ${fullname}<br>
      <strong>Age:</strong> ${age}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Course:</strong> ${course}
    </p>
    <hr>
  `;

  form.reset();
});

// ================= CONTACT FORM =================
const contactForm = document.getElementById("contactForm");
const contactError = document.getElementById("contactError");
const contactOutput = document.getElementById("contactOutput");

contactForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const comments = document.getElementById("contactComments").value.trim();

  contactError.textContent = "";

  if (name.length < 1 || name.length > 15) {
    contactError.textContent = "❌ Name must be between 1 and 15 characters.";
    return;
  }

  if (!email.includes("@")) {
    contactError.textContent = "❌ Please enter a valid email address.";
    return;
  }

  if (comments.length === 0) {
    contactError.textContent = "❌ Please enter your comments.";
    return;
  }

  contactOutput.classList.remove("hidden");

  contactOutput.innerHTML += `
    <p>
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Comments:</strong> ${comments}
    </p>
    <hr>
  `;

  contactForm.reset();
});