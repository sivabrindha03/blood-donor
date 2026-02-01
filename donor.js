window.addEventListener("DOMContentLoaded", function() {
  const donorTableBody = document.querySelector("#donorTable tbody");
  const donors = JSON.parse(localStorage.getItem("donors")) || [];

  if (donors.length === 0) {
    donorTableBody.innerHTML = "<tr><td colspan='7'>No donors registered yet.</td></tr>";
    return;
  }

  donors.forEach(donor => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${donor.name}</td>
      <td>${donor.email}</td>
      <td>${donor.bloodGroup}</td>
      <td>${donor.age}</td>
      <td>${donor.weight}</td>
      <td>${donor.phone}</td>
      <td>${donor.address}</td>
    `;

    donorTableBody.appendChild(row);
  });
});