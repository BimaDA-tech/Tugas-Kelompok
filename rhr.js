function calculateRHR() {
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let rhrInput = document.getElementById("rhr").value;
    
    // Validasi jika ada input yang belum diisi
    if (!dob || !gender || !rhrInput) {
        alert("Harap isi semua data dengan benar!");
        return;
    }

    let rhr = parseInt(rhrInput);
    let classification = "";
    let heartZone = "";
    let maxHeartRate = "190";
    let explanation = "";
    let advice = "";

    if (rhr >= 80) {
        classification = "Lemah";
        heartZone = "114 - 133";
        explanation = "Anda punya detak jantung istirahat (RHR) yang buruk. RHR Anda berada dalam kisaran tertinggi dan menandakan risiko penyakit kardiovaskular. Konsultasikan dengan dokter.";
        advice = "Jika RHR mencapai 80 bpm atau lebih terus-menerus, konsultasikan dengan dokter guna memahami cara memperlambat detak jantung Anda. Coba berhenti merokok, batasi kafein dan alkohol, serta rutin berolahraga.";
    } else if (rhr >= 60 && rhr < 80) {
        classification = "Normal";
        heartZone = "100 - 120";
        explanation = "RHR Anda berada dalam rentang normal. Tetap jaga pola hidup sehat untuk mempertahankan kesehatan jantung Anda.";
        advice = "Tetap aktif secara fisik, kelola stres dengan baik, dan makan makanan sehat untuk menjaga kesehatan jantung.";
    } else {
        classification = "Sangat Baik";
        heartZone = "90 - 110";
        explanation = "RHR Anda menunjukkan kondisi jantung yang baik. Olahraga dan pola hidup sehat membantu menjaga detak jantung rendah.";
        advice = "Lanjutkan gaya hidup sehat dan tetap aktif secara fisik.";
    }

    document.getElementById("classification").innerText = classification;
    document.getElementById("heart-zone").innerText = heartZone;
    document.getElementById("max-heart-rate").innerText = maxHeartRate;
    document.getElementById("explanation").innerText = explanation;
    document.getElementById("advice").innerText = advice;
    document.getElementById("result-container").classList.remove("hidden");
}
