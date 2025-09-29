// وظيفة تحميل المباريات من ملف JSON
async function loadMatches() {
  try {
    // قراءة ملف data.json
    const response = await fetch("data.json");
    const data = await response.json();

    // اختيار مكان عرض المباريات (div.grid)
    const grid = document.querySelector(".grid");
    grid.innerHTML = ""; // تنظيف المحتوى القديم

    // إنشاء عناصر HTML لكل مباراة
    data.matches.forEach(match => {
      const box = document.createElement("div");
      box.className = "box1";

      box.innerHTML = `
        <div class="botola">
          <p>${match.league}</p>
        </div>
        <div class="match">
          <div class="flag1">
            <img src="${match.team1.flag}" alt="${match.team1.name}">
          </div>
          <div class="date">
            <p>${match.date}</p>
            <p>${match.time}</p>
          </div>
          <div class="flag2">
            <img src="${match.team2.flag}" alt="${match.team2.name}">
          </div>
        </div>
        <div class="pronostic">
          <p>${match.pronostic}</p>
          <h5>${match.cote}</h5>
        </div>
      `;

      // إضافة المباراة إلى الشبكة
      grid.appendChild(box);
    });
  } catch (error) {
    console.error("❌ خطأ أثناء تحميل البيانات:", error);
  }
}

// تشغيل عند فتح الصفحة
document.addEventListener("DOMContentLoaded", loadMatches);

// تحديث تلقائي كل 10 ثواني
setInterval(loadMatches, 20000);
