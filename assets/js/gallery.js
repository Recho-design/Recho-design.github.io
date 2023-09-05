function checkPassword() {
    const enteredPassword = document.getElementById("passwordInput").value;
    const correctPassword = "123"; // 此处设置正确密码

    if (enteredPassword === correctPassword) {
        // 密码正确时，触发JavaScript事件
        const cards = document.querySelectorAll(".card.clicked");
        cards.forEach((card) => {
            const img = card.querySelector(".card-picture");
            const imgSrc = img.getAttribute("src");
            imgLightbox.open(imgSrc);
        });

        // 关闭模态框
        document.getElementById("passwordModal").querySelector(".btn-close").click();
    } else {
        alert("密码错误，请重试！");
    }
}

// 添加点击事件处理程序来标记卡片为 "clicked"
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (!card.hasAttribute("data-bs-toggle")) {
            const img = card.querySelector(".card-picture");
            const imgSrc = img.getAttribute("src");
            imgLightbox.open(imgSrc);
        }
        card.classList.add("clicked");
    });
});