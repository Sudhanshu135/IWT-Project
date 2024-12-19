const about = document.getElementById("About");
const anchAb = document.getElementById("Ab");
const homebc = document.getElementById("bc");
const main = document.getElementById("main");
const services = document.getElementById("sec1");
const service = document.getElementById("po");
const main2 = document.getElementById("main2");
const contact = document.getElementById("contact-us");
const contacts = document.getElementById("jh");
const sign = document.getElementById("signit");
const signupbutton = document.getElementById("buto");

// About Button
anchAb.addEventListener("click", (e) => {
    e.preventDefault();
    about.classList.remove("hide");
    main.classList.add("hide");
    main2.classList.add("hide");
    services.classList.add("hide");
    contact.classList.add("hide");
    sign.classList.add("hide");
});

// Home Button
homebc.addEventListener("click", (e) => {
    e.preventDefault();
    main.classList.remove("hide");
    main2.classList.remove("hide");
    about.classList.add("hide");
    services.classList.add("hide");
    contact.classList.add("hide");
    sign.classList.add("hide");
});

// Services Button
service.addEventListener("click", (e) => {
    e.preventDefault();
    services.classList.remove("hide");
    main.classList.add("hide");
    main2.classList.add("hide");
    about.classList.add("hide");
    contact.classList.add("hide");
    sign.classList.add("hide");
});

// Contact Us Button
contacts.addEventListener("click", (e) => {
    e.preventDefault();
    contact.classList.remove("hide");
    services.classList.add("hide");
    main.classList.add("hide");
    main2.classList.add("hide");
    about.classList.add("hide");
    sign.classList.add("hide");
});

// Sign Up Button
signupbutton.addEventListener("click", (e) => {
    e.preventDefault();
    sign.classList.remove("hide");
    about.classList.add("hide");
    main.classList.add("hide");
    main2.classList.add("hide");
    services.classList.add("hide");
    contact.classList.add("hide");
});
