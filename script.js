const form = document.getElementById("appointmentForm");
const dateInput = document.getElementById("date");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
dateInput.min = `${yyyy}-${mm}-${dd}`;

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const mobile = document.getElementById("mobile").value.trim();
  const address = document.getElementById("address").value.trim();
  const concern = document.getElementById("concern").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!/^\+?[0-9\s-]{10,15}$/.test(mobile)) {
    alert("Please enter a valid mobile number.");
    return;
  }

  const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
    day: "2-digit", month: "long", year: "numeric"
  });

  const message =
`*Life Cure Clinic - Appointment Registration*

*Patient Details*
Name: ${name}
Age: ${age}
Gender: ${gender}
Mobile: ${mobile}
Address: ${address}

*Health Concern*
${concern}

*Preferred Appointment*
Date: ${formattedDate}
Time: ${time}

I would like to request an appointment with Dr. Hetvi Patel (BHMS, CCH).`;

  const whatsappUrl = "https://wa.me/919429482309?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, "_blank");
});
