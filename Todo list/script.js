const inputvalue = document.getElementById("inputvalue");
const addbtn = document.getElementById("addbtn");
const box = document.getElementById("box");

addbtn.addEventListener("click", () => {
    let userInput = inputvalue.value;
    if (userInput.trim() === "") return; // Ignore empty input

    const listitem = document.createElement("li");
    listitem.classList.add('ranveer');

    const textSpan = document.createElement("span");
    textSpan.innerText = userInput;

    const removeSpan = document.createElement("span");
    removeSpan.innerHTML = "❌";
    removeSpan.classList.add('remove-icon');
    removeSpan.addEventListener("click", () => {
        box.removeChild(listitem);
    });

    listitem.appendChild(textSpan);
    listitem.appendChild(removeSpan);

    box.appendChild(listitem);
    inputvalue.value = ""; // Clear input field after adding the item
});