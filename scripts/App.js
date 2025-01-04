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

    if (itemNumber === "Education") {
      header.innerText = "Education";
      header.style.paddingLeft = "5px";
      const content = document.createElement("div");
      content.innerText =
        "Certificate in Full Stack Web Development from Imperial College London.";
      content.style.backgroundColor = "rgba(25, 25, 25, 0.6)";
      content.style.padding = "20px";
      content.style.borderRadius = "10px";
      content.style.width = "320px";
      content.style.height = "40px";
      content.style.fontFamily = "Monsterrat, sans-serif";
      popupContainer.appendChild(content);
    } else if (itemNumber === "About Me") {
      header.innerText = "About me";
      header.style.paddingLeft = "19px";
      const content = document.createElement("div");
      content.innerHTML = `<p>Hi, I'm Nyan! A passionate web developer with over <strong>4 years of experience</strong>, I specialize in creating <strong>efficient, user-friendly applications</strong>.</p>
    <p>Web development isn’t just my career, <strong>it's my life!</strong> I’m constantly improving my skills. My expertise lies in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js), and I love using these tools to build stylish and professional websites.</p>
    <p>Outside of coding, I enjoy listening to music and hanging out with friends, but my mind is always focused on finding new ways to be creative when building websites.</p>`;
      content.style.backgroundColor = "rgba(25, 25, 25, 0.6)";
      content.style.padding = "20px";
      content.style.borderRadius = "10px";
      content.style.width = "500px";
      content.style.height = "280px";
      content.style.fontFamily = "Monsterrat, sans-serif";
      content.style.lineHeight = "23px";
      popupContainer.appendChild(content);
    } else if (itemNumber === "Projects") {
      header.innerText = "Projects";
      header.style.paddingLeft = "5px";
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
    } else if (itemNumber === "Technical Skills") {
      header.innerText = "Technical Skills";
      header.style.paddingLeft = "10px";
      const content = document.createElement("div");
      content.innerHTML = `<p>I am proficient in <strong>HTML, CSS, and JavaScript</strong>, with solid experience in front-end development.</p>
    <p>I am skilled in using modern JavaScript frameworks and libraries, including <strong>React</strong> and <strong>Vue.js</strong>, and I have hands-on experience with the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) for full-stack development.</p>
    <p>I am experienced in version control with <strong>Git</strong>, enabling efficient collaboration and code management.</p>`;
      content.style.backgroundColor = "rgba(25, 25, 25, 0.6)";
      content.style.padding = "20px";
      content.style.borderRadius = "10px";
      content.style.width = "450px";
      content.style.height = "240px";
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
