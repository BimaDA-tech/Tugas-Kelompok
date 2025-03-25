function calculateBMI() {
    // Ambil nilai input
    let gender = document.getElementById("gender").value;
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let age = new Date().getFullYear() - new Date(document.getElementById("dob").value).getFullYear();
    let activityLevel = parseFloat(document.getElementById("activity-level").value);

    // Validasi input
    if (isNaN(height) || isNaN(weight) || isNaN(age) || gender === "") {
        alert("Harap isi semua data dengan benar.");
        return;
    }

    // Rumus BMR
    let bmr;
    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    // Hitung TDEE
    let tdee = bmr * activityLevel;

    // Rekomendasi kalori untuk penambahan berat badan
    let lightGain = Math.round(tdee * 1.15); // +15% kalori
    let moderateGain = Math.round(tdee * 1.3); // +30% kalori

    // Tentukan deskripsi aktivitas
    let activityDescription;
    switch (activityLevel) {
        case 1.2:
            activityDescription = "Gaya hidup tidak aktif";
            break;
        case 1.375:
            activityDescription = "Olahraga ringan (1-2 hari/minggu)";
            break;
        case 1.55:
            activityDescription = "Olahraga sedang (3-4 hari/minggu)";
            break;
        case 1.725:
            activityDescription = "Sangat aktif (6-7 hari/minggu)";
            break;
        case 1.9:
            activityDescription = "Ekstrem (Latihan berat setiap hari)";
            break;
        default:
            activityDescription = "Tidak diketahui";
    }

    // Tampilkan hasil
    document.getElementById("bmr-result").innerText = `${Math.round(bmr)} kcal/hari`;
    document.getElementById("tdee-result").innerText = `${Math.round(tdee)} kcal/hari`;
    document.getElementById("activity-description").innerText = activityDescription;
    document.getElementById("light-gain").innerText = `${lightGain} - ${lightGain + 250} kcal/hari`;
    document.getElementById("moderate-gain").innerText = `${moderateGain} - ${moderateGain + 500} kcal/hari`;

    // Tampilkan hasil
    document.getElementById("result-container").classList.remove("hidden");
}
