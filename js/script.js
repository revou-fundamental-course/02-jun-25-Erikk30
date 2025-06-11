// Fungsi untuk menampilkan sapaan berdasarkan nama
function setName() {
  const nameInput = document.getElementById("name-input");
  const welcomeText = document.getElementById("welcome-text");
  const name = nameInput.value.trim() || "Guest";
  const fullText = `Hi, ${name}!`;

  let i = 0;
  welcomeText.textContent = ""; // Kosongkan dulu

  const typing = setInterval(() => {
    welcomeText.textContent += fullText[i];
    i++;
    if (i >= fullText.length) {
      clearInterval(typing);
    }
  }, 100); // Ganti 100 ke lebih kecil kalau mau lebih cepat
}


// Validasi form dan menampilkan hasil input
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const resultDiv = document.getElementById("form-result");

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  resultDiv.innerHTML = `
    <h4>Form Submitted:</h4>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // Reset form (opsional)
  document.getElementById("contact-form").reset();

  return false; // Mencegah reload halaman
}
