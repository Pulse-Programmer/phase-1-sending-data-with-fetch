function submitData(name, email) {
  const body = document.querySelector("body");
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataDiv = document.createElement("div");
      dataDiv.innerHTML = `
        <p> <b>ID</b>: <span>${data.id}</span></p>
        `;
      body.append(dataDiv);
    })
    .catch((error) => {
      const errorDiv = document.createElement("div");
      errorDiv.innerHTML = `
        <p> <b>Error message</b>: <span>${error.message}</span></p>
        `;
      body.append(errorDiv);
    });
}

//test code
//submitData("Gary", "gary@example3.com");
