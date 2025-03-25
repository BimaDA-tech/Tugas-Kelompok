function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let resultContainer = document.getElementById("resultContainer");
    let resultText = document.getElementById("bmiResultText");

    if (height === "" || weight === "") {
        alert("Harap isi semua kolom!");
        return;
    }

    height = parseFloat(height) / 100; // Konversi cm ke meter
    weight = parseFloat(weight);
    let bmi = (weight / (height * height)).toFixed(1);
    let category = "";
    let icon = "";
    let className = "";

    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
        icon = "ℹ️";
        className = "underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal";
        icon = "✅";
        className = "normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kelebihan Berat Badan";
        icon = "⚠️";
        className = "overweight";
    } else {
        category = "Obesitas";
        icon = "❌";
        className = "obese";
    }

    resultText.innerHTML = `BMI Anda: <strong>${bmi}</strong> ${icon} <br> <span>${category}</span>`;
    resultContainer.className = `result-container ${className}`;
    resultContainer.style.display = "block";

    // Scroll ke hasil BMI
    resultContainer.scrollIntoView({ behavior: "smooth", block: "center" });
}




document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
        let answer = this.parentElement.nextElementSibling;
        answer.classList.toggle('hidden');

        // Ganti ikon "+" menjadi "-" jika terbuka
        if (answer.classList.contains('hidden')) {
            this.classList.remove('fa-minus');
            this.classList.add('fa-plus');
        } else {
            this.classList.remove('fa-plus');
            this.classList.add('fa-minus');
        }
    });
});



