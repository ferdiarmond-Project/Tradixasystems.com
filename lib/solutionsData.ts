export const solutionsContent: Record<string, {
  title: string;
  pengertian: string;
  fiturUtama: string[];
  manfaat: string[];
  lottieConcept: {
    title: string;
    description: string;
    styleProps: string[];
  }
}> = {
  "erp-management": {
    title: "ERP & Management System",
    pengertian: "Sistem ERP (Enterprise Resource Planning) adalah solusi terintegrasi yang menghubungkan seluruh proses bisnis dalam satu platform terpusat. Sistem ini memungkinkan perusahaan memonitor operasional, mengelola sumber daya, dan mengambil keputusan secara real-time dengan lebih akurat.",
    fiturUtama: [
      "Dashboard operasional real-time",
      "Integrasi antar divisi dan proses bisnis",
      "Manajemen workflow & task",
      "Role dan hak akses pengguna",
      "Laporan dan analisis bisnis"
    ],
    manfaat: [
      "Operasional lebih terstruktur dan efisien",
      "Data terpusat dan mudah diakses",
      "Pengambilan keputusan lebih cepat",
      "Skalabilitas bisnis lebih siap berkembang"
    ],
    lottieConcept: {
      title: "ERP Data Flow Concept",
      description: "Semua data bisnis terintegrasi dalam satu dashboard yang dinamis.",
      styleProps: ["Dashboard", "Grafik Animasi", "Data Flow antar modul"]
    }
  },
  "accounting-finance": {
    title: "Accounting & Finance",
    pengertian: "Sistem accounting & finance membantu bisnis dalam mengelola dan memantau seluruh aktivitas keuangan secara otomatis. Mulai dari pencatatan transaksi hingga laporan keuangan dapat dilakukan secara lebih akurat dan terintegrasi.",
    fiturUtama: [
      "Laporan laba rugi dan neraca otomatis",
      "Tracking cash flow secara real-time",
      "Invoice dan billing system",
      "Integrasi transaksi keuangan",
      "Manajemen pajak dan pembukuan"
    ],
    manfaat: [
      "Keuangan lebih transparan dan terkontrol",
      "Mengurangi kesalahan pencatatan manual",
      "Mempermudah audit dan pelaporan",
      "Monitoring profit dan cash flow lebih akurat"
    ],
    lottieConcept: {
      title: "Finance & Cash Flow Concept",
      description: "Mulai dari keuangan, operasional, hingga performa penjualan, semuanya tersinkron secara real-time untuk membantu Anda mengambil keputusan dengan lebih cepat dan tepat.",
      styleProps: ["Aliran Uang Digital", "Invoice Validation", "Laporan Keuangan"]
    }
  },
  "inventory-warehouse": {
    title: "Inventory & Warehouse",
    pengertian: "Sistem inventory & warehouse digunakan untuk mengelola stok barang secara real-time, mulai dari proses masuk, penyimpanan, hingga distribusi. Sistem ini membantu memastikan ketersediaan barang tetap optimal.",
    fiturUtama: [
      "Monitoring stok secara real-time",
      "Multi gudang dan lokasi penyimpanan",
      "Notifikasi stok minimum",
      "Tracking barang masuk dan keluar",
      "Integrasi barcode atau QR system"
    ],
    manfaat: [
      "Stok lebih akurat dan terkontrol",
      "Menghindari overstock atau kekurangan barang",
      "Efisiensi pengelolaan gudang",
      "Distribusi barang lebih terstruktur"
    ],
    lottieConcept: {
      title: "Warehouse Tracking Concept",
      description: "Pantau pergerakan stok dan pengelolaan gudang secara real-time dengan sistem yang terstruktur. Memastikan ketersediaan barang tetap optimal, meminimalkan kesalahan, dan meningkatkan efisiensi operasional.",
      styleProps: ["Box Logistik Animasi", "Gudang Digital", "Tracking Barcode Scanner"]
    }
  },
  "pos-sales": {
    title: "POS & Sales System",
    pengertian: "Point of Sale (POS) adalah sistem yang digunakan untuk memproses transaksi penjualan secara digital dan terintegrasi. Sistem ini tidak hanya mencatat transaksi, tetapi juga terhubung langsung dengan inventory dan laporan bisnis.",
    fiturUtama: [
      "Transaksi kasir digital",
      "Integrasi stok otomatis",
      "Laporan penjualan real-time",
      "Pengaturan diskon dan promo",
      "Multi outlet management"
    ],
    manfaat: [
      "Proses transaksi lebih cepat dan akurat",
      "Data penjualan langsung tercatat",
      "Analisis performa produk lebih mudah",
      "Meningkatkan kualitas pelayanan pelanggan"
    ],
    lottieConcept: {
      title: "Digital POS Transaction Concept",
      description: "Sistem kasir digital yang terintegrasi dengan manajemen penjualan dan laporan otomatis. Mempercepat transaksi, memudahkan monitoring penjualan, dan meningkatkan pengalaman pelanggan.",
      styleProps: ["Transaksi Digital", "Interaksi Kasir", "Pembayaran Sukses"]
    }
  },
  "crm-customer": {
    title: "CRM & Customer System",
    pengertian: "CRM (Customer Relationship Management) adalah sistem yang membantu bisnis dalam mengelola data dan interaksi pelanggan secara terstruktur. Sistem ini memungkinkan perusahaan membangun hubungan jangka panjang dengan pelanggan.",
    fiturUtama: [
      "Database pelanggan terpusat",
      "Tracking interaksi dan histori customer",
      "Sistem follow-up otomatis",
      "Segmentasi pelanggan",
      "Loyalty dan retention program"
    ],
    manfaat: [
      "Hubungan pelanggan lebih terjaga",
      "Meningkatkan repeat order",
      "Strategi marketing lebih tepat sasaran",
      "Insight perilaku pelanggan lebih dalam"
    ],
    lottieConcept: {
      title: "Customer Relation Network Concept",
      description: "Kelola hubungan pelanggan secara terpusat dengan data yang terorganisir dan terintegrasi. Membantu meningkatkan loyalitas pelanggan, efektivitas komunikasi, dan pertumbuhan bisnis.",
      styleProps: ["User Network", "Relasi Komunikasi", "Customer Success"]
    }
  }
};
