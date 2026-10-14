import { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    nav: {
      about: "About Us",
      process: "5-Stage Process",
      whyUs: "Why Ecoidn",
      products: "rPellets Spec",
      zeroWaste: "Zero Waste & ZLD",
      web3: "Web3 Roadmap",
      liveBtn: "Live IoT",
      backHome: "Back to Corporate Profile"
    },
    ticker: [
      "PLANT LOCATION: CILEGON INDUSTRIAL ESTATE",
      "CORE FOCUS: VIRGIN-EQUIVALENT rHDPE & rPET",
      "MOISTURE CONTROL: 1% – 2% THERMAL DRYING",
      "WATER SYSTEM: 100% ZLD CLOSED-LOOP IPAL",
      "WEB3 STATUS: IN ARCHITECTURE & R&D PHASE"
    ],
    hero: {
      badge: "Precision Polymer Recycling • Cilegon, Indonesia",
      title1: "FROM DIRTY POST-CONSUMER WASTE TO",
      titleHighlight: "VIRGIN-GRADE",
      title2: "PLASTIC PELLETS.",
      subtitle: "Manufacturers hesitate to use recycled pellets due to odor, moisture, and inconsistent Melt Flow Index. Ecoidn eliminates these risks through robotic Computer Vision sorting, hot caustic NaOH washing, 1–2% moisture control, and vacuum-degassed pelletizing.",
      ctaPrimary: "Explore 5-Stage Process",
      ctaSecondary: "View Material Datasheet",
      hudTitle: "Robotic Conveyor Camera 01",
      hudModel: "AI Vision: YOLOv11 • Pneumatic Ejector: Active",
      stat1Label: "POLYMER PURITY",
      stat2Label: "MOISTURE LEVEL",
      stat3Label: "WATER RECIRCULATION"
    },
    about: {
      tag: "About Us",
      title: "Engineered Like a Petrochemical Plant. Built for the Circular Economy.",
      p1: "Conventional recycling in Indonesia relies heavily on manual sorting and cold-water rinsing. The result is degraded plastic pellets filled with micro-contaminants, burnt black specks, and trapped gas bubbles that ruin injection and blow-molding machines.",
      p2: "Ecoidn was founded to bridge the gap between dirty post-consumer waste and strict industrial manufacturing standards. By combining heavy mechanical engineering with automated optical sorting and chemical purification, we transform the dirtiest post-consumer plastics into secondary raw materials that perform like virgin resin.",
      cards: [
        {
          label: "Quality Standard 01",
          title: "Consistent Melt Flow (MFI)",
          desc: "No sudden viscosity drops on your factory floor. Every batch is homogenized for stable extrusion and molding."
        },
        {
          label: "Quality Standard 02",
          title: "Odor & Bacteria Free",
          desc: "85°C thermal washing with caustic soda (NaOH) strips away stubborn oils, glues, and organic bacteria completely."
        },
        {
          label: "Quality Standard 03",
          title: "1–2% Moisture Guarantee",
          desc: "Centrifugal dewatering and thermal desiccant drying prevent bubbling or structural weakness in your final product."
        },
        {
          label: "Quality Standard 04",
          title: "Immutable Mass Validation",
          desc: "Every outgoing 200kg bag is weighed via industrial IoT load cells and stamped with a cryptographic SHA-256 batch hash."
        }
      ]
    },
    process: {
      tag: "5-Stage Process",
      title: "The 5-Stage Virgin-Equivalent Purification",
      subtitle: "How we turn heavily contaminated municipal waste into ultra-clean industrial pellets.",
      steps: [
        {
          step: "STAGE 01",
          name: "Robotic Conveyor & Computer Vision Sorting",
          tech: "YOLO11 Edge AI & Pneumatic Air Jets",
          desc: "Dirty raw materials run across a high-speed conveyor. Our YOLO11 computer vision camera scans polymer types and colors in milliseconds, triggering robotic pneumatic air-jets to shoot out PVC, metals, and non-target plastics with >98% accuracy—zero human fatigue."
        },
        {
          step: "STAGE 02",
          name: "Heavy-Duty Wet Shredding & Crushing",
          tech: "SKD-11 Alloy Blades & Friction Pre-Wash",
          desc: "Sorted plastics are fed into high-torque wet granulators. Cutting under continuous water spray reduces blade friction heat, prevents polymer thermal degradation, and produces uniform 10–14mm flakes."
        },
        {
          step: "STAGE 03",
          name: "Hot Water & Caustic Soda (NaOH) Chemical Wash",
          tech: "85°C Turbo Hot Washer & Sink-Float Tank",
          desc: "Flakes enter a high-friction thermal reactor at 85°C mixed with precise doses of Caustic Soda (NaOH) and industrial surfactants. This strips stubborn label adhesives, grease, and organic odors while sterilizing bacteria."
        },
        {
          step: "STAGE 04",
          name: "Centrifugal & Thermal Drying (1% – 2% Moisture)",
          tech: "2,200 RPM Dewatering & Hot Air Cyclone",
          desc: "Wet flakes undergo mechanical high-speed spinning followed by multi-stage thermal cyclone piping. Moisture content is strictly locked between 1% to 2% before entering the extruder."
        },
        {
          step: "STAGE 05",
          name: "Vacuum Pelletizing & IoT Hashing Scale",
          tech: "150-Micron Laser Filter & ESP32 Load Cell",
          desc: "Twin-screw extrusion with dual vacuum degassing removes volatile gases. Molten plastic passes through a 150-micron filter, is cut into uniform pellets, and weighed on our Node-C IoT scale to generate a SHA-256 Digital Batch Hash."
        }
      ]
    },
    whyUs: {
      tag: "Why Ecoidn",
      title: "Why Manufacturers Switch to Ecoidn rPellets",
      colParameter: "Quality Parameter",
      colVirgin: "Virgin Resin",
      colTraditional: "Conventional Recycled",
      colEcoidn: "Ecoidn Engineered rPellet",
      rows: [
        { param: "Polymer Purity", virgin: "99.9%", trad: "82% – 90% (Manual Sort)", eco: "> 98.5% (AI Vision Verified)" },
        { param: "Moisture Content", virgin: "< 0.5%", trad: "4% – 7% (Causes Bubbles)", eco: "1% – 2% (Thermal Dried)" },
        { param: "Odor & Hygiene", virgin: "Neutral", trad: "Foul / Sour Smell", eco: "Sanitized (85°C NaOH Wash)" },
        { param: "Black Specks / Carbon", virgin: "None", trad: "High Contamination", eco: "150-Micron Filtered" },
        { param: "ESG & Traceability", virgin: "High Carbon Footprint", trad: "Unverified / Opaque", eco: "IoT & SHA-256 Batch Hash" }
      ]
    },
    products: {
      tag: "rPellets Spec",
      title: "Industrial-Grade Secondary Polymers",
      standard: "GRS Ready Specification",
      hdpe: {
        sku: "Product Code: ECO-HDPE-01",
        name: "rHDPE Natural & Color Pellets",
        grade: "Blow Molding & Injection Grade",
        desc: "Engineered from post-consumer HDPE bottles. High stiffness and environmental stress crack resistance (ESCR). Direct drop-in replacement for chemical jerrycans, detergent bottles, and industrial pipes.",
        specs: [
          ["MELT FLOW INDEX (MFI)", "0.35 – 0.80 g/10 min (190°C/2.16kg)"],
          ["DENSITY", "0.952 – 0.958 g/cm³"],
          ["MOISTURE LEVEL", "1.0% – 1.8% (Guaranteed)"],
          ["FILTRATION", "120 – 150 Micron Melt Filter"],
          ["PACKAGING", "200kg / 1000kg Jumbo Bag + QR Hash"]
        ]
      },
      pet: {
        sku: "Product Code: ECO-PET-02",
        name: "rPET Hot-Washed Clear Flakes & Pellets",
        grade: "Sheet, Fiber & Strapping Grade",
        desc: "Optically purified PET free from PVC, metal, and polyolefin cap rings. Processed through caustic thermal reactors to preserve Intrinsic Viscosity (IV) and crystal clarity.",
        specs: [
          ["INTRINSIC VISCOSITY (IV)", "0.72 – 0.80 dL/g"],
          ["PVC CONTAMINATION", "< 30 ppm (YOLO11 Optical Sort)"],
          ["MOISTURE LEVEL", "1.0% – 1.5% (Desiccant Dried)"],
          ["RESIDUAL ALKALI (NaOH)", "pH Neutralized (Closed-Loop Rinse)"],
          ["PACKAGING", "200kg / 1000kg Jumbo Bag + QR Hash"]
        ]
      }
    },
    zeroWaste: {
      tag: "Zero Waste & ZLD",
      title: "100% Zero-Waste Plant & Closed-Loop Water (ZLD)",
      subtitle: "We never dump chemical water or microplastic residue into the environment. Every by-product is captured, neutralized, and valorized.",
      items: [
        {
          code: "Closed-Loop Water Treatment",
          title: "Zero Liquid Discharge (Chemical Water Recycling)",
          desc: "Our 85°C Caustic Soda (NaOH) wash water is never discharged into public rivers. It enters our internal IPAL (Coagulation, Flocculation, & pH Neutralization), filtering out dirt so clean water is pumped 100% back into the washing line."
        },
        {
          code: "Solid Residue Recovery",
          title: "Microplastic Dust & Reject Pellet Valorization",
          desc: "Shredder fines caught by HEPA dust collectors and startup extruder purging chunks are never landfilled. They are compounded into heavy-duty Wood-Plastic Composite (WPC) lumber and industrial pallets."
        },
        {
          code: "Sludge to Energy",
          title: "Paper Labels & IPAL Sludge to Alternative Fuel",
          desc: "Pulped paper labels and pressed cake sludge from our water treatment tanks are dried and diverted as Refuse-Derived Fuel (RDF) briquettes for cement kilns—achieving zero landfill footprint."
        }
      ]
    },
    web3: {
      tag: "Web3 Roadmap",
      statusBadge: "PHASE 2 DEVELOPMENT — CURRENTLY IN ARCHITECTURE & R&D",
      title: "Upcoming: Web3 Digital Passports & 'Eco-in' B2B Tokenomics",
      desc: "While our physical production line and IoT load-cell hashing are engineered for immediate B2B material supply, our decentralized blockchain layer (Eco-in Token & Automated Smart Contract Claims) is currently under active development and security auditing.",
      features: [
        {
          title: "Stage 1 (Active Design): IoT Weight & Hash Logging",
          desc: "Every pellet batch weighed on our output scale generates a unique digital fingerprint recording net mass, polymer grade, and AI purity."
        },
        {
          title: "Stage 2 (In R&D): B2B 'Buy-and-Earn' Token Claims",
          desc: "Soon, corporate buyers will scan the QR code on every 200kg bag to verify ESG carbon savings and claim dynamic Eco-in crypto rewards (75% Treasury / 25% B2B Reward Pool)."
        }
      ],
      ctaBoxTitle: "Follow Our Web3 & Plant Launch Updates",
      ctaBoxSub: "Partner with us for virgin-grade rPellet supply today, and get priority whitelist access as we roll out the Eco-in Web3 ecosystem.",
      emailBtn: "Contact B2B Sales & R&D Team",
      socialBtn: "Follow Updates on LinkedIn / X"
    }
  },
  id: {
    nav: {
      about: "Tentang Kami",
      process: "5 Tahap Proses",
      whyUs: "Keunggulan",
      products: "Spesifikasi Pelet",
      zeroWaste: "Zero Waste & IPAL",
      web3: "Roadmap Web3",
      liveBtn: "Telemetri IoT",
      backHome: "Kembali ke Profil Utama"
    },
    ticker: [
      "LOKASI PABRIK: KAWASAN INDUSTRI CILEGON",
      "FOKUS UTAMA: BIJI PLASTIK rHDPE & rPET SETARA VIRGIN",
      "KADAR AIR: 1% – 2% PENGERINGAN TERMAL",
      "SISTEM AIR: 100% ZLD IPAL SIRKULAR TERTUTUP",
      "STATUS WEB3: TAHAP PERANCANGAN & PENGEMBANGAN"
    ],
    hero: {
      badge: "Manufaktur Daur Ulang Presisi • Cilegon, Indonesia",
      title1: "DARI SAMPAH PLASTIK KOTOR MENJADI",
      titleHighlight: "BIJI PLASTIK SETARA VIRGIN",
      title2: "BERSTANDAR INDUSTRI.",
      subtitle: "Banyak pabrik manufaktur ragu memakai biji plastik daur ulang karena bau menyengat, kadar air tinggi, dan MFI yang tidak stabil. Ecoidn menghapus risiko tersebut melalui pemilahan konveyor berteknologi Robot & Computer Vision, pencucian air panas + Soda Api (NaOH), pengeringan presisi 1–2%, hingga ekstrusi vakum.",
      ctaPrimary: "Pelajari 5 Tahap Proses",
      ctaSecondary: "Lihat Spesifikasi Pelet",
      hudTitle: "Kamera Konveyor Sortir 01",
      hudModel: "AI Vision: YOLOv11 • Katup Pneumatik: Aktif",
      stat1Label: "KEMURNIAN POLIMER",
      stat2Label: "KADAR AIR (MOISTURE)",
      stat3Label: "SIRKULASI AIR IPAL"
    },
    about: {
      tag: "Tentang Kami",
      title: "Dirancang Setangguh Pabrik Petrokimia. Dibangun untuk Ekonomi Sirkular.",
      p1: "Daur ulang konvensional umumnya hanya mengandalkan sortir tangan manusia dan bilasan air dingin. Hasilnya adalah biji plastik yang terdegradasi, penuh bintik hitam karbon (black specks), berbau asam, dan menyimpan uap air yang merusak cetakan mesin Injection maupun Blow Molding Anda.",
      p2: "Ecoidn hadir untuk menjawab keraguan industri B2B. Kami memadukan rekayasa mesin berat dengan otomatisasi Computer Vision dan pemurnian kimia terukur. Kami mengolah sampah pasca-konsumsi paling kotor sekalipun menjadi bahan baku sekunder yang bersih, homogen, dan memiliki performa mekanis menyerupai plastik Virgin.",
      cards: [
        {
          label: "Standar Kualitas 01",
          title: "Melt Flow Index (MFI) Stabil",
          desc: "Tanpa fluktuasi viskositas mendadak di mesin produksi Anda. Setiap batch dihomogenisasi untuk ekstrusi yang mulus."
        },
        {
          label: "Standar Kualitas 02",
          title: "Bebas Bau & Bakteri (Steril)",
          desc: "Pencucian gesek air panas 85°C dengan cairan kimia Soda Api (NaOH) melunturkan minyak, lem label, dan membunuh kuman."
        },
        {
          label: "Standar Kualitas 03",
          title: "Jaminan Kadar Air 1% – 2%",
          desc: "Pengeringan sentrifugal dan udara panas mencegah cacat gelembung (bubbling) atau kerapuhan pada produk akhir Anda."
        },
        {
          label: "Standar Kualitas 04",
          title: "Validasi Timbangan IoT",
          desc: "Setiap karung output 200kg divalidasi oleh sensor timbangan digital untuk menghasilkan kode Hash / keaslian batch."
        }
      ]
    },
    process: {
      tag: "5 Tahap Proses",
      title: "5 Tahap Pemurnian Menuju Kualitas Setara Virgin",
      subtitle: "Bagaimana kami menyulap limbah kotor menjadi biji plastik murni berstandar ekspor.",
      steps: [
        {
          step: "TAHAP 01",
          name: "Konveyor Otomatis, Robotika & Computer Vision",
          tech: "YOLO11 Edge AI & Penembak Udara Pneumatik",
          desc: "Sampah plastik berjalan di atas konveyor berkecepatan tinggi. Kamera AI (YOLO11) mendeteksi jenis polimer dan warna secara real-time, lalu memerintahkan katup robotik pneumatik untuk menembak keluar kontaminan (PVC, logam, plastik beda jenis) dengan akurasi >98% tanpa kelelahan manusia."
        },
        {
          step: "TAHAP 02",
          name: "Pencacahan Basah Presisi Tinggi (Wet Shredding)",
          tech: "Pisau Baja SKD-11 & Pre-Wash Gesek",
          desc: "Plastik yang telah terpilah dicacah di dalam mesin Crusher tugas berat dengan semprotan air bertekanan. Metode basah ini menahan panas gesekan pisau agar rantai polimer tidak rusak, menghasilkan serpihan (flakes) seragam berukuran 10–14mm."
        },
        {
          step: "TAHAP 03",
          name: "Pencucian Air Hangat (85°C) & Cairan Kimia (NaOH)",
          tech: "Turbo Hot Washer & Tangki Sink-Float",
          desc: "Serpihan masuk ke reaktor pencucian air hangat 85°C yang dipadukan dengan takaran presisi cairan kimia Soda Api (NaOH) dan deterjen industri. Proses ini merontokkan sisa lem stiker, minyak membandel, serta membunuh bakteri penyebab bau."
        },
        {
          step: "TAHAP 04",
          name: "Pengeringan Sentrifugal & Termal (Kadar Air 1% – 2%)",
          tech: "Dewatering 2.200 RPM & Pipa Siklon Panas",
          desc: "Serpihan bersih diperas dengan putaran sentrifugal berkecepatan tinggi lalu dialirkan melalui pipa pemanas siklon bertingkat. Kadar air dikunci secara ketat pada angka 1% hingga 2% sebelum masuk ke mesin pelelehan."
        },
        {
          step: "TAHAP 05",
          name: "Pelletizing Vakum & Timbangan Validasi Hashing",
          tech: "Filter Laser 150-Mikron & Timbangan IoT ESP32",
          desc: "Pelelehan ekstrusi dengan penghisap gas vakum ganda (degassing) memastikan pelet padat tanpa rongga udara. Lelehan disaring lewat filter 150-mikron, dipotong menjadi biji plastik sempurna, lalu ditimbang di Node-C IoT untuk pencetakan Hash kriptografi."
        }
      ]
    },
    whyUs: {
      tag: "Keunggulan",
      title: "Mengapa Manufaktur B2B Beralih ke Biji Plastik Ecoidn",
      colParameter: "Parameter Kualitas",
      colVirgin: "Plastik Virgin Murni",
      colTraditional: "Daur Ulang Konvensional",
      colEcoidn: "rPellet Presisi Ecoidn",
      rows: [
        { param: "Kemurnian Polimer", virgin: "99.9%", trad: "82% – 90% (Sortir Manual)", eco: "> 98.5% (Sortir Robot & AI)" },
        { param: "Kadar Air (Moisture)", virgin: "< 0.5%", trad: "4% – 7% (Memicu Gelembung)", eco: "1% – 2% (Pengeringan Termal)" },
        { param: "Bau & Higienitas", virgin: "Netral", trad: "Bau Menyengat / Asam", eco: "Steril (Cuci Panas 85°C + Kimia)" },
        { param: "Bintik Hitam (Karbon)", virgin: "Nol", trad: "Banyak Kontaminasi", eco: "Bersih (Filter 150-Mikron)" },
        { param: "Bukti ESG & Lacak Data", virgin: "Emisi Karbon Tinggi", trad: "Tidak Terlacak / Gelap", eco: "Timbangan IoT & Hash Batch" }
      ]
    },
    products: {
      tag: "Spesifikasi Pelet",
      title: "Katalog Biji Plastik Daur Ulang Kelas Industri",
      standard: "Standar Mutu Siap GRS",
      hdpe: {
        sku: "Kode Produk: ECO-HDPE-01",
        name: "Biji Plastik rHDPE (Natural & Warna)",
        grade: "Blow Molding & Injection Grade",
        desc: "Diolah dari limbah botol HDPE pilihan melalui pencucian panas kimiawi dan ekstrusi vakum. Memiliki ketahanan retak (ESCR) dan kekakuan tinggi. Siap dicampur langsung untuk produksi jerigen kimia, botol kemasan FMCG, dan pipa.",
        specs: [
          ["MELT FLOW INDEX (MFI)", "0.35 – 0.80 g/10 mnt (190°C/2.16kg)"],
          ["MASSA JENIS (DENSITY)", "0.952 – 0.958 g/cm³"],
          ["KADAR AIR (MOISTURE)", "1.0% – 1.8% (Terjamin)"],
          ["FILTRASI LELEHAN", "120 – 150 Mikron Saringan Baja"],
          ["KEMASAN DISTRIBUSI", "Karung 200kg / 1000kg + QR Hash"]
        ]
      },
      pet: {
        sku: "Kode Produk: ECO-PET-02",
        name: "Serpihan & Pelet rPET Bening (Hot-Washed)",
        grade: "Thermoforming, Serat Fiber & Strapping",
        desc: "Dimurnikan secara optik (bebas kontaminasi PVC, logam, dan cincin tutup botol). Dicuci dalam reaktor kaustik panas untuk menjaga kejernihan kristal serta kestabilan Intrinsic Viscosity (IV).",
        specs: [
          ["INTRINSIC VISCOSITY (IV)", "0.72 – 0.80 dL/g"],
          ["KONTAMINASI PVC", "< 30 ppm (Terverifikasi Kamera AI)"],
          ["KADAR AIR (MOISTURE)", "1.0% – 1.5% (Kering Termal)"],
          ["RESIDU KIMIA (NaOH)", "pH Netral (Bilasan Sirkular)"],
          ["KEMASAN DISTRIBUSI", "Karung 200kg / 1000kg + QR Hash"]
        ]
      }
    },
    zeroWaste: {
      tag: "Zero Waste & IPAL",
      title: "Operasional 100% Zero Waste & Sirkulasi Air Limbah (ZLD)",
      subtitle: "Kami menjaga kredibilitas ESG mitra kami. Tidak ada setetes pun limbah cairan kimia atau residu plastik yang kami buang ke sungai maupun TPA.",
      items: [
        {
          code: "Sirkulasi Air Tertutup",
          title: "Zero Liquid Discharge (Daur Ulang Air Limbah Kimia)",
          desc: "Air bekas pencucian hangat yang mengandung cairan kimia (NaOH) dan kotoran TIDAK dibuang ke lingkungan. Seluruhnya masuk ke instalasi IPAL tertutup kami (koagulasi, flokulasi, dan netralisasi pH) hingga jernih kembali dan dipompa 100% kembali ke mesin pencucian."
        },
        {
          code: "Pemanfaatan Residu Padat",
          title: "Pemanfaatan Debu Mikroplastik & Pelet Gagal",
          desc: "Debu plastik dari mesin pencacah yang ditangkap filter HEPA serta lelehan plastik awal (purging) tidak pernah dibuang. Residu ini kami cetak kembali menjadi produk komposit papan kayu plastik (WPC) dan palet gudang."
        },
        {
          code: "Konversi Energi Alternatif",
          title: "Konversi Lumpur IPAL & Kertas Label Menjadi Bahan Bakar",
          desc: "Endapan lumpur kotoran dari tangki IPAL serta hancuran kertas label dipres hingga kering, lalu disalurkan sebagai briket bahan bakar alternatif (Refuse-Derived Fuel / RDF) untuk industri semen—menciptakan pabrik 0% limbah."
        }
      ]
    },
    web3: {
      tag: "Roadmap Web3",
      statusBadge: "PENGEMBANGAN TAHAP 2 — SEDANG DALAM PERANCANGAN & RISET",
      title: "Segera Hadir: Paspor Digital Web3 & Kriptonisasi 'Eco-in'",
      desc: "Saat ini fokus utama kami adalah menyuplai biji plastik berkualitas setara Virgin untuk industri B2B. Sementara itu, integrasi blockchain, Smart Contract, dan peluncuran token kripto insentif (Eco-in) sedang berada dalam tahap perancangan arsitektur dan pengujian keamanan internal.",
      features: [
        {
          title: "Tahap 1 (Fondasi Aktif): Validasi Timbangan IoT & Hashing",
          desc: "Setiap batch pelet yang selesai diproduksi ditimbang secara otomatis untuk menghasilkan kode identifikasi digital (SHA-256 Hash) sebagai cikal bakal tokenomics."
        },
        {
          title: "Tahap 2 (Dalam R&D): Klaim Kripto 'Buy-and-Earn' untuk Konsumen B2B",
          desc: "Ke depannya, perusahaan pembeli pelet kami dapat memindai QR Code pada kemasan untuk mengklaim reward kripto Eco-in (Alokasi 75% Pabrik : 25% Klaim Konsumen) yang terintegrasi dengan laporan pengurangan jejak karbon ESG."
        }
      ],
      ctaBoxTitle: "Ikuti Perkembangan Peluncuran Web3 & Pabrik Kami",
      ctaBoxSub: "Dapatkan suplai sampel biji plastik berkualitas tinggi atau ikuti update peluncuran ekosistem kripto Eco-in melalui saluran resmi kami di bawah ini:",
      emailBtn: "Hubungi Tim B2B & R&D via Email",
      socialBtn: "Ikuti Update di Sosial Media"
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('id');

  const toggleLanguage = (selectedLang) => {
    setLang(selectedLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);