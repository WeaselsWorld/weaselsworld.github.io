// PRELOAD AND PRIME SCREAM
const scream = document.getElementById("scream");
scream.volume = 1.0;

// Force the browser to decode the audio early
scream.play().then(() => {
    scream.pause();
    scream.currentTime = 0;
}).catch(() => {
    // Some browsers block autoplay — this is fine.
});

document.getElementById("homeButton").addEventListener("click", function (event) {
    event.preventDefault(); // stop instant navigation

    const flash = document.getElementById("flash");
    const jumpscare = document.getElementById("jumpscare");
    const scream = document.getElementById("scream");

    // FLASH + SHAKE
    flash.classList.add("flash-active");
    document.body.classList.add("shake");

    // PLAY SCREAM *IMMEDIATELY*
    scream.currentTime = 0;
    scream.play();

    // SHOW IMAGE JUST AFTER (feels instant)
    setTimeout(() => {
        jumpscare.style.display = "flex";
    }, 30); // 30ms delay makes it feel perfectly synced

    // REDIRECT AFTER 3 SECONDS
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
});
