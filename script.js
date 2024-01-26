document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const gradientToggleBtn = document.querySelector(".gradient-toggle-btn");

    const gradients = [
        "linear-gradient(to right top, #edc5bd, #daa1a2, #c37e8f, #a75d83, #84407b)",
        "linear-gradient(to right top, #603e38, #4b2e35, #371e31, #1f132c, #0a0a27)"
    ];

    let currentGradientIndex = localStorage.getItem('background-theme') === 'dark' ? 1 : 0;

    const setInitialTheme = () => {
        body.style.backgroundImage = gradients[currentGradientIndex];
        if (currentGradientIndex === 1) {
            body.classList.add("dark");
        }
    };

    const toggleBackgroundGradient = () => {
        currentGradientIndex = 1 - currentGradientIndex;
        body.style.backgroundImage = gradients[currentGradientIndex];
        body.classList.toggle("dark");
        localStorage.setItem('background-theme', currentGradientIndex === 1 ? 'dark' : 'light');
    };

    gradientToggleBtn.addEventListener("click", toggleBackgroundGradient);

    // Inicializa o tema ao carregar a página
    setInitialTheme();
});

