// import React from "react";


// "use strict"
// eslint-disable-next-line no-undef
const socket = io();

const nickname = document.querySelector("#nickname")
const chatlist = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");

chatInput.addEventListener("keypress", (event)=>{
    // eslint-disable-next-line no-undef
    if(e.key === '13'){
        send()
    }
})
function send(){
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    socket.emit("chatting", param)
}
sendButton.addEventListener("click", send)

socket.on("chatting", (data) => {
    const { name, msg, time } = data;
    const item = new LiModell(name, msg, time);
    item.makeLi()
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
})
function LiModell(name, msg, time){
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi = ()=>{
        const li = document.createElement("li");
        li.classList.add(nickname.value === this.name ? "sent" : "received")
        const dom = `<span class="profile">
        <span class="user">${this.name}</span>
        <img class="image" src="https://placeimg.com/50/50/any" alt="any">
    </span>
    <span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatlist.appendChild(li)
    }
}


