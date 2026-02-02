let coins = localStorage.getItem("coins") || 0;
let adsToday = localStorage.getItem("adsToday") || 0;

document.getElementById("coin").innerText = coins;

// Reset daily ads
let today = new Date().toDateString();
if (localStorage.getItem("date") !== today) {
  localStorage.setItem("adsToday", 0);
  localStorage.setItem("date", today);
  adsToday = 0;
}

function watchAd() {
  if (adsToday >= 20) {
    alert("Daily ad limit reached!");
    return;
  }

  // 👉 YAHAN AD CALL HOGA (Adsterra / Propeller)
  // ad complete hone ke baad ye chalega 👇

  setTimeout(() => {
    coins = parseInt(coins) + 10;
    adsToday++;

    localStorage.setItem("coins", coins);
    localStorage.setItem("adsToday", adsToday);

    document.getElementById("coin").innerText = coins;
    alert("🎉 You earned 10 coins!");
  }, 2000);
}
