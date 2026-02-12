const heading = document.querySelector("#heading");
const subheading = document.querySelector("#subheading");
const reply = document.querySelector("#reply-button");
const replymessage = document.querySelector("#reply-message");
const replycancel = document.querySelector("#cancel-button");
const replysend = document.querySelector("#send-button");
const message1 = document.querySelector("#inbox-message");
const openmessage1 = document.querySelector("#open-button");
const closemessage1 = document.querySelector("#close");
const inbox = document.querySelector("#inbox");
const markasunread1 = document.querySelector("#mark-button");
const delete1 = document.querySelector("#delete-button");
const read1 = document.querySelector("#markasread-button");


function fontcolorblue1 () {
    heading.classList.toggle("blue-text");
}
function fontcolorblue2 () {
    subheading.classList.toggle("blue-text");
    heading.classList.toggle("custom");
}
const showmessage1 = () => {
    message1.classList.remove("hidden");
    inbox.classList.add("is-read");
    markasunread1.classList.remove("hidden");
};
const hidemessage1 = () => {
    message1.classList.add("hidden");
};
const showmreply1 = () => {
    replymessage.classList.remove("hidden");
};
const hidereply1 = () => {
    replymessage.classList.add("hidden");
};
const markasunread = () => {
    inbox.classList.remove("is-read");
    markasunread1.classList.add("hidden");
    message1.classList.add("hidden");
};
const checkbox = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#action-buttons");

const handleCheckbox = () => {
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
};

const deletefunc1 = () => {
    inbox.classList.toggle("hidden");

    if (delete1.innerHTML === "Delete Message(s)") {
        delete1.innerHTML = "Undo Deletion";
    } else {
        delete1.innerHTML = "Delete Message(s)";
    }
};

const readfunc1 = () => {
    markasunread1.classList.remove("hidden");
    inbox.classList.remove("is-selected");
    inbox.classList.add("is-read");
    checkbox.checked = false;
};

const darkModeBtn = document.querySelector("#dark-button");
const body = document.querySelector("body");

const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
};

darkModeBtn.addEventListener("click", toggleDarkMode);


read1.addEventListener("click", readfunc1);

checkbox.addEventListener("change", handleCheckbox);

delete1.addEventListener("click", deletefunc1);

heading.addEventListener("click" , fontcolorblue1 );

subheading.addEventListener("click" , fontcolorblue2 );

openmessage1.addEventListener("click" , showmessage1 );

closemessage1.addEventListener("click" , hidemessage1 );

reply.addEventListener("click" , showmreply1 );

replycancel.addEventListener("click" , hidereply1 );

markasunread1.addEventListener("click" , markasunread );