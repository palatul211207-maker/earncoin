// ================== INITIAL DATA ==================
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

// ================== WATCH AD ==================
function watchAd() {
  if (adsToday >= 20) {
    alert("❌ Daily ad limit reached!");
    return;
  }

  alert("🎥 Ad start ho raha hai, poora dekhiye!");

  let adCompleted = false;

  // Simulated ad (20 seconds)
  setTimeout(() => {
    adCompleted = true;
    coins += 10;
    adsToday++;

    localStorage.setItem("adsToday", adsToday);
    updateCoins();

    alert("🎉 Ad completed! +10 coins");
  }, 20000);

  // Agar ad beech me band hui
  window.onbeforeunload = function () {
    if (!adCompleted) {
      coins -= 5;
      if (coins < 0) coins = 0;
      updateCoins();
      alert("❌ Ad incomplete! -5 coins");
    }
  };
}

// ================== INVITE / SHARE ==================
function copyInvite() {
  let shareLink = window.location.href;
  let shareText =
    "💰 Earn coins by watching ads!\nInstall EarnCoin App now:\n" +
    shareLink;

  if (navigator.share) {
    navigator
      .share({
        title: "EarnCoin App",
        text: shareText,
        url: shareLink,
      })
      .then(() => {
        coins += 20;
        updateCoins();
        alert("🎉 Thanks for sharing! +20 coins");
      })
      .catch(() => {
        alert("Sharing cancelled");
      });
  } else {
    navigator.clipboard.writeText(shareLink);
    alert("Link copied! Share manually");
  }
}

// ================== WITHDRAW (FIREBASE) ==================
function withdraw() {
  if (coins < 3000) {
    alert("❌ Minimum 3000 coins required for withdraw");
    return;
  }

  if (typeof db === "undefined") {
    alert("❌ Firebase not connected");
    return;
  }

  db.collection("withdraw_requests")
    .add({
      coins: coins,
      status: "pending",
      date: new Date().toLocaleString(),
    })
    .then(() => {
      alert("✅ Withdraw request sent!");
    })
    .catch((error) => {
      alert("❌ Error: " + error.message);
    });
}
