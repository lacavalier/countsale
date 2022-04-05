const deadline = new Date(2022, 05, 25);

let m = setInterval(function () {
  let k = new Date();
  let diff = deadline - k;

  if (diff < 0) {
    document.getElementById("time").innerHTML = "время акции истекло";
  } else {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " :";

    document.getElementById("hours").innerHTML = ("0" + hours + " :").slice(-4);

    document.getElementById("minutes").innerHTML = ("0" + mins + " :").slice(
      -4
    );

    document.getElementById("seconds").innerHTML = (" 0" + secs).slice(-2);
  }
}, 1000);
