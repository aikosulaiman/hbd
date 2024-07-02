let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");
let message = document.querySelector(".message");
let player = document.querySelector(".player");
let messageText = "HIIIIIII TOR HAHAHAHA!\nHappy birthday yang ke-22 tahun UWUWUWUW\nwishing you all the best on your special day yaa sayang <3 Semoga sehat, bahagia, dan sukses selalu!\nSemoga semua impian di umur ke-22 ini bisa tercapai yaaaa I love you!!!!!";
let typingSpeed = 100;

btn.addEventListener("click", () => {
    if (state == false) {
        record.classList.add("on");
        toneArm.classList.add("play");
        player.classList.add("up");
        message.classList.remove("hidden");
        setTimeout(() => {
            message.style.opacity = 1;
            typeMessage(0);
            song.play();
            // Trigger the confetti effect
            launchConfetti();
        }, 1000);
    } else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
        player.classList.remove("up");
        message.style.opacity = 0;
        setTimeout(() => {
            message.classList.add("hidden");
            message.textContent = "";
        }, 500);
        song.pause();
    }
    state = !state;
});

slider.addEventListener("input", (e) => {
    song.volume = Number(e.target.value);
});

function typeMessage(index) {
    if (index < messageText.length) {
        message.textContent += messageText.charAt(index);
        setTimeout(() => {
            typeMessage(index + 1);
        }, typingSpeed);
    }
}

function launchConfetti() {
    var end = Date.now() + (5 * 2000);

    // create a burst of confetti from the center of the screen
    var confettiInterval = setInterval(function() {
        if (Date.now() > end) {
            return clearInterval(confettiInterval);
        }

        confetti({
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 1000,
            colors: ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1bd', '#f9bec7']
        });
    }, 250);
}