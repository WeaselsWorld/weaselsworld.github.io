// ---------------------------------------------------
// PRELOAD + PRIME AUDIO
// ---------------------------------------------------
const laugh = document.getElementById("scream");
laugh.volume = 1.0;

// Try to decode early (some browsers block autoplay)
laugh.play().then(() => {
    laugh.pause();
    laugh.currentTime = 0;
}).catch(() => {
    // Autoplay blocked — totally fine, user interaction will allow it later.
});

// ---------------------------------------------------
// ENTRY POPUP (shows on page load)
// ---------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("jumpscare");

    // Delay slightly for smoother appearance
    setTimeout(() => {
        popup.classList.add("active");
        laugh.currentTime = 0;
        laugh.play();

        // Fade out after 2 seconds
        setTimeout(() => {
            popup.classList.add("fade-out");

            setTimeout(() => {
                popup.classList.remove("active", "fade-out");
            }, 350); // matches popOut animation
        }, 2000);

    }, 300);
});

// ---------------------------------------------------
// EXIT POPUP (when clicking "Go Back Home")
// ---------------------------------------------------
document.getElementById("homeButton").addEventListener("click", (event) => {
    event.preventDefault();

    const flash = document.getElementById("flash");
    const popup = document.getElementById("jumpscare");

    // Flash + shake
    flash.classList.add("flash-active");
    document.body.classList.add("shake");

    // Play laugh instantly
    laugh.currentTime = 0;
    laugh.play();

    // Show popup immediately
    popup.classList.add("active");

    // Fade out popup before redirect
    setTimeout(() => {
        popup.classList.add("fade-out");
    }, 1200);

    // Redirect after animation
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1600);
});
hawk.classList.add("hawk-entry");
