function calculateRHR() {
    // Ambil nilai input dari form
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const rhr = parseInt(document.getElementById("rhr").value);
    const activityLevel = parseFloat(document.getElementById("activity-level").value);
    
    // Validasi input
    if (!dob || !gender || isNaN(rhr) || isNaN(activityLevel)) {
        alert("Harap isi semua kolom dengan benar.");
        return;
    }

    // Hitung umur berdasarkan tanggal lahir
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    
    // Hitung denyut jantung maksimum
    const maxHeartRate = 220 - age;
    
    // Hitung zona detak jantung ideal (50-85% dari denyut jantung maksimum)
    const minHeartZone = Math.round(maxHeartRate * 0.5);
    const maxHeartZone = Math.round(maxHeartRate * 0.85);
    const heartZone = `${minHeartZone} - ${maxHeartZone}`;
    
    // Klasifikasi RHR berdasarkan nilai
    let classification = "";
    let explanation = "";
    let advice = "";

    if (rhr < 60) {
        classification = "Baik";
        explanation = "Detak jantung istirahat Anda tergolong rendah, ini sering ditemukan pada atlet atau individu dengan kebugaran tinggi.";
        advice = "Pertahankan pola latihan yang sehat dan rutin lakukan pemantauan detak jantung.";
    } else if (rhr >= 60 && rhr <= 100) {
        classification = "Normal";
        explanation = "Detak jantung istirahat Anda berada dalam rentang normal. Ini menunjukkan kesehatan jantung yang baik.";
        advice = "Pastikan tetap aktif dan jaga pola hidup sehat.";
    } else {
        classification = "Tinggi";
        explanation = "Detak jantung istirahat Anda lebih tinggi dari normal, yang dapat mengindikasikan stres, dehidrasi, atau kondisi kesehatan lainnya.";
        advice = "Coba lakukan teknik relaksasi, tingkatkan aktivitas fisik, dan pertimbangkan konsultasi dengan dokter jika tetap tinggi.";
    }

    // Tampilkan hasil di HTML
    document.getElementById("classification").innerText = classification;
    document.getElementById("heart-zone").innerText = heartZone;
    document.getElementById("max-heart-rate").innerText = maxHeartRate;
    document.getElementById("explanation").innerText = explanation;
    document.getElementById("advice").innerText = advice;

    // Tampilkan hasil perhitungan
    document.getElementById("result-container").classList.remove("hidden");
}
