let coins = parseInt(localStorage.getItem("coins")) || 0;
let adsToday = parseInt(localStorage.getItem("adsToday")) || 0;
let today = new Date().toDateString();

if (localStorage.getItem("date") !== today) {
  localStorage.setItem("adsToday", 0);
  localStorage.setItem("date", today);
  adsToday = 0;
}

updateCoins();

function updateCoins() {
  document.getElementById("coin").innerText = coins;
  localStorage.setItem("coins", coins);
}

// WATCH AD LOGIC
function watchAd() {
  if (adsToday >= 20) {
    alert("Daily ad limit reached!");
    return;
  }

  alert("Ad start ho raha hai. Please poora dekhiye!");

  let adCompleted = false;

  // 👉 SIMULATE AD (20 sec)
  setTimeout(() => {
    adCompleted = true;
    coins += 10;
    adsToday++;

    localStorage.setItem("adsToday", adsToday);
    updateCoins();

    alert("🎉 Ad completed! +10 coins");
  }, 20000);

  // ❌ Agar user jaldi back kare / page reload kare
  window.onbeforeunload = function () {
    if (!adCompleted) {
      coins -= 5;
      if (coins < 0) coins = 0;
      updateCoins();
      alert("❌ Ad incomplete! -5 coins");
    }
  };
}

// INVITE SYSTEM (SIMPLE)
function copyInvite() {
  let link = window.location.href + "?ref=user";
  navigator.clipboard.writeText(link);
  alert("Invite link copied!\nShare & earn 20 coins");
}

// WITHDRAW
function withdraw() {
  if (coins < 3000) {
    alert("❌ Minimum 3000 coins required for withdraw");
    return;
  }

  alert("✅ Withdraw request sent!\nAdmin will contact you.");
}
