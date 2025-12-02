// Tilt 3D (suave e sem conflitos)
document.querySelectorAll("[data-tilt]").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `
            perspective(800px)
            rotateY(${x / 25}deg)
            rotateX(${y / -25}deg)
            scale(1.05)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `
            perspective(800px)
            rotateY(0deg)
            rotateX(0deg)
            scale(1)
        `;
    });

});

// Feedback de clique
document.querySelectorAll(".action-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => btn.style.transform = "scale(1)", 150);
    });
});
