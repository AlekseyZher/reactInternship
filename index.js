const form = document.getElementById("authForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("Authentication successful!");
    } else {
      console.error("Authentication failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
