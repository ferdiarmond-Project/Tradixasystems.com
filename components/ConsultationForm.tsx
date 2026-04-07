"use client";
import { useState } from "react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    company: "",
    businessType: "",
    systemNeeds: "",
    consultationDate: "",
    consultationTime: "",
  });

  const businessTypes = [
    "Retail",
    "Manufacturing",
    "Services",
    "F&B",
    "Healthcare",
    "Education",
    "Finance",
    "Other",
  ];

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      handleWhatsApp();
      setIsLoading(false);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const message = `Halo Tradixa, saya ingin konsultasi:

Nama: ${formData.fullName || "-"}
Email: ${formData.email || "-"}
WhatsApp: ${formData.whatsapp || "-"}
Perusahaan: ${formData.company || "-"}
Jenis Usaha: ${formData.businessType || "-"}

Kebutuhan:
${formData.systemNeeds || "-"}

Jadwal:
${formData.consultationDate || "-"} - ${formData.consultationTime || "-"}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "6281383882120";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-[#071A2E] via-[#0A2B4C] to-[#081F38] py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Jadwalkan Konsultasi Gratis
          </h1>
          <p className="text-gray-300 text-lg">
            Diskusikan kebutuhan bisnis Anda bersama tim kami
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Nama & Email */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Contoh: Budi Santoso"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="contoh@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
              </div>
            </div>

            {/* Row 2: WhatsApp & Perusahaan */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="62812345678"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Nama Perusahaan / Bisnis
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="PT. Contoh Jaya"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
              </div>
            </div>

            {/* Row 3: Jenis Usaha */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Jenis Usaha
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#071A2E]">
                  Pilih jenis usaha...
                </option>
                {businessTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#071A2E]">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 4: Kebutuhan Sistem */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Kebutuhan Sistem
              </label>
              <textarea
                name="systemNeeds"
                placeholder="Jelaskan kebutuhan sistem yang Anda inginkan..."
                value={formData.systemNeeds}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition resize-none"
              />
            </div>

            {/* Row 5: Jadwal Konsultasi */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Tanggal Konsultasi
                </label>
                <input
                  type="date"
                  name="consultationDate"
                  value={formData.consultationDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Jam Konsultasi
                </label>
                <input
                  type="time"
                  name="consultationTime"
                  value={formData.consultationTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sedang Memproses...
                  </>
                ) : (
                  "Jadwalkan Sekarang"
                )}
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold py-3 rounded-lg transition duration-200"
              >
                Hubungi via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
