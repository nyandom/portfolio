const gridItems = document.getElementsByClassName("grid-item");

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", function (event) {
    event.preventDefault();

    for (let j = 0; j < gridItems.length; j++) {
      gridItems[j].classList.remove("highlighted");
    }

    gridItems[i].classList.add("highlighted");

    let existingPopup = document.querySelector(".popup-container");
    if (existingPopup) {
      existingPopup.remove();
    }

    const itemNumber = gridItems[i].innerText;

    const popupContainer = document.createElement("section");
    popupContainer.classList.add("popup-container");

    const header = document.createElement("h2");
    popupContainer.appendChild(header);

    if (itemNumber === "1") {
      header.innerText = "Education";
      const content = document.createElement("div");
      content.innerText = "Imperial College London Web Development";
      content.style.backgroundColor = "rgba(25, 25, 25, 0.6)";
      content.style.padding = "20px";
      content.style.borderRadius = "10px";
      content.style.width = "320px";
      content.style.height = "20px";
      content.style.fontFamily = "Monsterrat, sans-serif";
      popupContainer.appendChild(content);
    } else if (itemNumber === "2") {
      header.innerText = "About me";
      const content = document.createElement("div");
      content.innerText =
        "Hi, I'm Nyan! A passionate web developer with over 4 years of experience, I specialize in creating dynamic, user-friendly applications. Web development isn’t just my career, it's my life! I’m constantly improving my skills. My expertise lies in the MERN stack (MongoDB, Express, React, Node.js), and I love using these tools to build stylish and efficient websites.\nOutside of coding, I enjoy listening to music and hanging out with friends, but my mind is always focused on finding new ways to be creative when building websites.";
      content.style.backgroundColor = "rgba(25, 25, 25, 0.6)";
      content.style.padding = "20px";
      content.style.borderRadius = "10px";
      content.style.width = "500px";
      content.style.height = "195px";
      content.style.fontFamily = "Monsterrat, sans-serif";
      content.style.lineHeight = "23px";
      popupContainer.appendChild(content);
    } else if (itemNumber === "3") {
      header.innerText = "Projects";
      const content = document.createElement("div");
      content.innerHTML =
        '<a href="https://discord.com/application-directory/1136001498728386610">Check out Cash Discord Bot ↗</a><br>More projects being uploaded soon..';
      content.style.backgroundColor = "rgba(25, 25, 25, 0.6)";
      content.style.padding = "20px";
      content.style.borderRadius = "10px";
      content.style.width = "300px";
      content.style.height = "50px";
      content.style.fontFamily = "Monsterrat, sans-serif";
      content.style.lineHeight = "23px";
      popupContainer.appendChild(content);
    } else if (itemNumber === "4") {
      header.innerText = "Technical Skills";
      const content = document.createElement("div");
      content.innerHTML =
        "I am proficient in HTML, CSS, and JavaScript, with solid experience in front-end development. I am skilled in using modern JavaScript frameworks and libraries, including React and Vue.js, and I have hands-on experience with the MERN stack (MongoDB, Express, React, Node.js) for full-stack development. I am experienced in version control with Git, enabling efficient collaboration and code management.";
      content.style.backgroundColor = "rgba(25, 25, 25, 0.6)";
      content.style.padding = "20px";
      content.style.borderRadius = "10px";
      content.style.width = "450px";
      content.style.height = "150px";
      content.style.fontFamily = "Monsterrat, sans-serif";
      content.style.lineHeight = "23px";
      popupContainer.appendChild(content);
    } else {
      const content = document.createElement("p");
      content.innerText = "This is a fallback text: ${itemNumber}.";
      popupContainer.appendChild(content);
    }

    document.body.appendChild(popupContainer);

    popupContainer.style.display = "block";
  });
}
