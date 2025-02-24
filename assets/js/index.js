document.addEventListener("DOMContentLoaded", () => {
    const skillText = document.querySelector(".main span");

    if (skillText) {
        const letters = skillText.textContent.split(""); // 文字を一文字ずつ分割
        skillText.innerHTML = letters.map((letter, index) => 
            `<span style="transition-delay: ${index * 0.1}s">${letter}</span>`
        ).join(""); // 各文字を <span> で囲んで遅延時間を設定
    }

    const skillSection = document.querySelector(".Skill");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                skillSection.classList.add("animate");
                observer.unobserve(skillSection);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillSection);
});