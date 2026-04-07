import Navbar from "@/components/Navbar";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function ConsultationPage() {
  return (
    <main className="bg-[#0B2A4A] text-white">
      <Navbar />
      <ConsultationForm />
      <Footer />
    </main>
  );
}
