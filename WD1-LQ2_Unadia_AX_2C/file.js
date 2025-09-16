document.addEventListener("DOMContentLoaded", () => {
  console.log("XanStream loaded! ✅");

  const actionButtons = document.querySelectorAll(".actions button");
  actionButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert(`You clicked: ${button.textContent}`);
    });
  });

  const addButtons = document.querySelectorAll(".add");
  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Friend request sent! ✅");
    });
  });
  
  const settingsBtn = document.querySelector(".dropbtn");
  settingsBtn.addEventListener("click", () => {
    console.log("Settings button clicked");
  });
});
