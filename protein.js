function calculateProtein() {
    let weight = parseFloat(document.getElementById("weight").value);
    if (!isNaN(weight)) {
        let minProtein = (weight * 0.8).toFixed(1);
        let maxProtein = (weight * 1.2).toFixed(1);
        let minKcal = (minProtein * 4).toFixed(1);
        let maxKcal = (maxProtein * 4).toFixed(1);
        document.getElementById("protein-value").textContent = `${minProtein} - ${maxProtein}`;
        document.getElementById("protein-kcal").textContent = `${minKcal} - ${maxKcal}`;
        
        let advice = "";
        if (weight < 50) {
            advice = "Anda memiliki berat badan yang relatif rendah. Pastikan untuk mengonsumsi makanan tinggi protein seperti daging tanpa lemak, ikan, telur, dan kacang-kacangan untuk mendukung kesehatan otot dan tubuh Anda.";
        } else if (weight >= 50 && weight <= 80) {
            advice = "Anda memiliki berat badan dalam kisaran normal. Konsumsi protein seimbang dari berbagai sumber seperti ayam, tahu, tempe, dan susu untuk mempertahankan kondisi tubuh yang sehat.";
        } else {
            advice = "Jika berat badan Anda lebih dari 80 kg, pertimbangkan pola makan yang kaya protein tetapi tetap seimbang, seperti mengonsumsi ikan, telur, serta protein nabati untuk mendukung metabolisme tubuh Anda.";
        }
        document.getElementById("nutrition-advice").textContent = advice;
        
        document.getElementById("result-card").classList.remove("hidden");
    } else {
        alert("Mohon masukkan berat badan yang valid.");
    }
}