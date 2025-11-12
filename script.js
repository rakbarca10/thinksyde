const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => { navLinks.classList.toggle('active'); });


(function () {
    emailjs.init("QGBt95zbkah0I-dOE"); // your public key
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.send("service_fqaj4eb", "template_e6gha9h", {
        from_name: document.getElementById("name").value,
        reply_to: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
        .then(() => {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS error:", error);
        });
});