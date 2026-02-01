document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const donor = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    bloodGroup: document.getElementById("bloodGroup").value,
    age: document.getElementById("age").value,
    weight: document.getElementById("weight").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value
  };

  // Validation
  if (
    donor.name &&
    donor.email &&
    donor.password &&
    donor.bloodGroup &&
    donor.age &&
    donor.weight &&
    donor.phone &&
    donor.address
  ) {
    // Save donor to localStorage
    let donors = JSON.parse(localStorage.getItem("donors")) || [];
    donors.push(donor);
    localStorage.setItem("donors", JSON.stringify(donors));

    alert("Registration successful!");
    // Redirect to donor details page
    window.location.href = "donors.html";
  } else {
    alert("Please fill in all fields.");
  }
});