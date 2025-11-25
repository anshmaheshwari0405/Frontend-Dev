document.getElementById("f").onsubmit = async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const msg = document.getElementById("msg");
  let exists = await axios.get("http://localhost:3000/users?email=" + email);
  if (exists.data.length) {
    msg.textContent = "Email already registered.";
    return;
  }
  await axios.post("http://localhost:3000/users", { name, email });
  msg.textContent = "Registered";
};
