import { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    nav: {
      company: "Company",
      operations: "Operations",
      products: "Polymer Catalog",
      contactWeb3: "Web3 & Contact",
      about: "About Us",
      whyUs: "Why Ecoidn",
      zeroWaste: "Waste & Water Loop",
      sourcing: "Material Sourcing",
      process: "Production Process",
      web3: "Web3 Roadmap",
      contact: "Contact Us",
      liveBtn: "Live IoT"
    },
    ticker: [
      "INDUSTRIAL GRADE RIGID POLYMER RECYCLING",
      "CORE MATERIALS: PET, HDPE, PP, ABS, HIPS, PC",
      "FILTRATION: 80 – 120 MESH MELT SCREEN",
      "WATER SYSTEM: CLOSED-LOOP IPAL RECIRCULATION",
      "TRIAL SAMPLES AVAILABLE FOR MACHINE TESTING"
    ],
    hero: {
      badge: "Precision Mechanical Recycling • Indonesia",
      title1: "ENGINEERED SECONDARY POLYMERS WITH",
      titleHighlight: "CONSISTENT",
      title2: "INDUSTRIAL QUALITY.",
      subtitle: "We process post-consumer rigid plastics into clean, homogenized recycled pellets designed for stable molding and extrusion. Through AI-assisted sorting, hot caustic washing with pH-neutral rinsing, and fine melt filtration, we minimize odor, moisture defects, and melt flow fluctuation.",
      ctaPrimary: "Explore 6-Stage Process",
      ctaSecondary: "View Technical Data",
      hudTitle: "Conveyor QC Camera 01",
      hudModel: "AI Vision: YOLOv11 • Pneumatic Rejector: Active",
      stat1Val: "≥ 98.5%",
      stat1Label: "TARGET POLYMER PURITY",
      stat2Val: "80–120 Mesh",
      stat2Label: "MELT FILTRATION",
      stat3Val: "Closed-Loop",
      stat3Label: "IPAL WATER REUSE"
    },
    about: {
      tag: "About Us",
      title: "Practical Process Engineering. Consistent Batch Quality.",
      p1: "Manufacturers often hesitate to increase recycled content due to unstable Melt Flow Index (MFI), foul odors, black specks, and high moisture—common flaws caused by manual-only sorting and cold-water washing.",
      p2: "Ecoidn focuses on disciplined mechanical recycling fundamentals. By combining Edge AI sorting on the primary line with offline manual recovery, caustic hot washing, thorough pH-neutral rinsing, and controlled drying, we produce reliable Prime Recycled pellets ready for industrial blending or direct non-food production.",
      cards: [
        {
          label: "Quality Focus 01",
          title: "Controlled Melt Flow (MFI)",
          desc: "Strict single-polymer batch isolation keeps viscosity within predictable processing windows for injection and blow molding."
        },
        {
          label: "Quality Focus 02",
          title: "Hot Wash & pH-Neutral Rinse",
          desc: "75–85°C washing with NaOH and low-foam industrial surfactants strips grease and glue, followed by clean water rinsing to remove chemical residue."
        },
        {
          label: "Quality Focus 03",
          title: "Low Moisture & Low Ash",
          desc: "Mechanical dewatering and thermal drying reduce moisture defects, while fine melt screening lowers inorganic ash and black specks."
        },
        {
          label: "Quality Focus 04",
          title: "In-House QC & Sample Trials",
          desc: "Internal moisture, MFI, and visual contamination checks on every production lot—with trial bags available for direct machine testing."
        }
      ]
    },
    sourcing: {
      tag: "Material Sourcing",
      title: "Structured Sourcing & Tiered Pricing",
      subtitle: "Clean output starts at the intake gate. We educate local collectors and communities with transparent cash-based tiered pricing focused strictly on rigid plastics.",
      tiers: [
        {
          grade: "GRADE A",
          name: "Sorted & Clean Rigid Plastics",
          desc: "Rigid plastics separated by polymer type (PET, HDPE, PP, etc.), emptied of liquids, and free from flexible films or organic waste.",
          price: "PREMIUM RATE (+10–20% Above Standard)"
        },
        {
          grade: "GRADE B",
          name: "Mixed Rigid, Clean Condition",
          desc: "Multiple rigid plastic types mixed in one sack, free from heavy mud, food scraps, and flexible plastic bags.",
          price: "STANDARD MARKET RATE"
        },
        {
          grade: "GRADE C",
          name: "Contaminated / Mixed with Films",
          desc: "Plastics heavily soiled or mixed with flexible films and household trash that require extra labor and sorting cost.",
          price: "ADJUSTED RATE (Below Market)"
        }
      ]
    },
    process: {
      tag: "6-Stage Process",
      title: "Systematic Mechanical Purification Workflow",
      subtitle: "Each stage targets a specific root cause of recycled resin failure—from mixed polymers to residual chemicals and trapped moisture.",
      steps: [
        {
          step: "STAGE 01",
          name: "AI-Assisted Primary Conveyor Sorting",
          tech: "Edge AI Vision & Pneumatic Air Jets",
          desc: "Incoming rigid plastics move across a high-speed conveyor set for a single target batch (e.g., clear PET). Computer vision identifies non-target polymers, off-colors, and capped bottles, diverting them via pneumatic jets into a large recovery bunker."
        },
        {
          step: "STAGE 02",
          name: "Offline Manual Recovery & Prep",
          tech: "Dedicated Sorting & Visual QC Team",
          desc: "Instead of fatiguing manual line-picking, workers process the recovery bunker offline—removing stubborn caps, rings, and foreign objects, then grouping other rigid polymers cleanly for subsequent production runs."
        },
        {
          step: "STAGE 03",
          name: "Wet Crushing & Inter-Batch Flushing",
          tech: "VSD Granulator with Continuous Water Spray",
          desc: "Isolated polymers are granulated under continuous water injection to control blade friction heat and loosen surface grime. Variable Speed Drives adjust torque per polymer, and chambers are thoroughly flushed between batch changes."
        },
        {
          step: "STAGE 04",
          name: "Hot Caustic Wash & pH-Neutral Rinsing",
          tech: "75–85°C Friction Washer + Clean Rinse Tank",
          desc: "Flakes undergo heated friction washing with measured Caustic Soda (NaOH) and low-foam surfactants to break down adhesives, oils, and odors, followed immediately by multi-stage clean water rinsing to neutralize pH before drying."
        },
        {
          step: "STAGE 05",
          name: "Centrifugal Dewatering & Thermal Drying",
          tech: "High-RPM Spinner & Hot-Air Cyclone",
          desc: "Washed flakes are mechanically dewatered and dried through heated air cyclones to strip surface moisture. Hygroscopic resins such as PET and PC undergo deeper desiccant pre-drying prior to melt extrusion."
        },
        {
          step: "STAGE 06",
          name: "Vacuum-Degassed Extrusion, QC & IoT Weighing",
          tech: "80–120 Mesh Screen, In-House QC & Load Cell",
          desc: "Melted polymer is vacuum-degassed, filtered through fine steel mesh screens, and pelletized uniformly. Finished lots undergo moisture, MFI, and visual black-speck checks before digital IoT weighing and batch logging."
        }
      ]
    },
    whyUs: {
      tag: "Why Ecoidn",
      title: "Realistic Quality Positioning vs. Market Alternatives",
      colParameter: "Technical Parameter",
      colVirgin: "Virgin Petrochemical",
      colTraditional: "Conventional Recycled",
      colEcoidn: "Ecoidn Prime Recycled",
      rows: [
        { param: "Polymer Purity", virgin: "99.9% (Benchmark)", trad: "85% – 92% (Manual Sort)", eco: "≥ 98.5% (AI + Manual QC)" },
        { param: "Melt Filtration", virgin: "Not Required", trad: "Coarse / 40–60 Mesh", eco: "80 – 120 Mesh (Low Black Specks)" },
        { param: "Odor & Surface Cleanliness", virgin: "Neutral", trad: "Often Sour / Residual Glue", eco: "Hot NaOH Washed & pH-Neutral Rinsed" },
        { param: "Ash Content (Natural)", virgin: "< 0.1%", trad: "3% – 6% (Dirt / Fillers)", eco: "< 1.5% (No Filler Adulteration)" },
        { param: "Cost & Carbon Footprint", virgin: "Highest Cost & Emissions", trad: "Low Cost, High Reject Rate", eco: "Cost-Efficient & Lower Carbon Impact" }
      ]
    },
    products: {
      tag: "Polymer Catalog",
      title: "Typical Material Specifications (Non-Food Industrial)",
      standard: "ASTM D1238 / ISO 1133 Reference",
      availableGrades: "Available Color Variants",
      techSpecs: "Typical Target Specifications",
      qcDisclaimer: "Note: Values above represent typical target ranges for mechanical recycling per polymer family. Specific MFI or color matching can be discussed prior to production. We provide 25–50 kg sample bags for machine trials, and third-party lab testing (B4T / Sucofindo) is available upon request.",
      categories: [
        {
          id: "pet",
          name: "PET (Polyethylene Terephthalate)",
          desc: "Processed from clear and light-blue beverage bottles into clean non-food industrial pellets or hot-washed flakes. Carefully pre-dried before extrusion to minimize hydrolytic Intrinsic Viscosity (IV) loss. Suitable for strapping bands, polyester staple fiber (PSF), and non-food thermoformed sheets.",
          grades: ["Clear / Natural", "Light Blue / Bluish"],
          specs: [
            ["INTRINSIC VISCOSITY (PELLET)", "0.68 – 0.74 dL/g (Mechanical Grade)"],
            ["PVC CONTAMINATION", "< 50 ppm (Target)"],
            ["PACKED MOISTURE", "< 0.3% (Pre-dry to < 50 ppm before molding)"],
            ["ASH CONTENT", "< 0.5%"],
            ["MELT FILTRATION", "100 – 120 Mesh (125 – 150 µm)"],
            ["TYPICAL APPLICATIONS", "Strapping Bands, Fiber (PSF), Non-Food Sheets"]
          ]
        },
        {
          id: "hdpe",
          name: "HDPE (High Density Polyethylene)",
          desc: "Recycled from rigid chemical jerrycans, detergent bottles, and industrial containers. Separated by melt viscosity into Blow Molding and Injection Molding grades with good chemical resistance and stiffness.",
          grades: ["Natural", "White", "Mixed Colors", "Black"],
          specs: [
            ["MFI — BLOW GRADE", "0.3 – 0.9 g/10 min (190°C / 2.16 kg)"],
            ["MFI — INJECTION GRADE", "4.0 – 10.0 g/10 min (190°C / 2.16 kg)"],
            ["DENSITY", "0.945 – 0.960 g/cm³"],
            ["ASH CONTENT", "< 1.5% (Natural) | < 2.5% (Color)"],
            ["MELT FILTRATION", "80 – 100 Mesh"],
            ["TYPICAL APPLICATIONS", "Non-Food Jerrycans, Detergent Bottles, Pipes, Pallets"]
          ]
        },
        {
          id: "pp",
          name: "PP (Polypropylene)",
          desc: "Sourced from rigid food containers, beverage cups, caps, and household wares. Formulated for consistent flow and reduced warping in general injection molding applications.",
          grades: ["Natural", "Clear / Translucent", "White", "Cream / PK", "Colors", "Black"],
          specs: [
            ["MFI (ASTM D1238)", "8.0 – 18.0 g/10 min (230°C / 2.16 kg)"],
            ["DENSITY", "0.90 – 0.92 g/cm³"],
            ["PACKED MOISTURE", "< 0.3%"],
            ["ASH CONTENT", "< 1.5% (Natural) | < 3.0% (Color/Black)"],
            ["MELT FILTRATION", "80 – 100 Mesh"],
            ["TYPICAL APPLICATIONS", "Household Wares, Buckets, Chairs, Non-Structural Auto Parts"]
          ]
        },
        {
          id: "abs",
          name: "ABS (Acrylonitrile Butadiene Styrene)",
          desc: "Recovered from electronic enclosures, appliance housings, and rigid consumer casings. Offers solid dimensional stability, good surface gloss, and balanced toughness for technical injection parts.",
          grades: ["White", "Ivory", "Cream / PK", "Grey", "Black"],
          specs: [
            ["MFI (ASTM D1238)", "12.0 – 25.0 g/10 min (220°C / 10 kg)"],
            ["DENSITY", "1.03 – 1.07 g/cm³"],
            ["IZOD IMPACT (NOTCHED)", "10 – 16 kJ/m² (Typical Recycled)"],
            ["PACKED MOISTURE", "< 0.3% (Pre-dry at 80°C before molding)"],
            ["MELT FILTRATION", "80 – 100 Mesh"],
            ["TYPICAL APPLICATIONS", "Electronic Housings, Appliance Parts, Automotive Trim"]
          ]
        },
        {
          id: "hips",
          name: "HIPS (High Impact Polystyrene)",
          desc: "Sourced from refrigerator inner liners and rigid electronic panels. Easy to process via thermoforming or injection molding with reliable impact resistance and dimensional stability.",
          grades: ["Natural", "White", "Cream / PK", "Colors", "Black"],
          specs: [
            ["MFI (ASTM D1238)", "4.0 – 10.0 g/10 min (200°C / 5 kg)"],
            ["DENSITY", "1.04 – 1.06 g/cm³"],
            ["IZOD IMPACT (NOTCHED)", "6 – 10 kJ/m² (Typical Recycled)"],
            ["ASH CONTENT", "< 1.5% (Natural/White)"],
            ["MELT FILTRATION", "80 – 100 Mesh"],
            ["TYPICAL APPLICATIONS", "Thermoformed Sheets, Industrial Trays, Appliance Liners"]
          ]
        },
        {
          id: "pc",
          name: "PC (Polycarbonate)",
          desc: "Recovered from rigid polycarbonate containers and technical housings. Retains high heat deflection temperature and strong impact resistance when properly dried prior to processing.",
          grades: ["Clear", "Tinted / Smoke", "Colors", "Black"],
          specs: [
            ["MFI (ASTM D1238)", "8.0 – 18.0 g/10 min (300°C / 1.2 kg)"],
            ["DENSITY", "1.19 – 1.21 g/cm³"],
            ["HEAT DEFLECTION TEMP (HDT)", "125°C – 132°C (1.8 MPa)"],
            ["PACKED MOISTURE", "< 0.2% (Must pre-dry at 120°C to < 0.02%)"],
            ["MELT FILTRATION", "100 – 120 Mesh"],
            ["TYPICAL APPLICATIONS", "Lighting Housings, Technical Covers, Protective Profiles"]
          ]
        }
      ]
    },
    zeroWaste: {
      tag: "Waste & Water Loop",
      title: "Responsible Water Recirculation & Residue Valorization",
      subtitle: "Washing contaminated plastics generates wastewater and solid by-products. We design our facility to treat, recirculate, and repurpose them responsibly rather than dumping untreated waste.",
      items: [
        {
          code: "Closed-Loop IPAL (~85–90% Reuse)",
          title: "Chemical Wash Water Treatment & Recirculation",
          desc: "Caustic wash water passes through our internal IPAL (coagulation, flocculation, filtration, and pH neutralization) so the vast majority is recirculated back to the washing line, with periodic controlled treatment to maintain water chemistry."
        },
        {
          code: "Solid Residue Recovery",
          title: "Purging Chunks & Fines Repurposing",
          desc: "Extruder startup purging lumps, screen-change waste, and fine dust collected from granulation are segregated and channeled into lower-grade utility moldings such as WPC boards or industrial pallets."
        },
        {
          code: "Sludge & Label Diversion",
          title: "Paper Labels & Dewatered IPAL Sludge",
          desc: "Separated paper pulp and filter-pressed IPAL sludge cakes are dried and directed to licensed co-processing partners (such as RDF cement kiln channels) to minimize landfill disposal."
        }
      ]
    },
    web3: {
      tag: "Web3 Roadmap",
      statusBadge: "PHASE 2 DEVELOPMENT — IN ARCHITECTURE & R&D",
      title: "Upcoming: Digital Batch Passports & 'Eco-in' Ecosystem",
      desc: "Today, our operational priority is delivering consistent physical pellets and transparent batch records. In parallel, our blockchain traceability layer and Eco-in incentive framework are undergoing system architecture design and security review.",
      features: [
        {
          title: "Stage 1 (Active Foundation): Digital Weight & Batch Logging",
          desc: "Automated IoT intake and output weighing records production batch logs and mass-balance efficiency, laying the groundwork for verifiable SHA-256 batch certificates."
        },
        {
          title: "Stage 2 (In R&D): Verified Traceability & Partner Incentives",
          desc: "Planned integration allowing manufacturing partners to verify batch origin via QR passports for sustainability reporting while unlocking future Eco-in ecosystem rewards."
        }
      ],
      ctaBoxTitle: "Request Trial Samples & Material Availability",
      ctaBoxSub: "Need specific MFI ranges, a 25–50 kg machine trial sample, or updates on our Web3 development? Reach out to our team directly:",
      emailBtn: "Contact Team via Email",
      addressLabel: "Facility Location:",
      addressValue: "Cilegon Industrial Estate, Banten, Indonesia"
    }
  },
  id: {
    nav: {
      company: "Perusahaan",
      operations: "Operasional",
      products: "Katalog Polimer",
      contactWeb3: "Web3 & Kontak",
      about: "Tentang Kami",
      whyUs: "Keunggulan",
      zeroWaste: "IPAL & Residu",
      sourcing: "Sumber Material",
      process: "Proses Produksi",
      web3: "Inovasi Web3",
      contact: "Hubungi Kami",
      liveBtn: "Telemetri IoT"
    },
    ticker: [
      "PENGOLAHAN BIJI PLASTIK DAUR ULANG KELAS INDUSTRI",
      "6 POLIMER KERAS UTAMA: PET, HDPE, PP, ABS, HIPS, PC",
      "FILTRASI LELEHAN: SARINGAN BAJA 80 – 120 MESH",
      "PENGOLAHAN AIR: IPAL SIRKULASI TERTUTUP (CLOSED-LOOP)",
      "TERSEDIA SAMPEL UJI COBA MESIN (MACHINE TRIAL)"
    ],
    hero: {
      badge: "Daur Ulang Mekanis Presisi • Indonesia",
      title1: "BIJI PLASTIK DAUR ULANG DENGAN",
      titleHighlight: "KONSISTENSI",
      title2: "STANDAR INDUSTRI.",
      subtitle: "Kami mengolah limbah plastik keras pasca-konsumsi menjadi pelet daur ulang yang bersih, homogen, dan stabil di mesin cetak Anda. Melalui sortir berbantuan AI, pencucian panas soda api (NaOH) dengan bilas pH netral, serta filtrasi lelehan halus, kami menekan bau, bintik hitam, dan fluktuasi lelehan.",
      ctaPrimary: "Pelajari 6 Tahap Proses",
      ctaSecondary: "Lihat Spesifikasi Teknis",
      hudTitle: "Kamera Sortir Konveyor 01",
      hudModel: "AI Vision: YOLOv11 • Katup Pneumatik: Aktif",
      stat1Val: "≥ 98,5%",
      stat1Label: "TARGET KEMURNIAN POLIMER",
      stat2Val: "80–120 Mesh",
      stat2Label: "FILTRASI LELEHAN",
      stat3Val: "Closed-Loop",
      stat3Label: "SIRKULASI AIR IPAL"
    },
    about: {
      tag: "Tentang Kami",
      title: "Rekayasa Proses yang Realistis. Konsistensi Antar Batch.",
      p1: "Banyak pabrik manufaktur ragu meningkatkan porsi bahan daur ulang karena masalah klasik di lapangan: nilai Melt Flow Index (MFI) yang meleset, bau menyengat saat dipanaskan, bintik hitam penyumbat nozzle, hingga kadar air berlebih akibat sortir kasar dan cuci air dingin.",
      p2: "Ecoidn tidak menjanjikan mukjizat, melainkan disiplin ketat pada fundamental daur ulang mekanis. Dengan memadukan sortir berbasis AI di jalur utama, pemulihan manual di luar jalur, cuci panas kimiawi yang dibilas hingga pH netral, serta pengeringan terukur, kami menghasilkan pelet daur ulang kelas prima (Prime Recycled) yang aman dicampur maupun dipakai langsung untuk produk non-pangan.",
      cards: [
        {
          label: "Fokus Mutu 01",
          title: "Melt Flow Index (MFI) Terjaga",
          desc: "Isolasi ketat satu jenis polimer per siklus produksi menjaga viskositas lelehan tetap stabil untuk mesin injeksi maupun tiup (blow molding)."
        },
        {
          label: "Fokus Mutu 02",
          title: "Cuci Panas & Bilas pH Netral",
          desc: "Pencucian 75–85°C memakai Soda Api (NaOH) dan surfaktan rendah busa merontokkan lem dan minyak, lalu dibilas air bersih agar tidak ada residu basa."
        },
        {
          label: "Fokus Mutu 03",
          title: "Kadar Air & Kadar Abu Rendah",
          desc: "Pengeringan mekanis dan termal meminimalkan cacat gelembung, sementara filtrasi halus menjaga kadar abu (ash content) tetap rendah tanpa oplosan filler."
        },
        {
          label: "Fokus Mutu 04",
          title: "QC Internal & Sampel Uji Mesin",
          desc: "Pengecekan kadar air, MFI, dan inspeksi visual bintik hitam dilakukan di pabrik—disertai sampel uji coba langsung di mesin produksi calon mitra."
        }
      ]
    },
    sourcing: {
      tag: "Sumber Bahan Baku",
      title: "Kemitraan Pemasok & Harga Berjenjang",
      subtitle: "Kualitas pelet yang bersih dimulai dari pintu masuk bahan baku. Kami mengedukasi pengepul lokal dan masyarakat melalui sistem harga tunai berjenjang khusus plastik keras (rigid).",
      tiers: [
        {
          grade: "GRADE A",
          name: "Plastik Keras Terpilah & Bersih",
          desc: "Plastik keras (PET, HDPE, PP, dll.) sudah dipisah sesuai jenisnya, kosong dari cairan, serta bebas dari plastik kresek dan sampah organik.",
          price: "HARGA PREMIUM (+10–20% Di Atas Standar)"
        },
        {
          grade: "GRADE B",
          name: "Plastik Keras Campur Bersih",
          desc: "Beberapa jenis plastik keras tercampur dalam satu karung, namun kondisinya relatif bersih dan tidak tercampur lumpur berat atau kresek.",
          price: "HARGA STANDAR PASAR"
        },
        {
          grade: "GRADE C",
          name: "Kotor / Tercampur Plastik Lembek",
          desc: "Plastik yang masih kotor berat atau bercampur kresek dan sampah basah sehingga memerlukan tenaga sortir dan pencucian ekstra.",
          price: "HARGA PENYESUAIAN (Di Bawah Pasar)"
        }
      ]
    },
    process: {
      tag: "6 Tahap Proses",
      title: "Alur Pemurnian Mekanis Sistematis",
      subtitle: "Setiap tahap dirancang untuk mengatasi sumber cacat utama biji plastik daur ulang—mulai dari kontaminasi silang, residu kimia, hingga uap air.",
      steps: [
        {
          step: "TAHAP 01",
          name: "Konveyor Sortir Utama Berbantuan AI",
          tech: "Kamera Edge AI & Penembak Udara Pneumatik",
          desc: "Material plastik keras berjalan di konveyor yang diatur khusus untuk satu target jenis (misal: PET bening). Kamera AI mendeteksi jenis lain, warna berbeda, atau botol bertutup lalu menembakkannya keluar ke penampungan pemulihan."
        },
        {
          step: "TAHAP 02",
          name: "Sortir Manual Offline & Pemulihan",
          tech: "Tim Quality Control & Pemilahan Manual",
          desc: "Alih-alih memaksa mata pekerja menatap konveyor cepat, tim kami mengolah isi penampungan pemulihan secara terpisah—melepas tutup, cincin, serta mengelompokkan polimer keras lain untuk jadwal siklus produksi berikutnya."
        },
        {
          step: "TAHAP 03",
          name: "Pencacahan Basah (Wet Crushing) & Pembilasan",
          tech: "Mesin Cacah Inverter (VSD) + Semprotan Air",
          desc: "Plastik satu jenis dicacah sambil disemprot air kontinu untuk meredam panas gesekan pisau dan meluruhkan kotoran awal. Kecepatan motor diatur sesuai kekerasan polimer, dan ruang pisau dibilas bersih setiap pergantian jenis."
        },
        {
          step: "TAHAP 04",
          name: "Cuci Panas Kimiawi & Bilas Air Bersih (pH Netral)",
          tech: "Reaktor Friksi 75–85°C (NaOH) + Tangki Bilas",
          desc: "Serpihan dicuci dalam air panas 75–85°C dengan takaran Soda Api (NaOH) dan surfaktan industri rendah busa untuk melarutkan minyak, lem label, dan bakteri. Selanjutnya serpihan wajib melewati bilasan air bersih hingga pH netral agar residu basa tidak merusak plastik saat dilelehkan."
        },
        {
          step: "TAHAP 05",
          name: "Pengeringan Sentrifugal & Termal",
          tech: "Dewatering Kecepatan Tinggi & Siklon Udara Panas",
          desc: "Serpihan basah diperas secara mekanis lalu dialirkan melalui pipa siklon udara panas untuk membuang kelembapan permukaan. Polimer yang menyerap air seperti PET dan PC melalui pengeringan lebih mendalam (desiccant) sebelum masuk pelelehan."
        },
        {
          step: "TAHAP 06",
          name: "Ekstrusi Vakum, Filtrasi, QC & Timbangan Digital",
          tech: "Saringan 80–120 Mesh, Cek QC & Load Cell IoT",
          desc: "Plastik dilelehkan dengan penghisap gas vakum (degassing), disaring melalui saringan baja halus, dan dipotong menjadi pelet seragam. Setiap lot dicek kadar air, MFI, serta bintik hitamnya sebelum ditimbang dan dicatat secara digital."
        }
      ]
    },
    whyUs: {
      tag: "Keunggulan",
      title: "Posisi Mutu Realistis Dibanding Opsi Pasar",
      colParameter: "Parameter Teknis",
      colVirgin: "Plastik Baru (Petrokimia)",
      colTraditional: "Daur Ulang Konvensional",
      colEcoidn: "Pelet Prima Ecoidn",
      rows: [
        { param: "Kemurnian Polimer", virgin: "99,9% (Acuan Utama)", trad: "85% – 92% (Sortir Manual)", eco: "≥ 98,5% (Sortir AI + QC Manual)" },
        { param: "Filtrasi Lelehan", virgin: "Tidak Diperlukan", trad: "Kasar / 40–60 Mesh", eco: "80 – 120 Mesh (Minim Bintik Hitam)" },
        { param: "Bau & Kebersihan", virgin: "Netral", trad: "Sering Asam / Sisa Lem", eco: "Cuci Panas NaOH & Bilas pH Netral" },
        { param: "Kadar Abu (Natural)", virgin: "< 0,1%", trad: "3% – 6% (Kotor / Oplosan)", eco: "< 1,5% (Tanpa Oplosan Filler)" },
        { param: "Efisiensi Biaya & Emisi", virgin: "Biaya & Emisi Tertinggi", trad: "Murah, Risiko Reject Tinggi", eco: "Lebih Hemat & Jejak Karbon Rendah" }
      ]
    },
    products: {
      tag: "Katalog 6 Polimer Utama",
      title: "Spesifikasi Tipikal Material (Industri Non-Pangan)",
      standard: "Acuan Uji ASTM D1238 / ISO 1133",
      availableGrades: "Varian Warna Tersedia",
      techSpecs: "Target Spesifikasi Teknis",
      qcDisclaimer: "Catatan: Angka di atas merupakan rentang target tipikal (typical values) untuk daur ulang mekanis. Kebutuhan rentang MFI atau penyesuaian warna tertentu dapat didiskusikan sebelum produksi. Kami menyediakan sampel 25–50 kg untuk uji coba langsung di mesin Anda (machine trial), serta pengujian laboratorium pihak ketiga (B4T / Sucofindo) sesuai permintaan.",
      categories: [
        {
          id: "pet",
          name: "PET (Polyethylene Terephthalate)",
          desc: "Diolah dari botol minuman bening dan biru muda menjadi pelet industri non-pangan maupun serpihan cuci panas. Dikeringkan mendalam sebelum ekstrusi untuk meminimalkan penurunan Intrinsic Viscosity (IV). Cocok untuk tali strapping, serat fiber (dacron), dan lembaran thermoform non-pangan.",
          grades: ["Bening / Natural", "Biru Muda / Bluish"],
          specs: [
            ["INTRINSIC VISCOSITY (PELET)", "0,68 – 0,74 dL/g (Kelas Mekanis)"],
            ["KONTAMINASI PVC", "< 50 ppm (Target)"],
            ["KADAR AIR KEMASAN", "< 0,3% (Wajib pre-dry < 50 ppm sebelum cetak)"],
            ["KADAR ABU (ASH CONTENT)", "< 0,5%"],
            ["FILTRASI LELEHAN", "100 – 120 Mesh (125 – 150 µm)"],
            ["APLIKASI UMUM", "Tali Strapping, Serat Fiber (PSF), Sheet Non-Pangan"]
          ]
        },
        {
          id: "hdpe",
          name: "HDPE (High Density Polyethylene)",
          desc: "Didaur ulang dari jerigen kimia, botol deterjen, dan wadah industri kaku. Dipisahkan berdasarkan kekentalan lelehan ke kelas Blow Molding dan Injection Molding dengan ketahanan kimia dan kekakuan yang baik.",
          grades: ["Natural", "Putih", "Warna Campur", "Hitam"],
          specs: [
            ["MFI — KELAS TIUP (BLOW)", "0,3 – 0,9 g/10 mnt (190°C / 2,16 kg)"],
            ["MFI — KELAS INJEKSI", "4,0 – 10,0 g/10 mnt (190°C / 2,16 kg)"],
            ["MASSA JENIS (DENSITY)", "0,945 – 0,960 g/cm³"],
            ["KADAR ABU (ASH CONTENT)", "< 1,5% (Natural) | < 2,5% (Warna)"],
            ["FILTRASI LELEHAN", "80 – 100 Mesh"],
            ["APLIKASI UMUM", "Jerigen Non-Pangan, Botol Deterjen/Oli, Pipa, Palet"]
          ]
        },
        {
          id: "pp",
          name: "PP (Polypropylene)",
          desc: "Bersumber dari wadah makanan kaku, gelas minuman, tutup botol, dan perabot plastik. Dihomogenisasi untuk kestabilan alir dan pengurangan risiko melengkung (warping) pada mesin injeksi umum.",
          grades: ["Natural", "Bening / Transparan", "Putih", "Krem / PK", "Warna Campur", "Hitam"],
          specs: [
            ["MFI (ASTM D1238)", "8,0 – 18,0 g/10 mnt (230°C / 2,16 kg)"],
            ["MASSA JENIS (DENSITY)", "0,90 – 0,92 g/cm³"],
            ["KADAR AIR KEMASAN", "< 0,3%"],
            ["KADAR ABU (ASH CONTENT)", "< 1,5% (Natural) | < 3,0% (Warna/Hitam)"],
            ["FILTRASI LELEHAN", "80 – 100 Mesh"],
            ["APLIKASI UMUM", "Ember, Kursi, Perabot Rumah Tangga, Part Otomotif Non-Struktural"]
          ]
        },
        {
          id: "abs",
          name: "ABS (Acrylonitrile Butadiene Styrene)",
          desc: "Diekstrak dari cangkang elektronik, rumah peralatan rumah tangga, dan panel plastik kaku. Menawarkan stabilitas dimensi yang baik, kilap permukaan memadai, serta ketangguhan seimbang untuk komponen injeksi teknik.",
          grades: ["Putih", "Gading / Ivory", "Krem / PK", "Abu-abu", "Hitam"],
          specs: [
            ["MFI (ASTM D1238)", "12,0 – 25,0 g/10 mnt (220°C / 10 kg)"],
            ["MASSA JENIS (DENSITY)", "1,03 – 1,07 g/cm³"],
            ["IZOD IMPACT (NOTCHED)", "10 – 16 kJ/m² (Tipikal Daur Ulang)"],
            ["KADAR AIR KEMASAN", "< 0,3% (Disarankan pre-dry 80°C sebelum cetak)"],
            ["FILTRASI LELEHAN", "80 – 100 Mesh"],
            ["APLIKASI UMUM", "Cangkang Elektronik, Komponen Peralatan, Trim Otomotif"]
          ]
        },
        {
          id: "hips",
          name: "HIPS (High Impact Polystyrene)",
          desc: "Berasal dari pelapis dalam kulkas dan panel elektronik kaku. Mudah dibentuk lewat proses thermoforming maupun injeksi dengan daya tahan bentur dan stabilitas dimensi yang andal.",
          grades: ["Natural", "Putih", "Krem / PK", "Warna Campur", "Hitam"],
          specs: [
            ["MFI (ASTM D1238)", "4,0 – 10,0 g/10 mnt (200°C / 5 kg)"],
            ["MASSA JENIS (DENSITY)", "1,04 – 1,06 g/cm³"],
            ["IZOD IMPACT (NOTCHED)", "6 – 10 kJ/m² (Tipikal Daur Ulang)"],
            ["KADAR ABU (ASH CONTENT)", "< 1,5% (Natural/Putih)"],
            ["FILTRASI LELEHAN", "80 – 100 Mesh"],
            ["APLIKASI UMUM", "Lembaran Thermoform, Nampan Industri, Pelapis Kulkas"]
          ]
        },
        {
          id: "pc",
          name: "PC (Polycarbonate)",
          desc: "Diolah dari wadah polikarbonat kaku dan rumah lampu/elektronik. Mempertahankan ketahanan panas (HDT) dan ketahanan bentur tinggi apabila dikeringkan sesuai standar sebelum pencetakan.",
          grades: ["Bening / Clear", "Riben / Smoke", "Warna Campur", "Hitam"],
          specs: [
            ["MFI (ASTM D1238)", "8,0 – 18,0 g/10 mnt (300°C / 1,2 kg)"],
            ["MASSA JENIS (DENSITY)", "1,19 – 1,21 g/cm³"],
            ["SUHU DEFLEKSI PANAS (HDT)", "125°C – 132°C (1,8 MPa)"],
            ["KADAR AIR KEMASAN", "< 0,2% (Wajib pre-dry 120°C hingga < 0,02%)"],
            ["FILTRASI LELEHAN", "100 – 120 Mesh"],
            ["APLIKASI UMUM", "Rumah Lampu, Penutup Komponen Teknis, Profil Pelindung"]
          ]
        }
      ]
    },
    zeroWaste: {
      tag: "IPAL & Pengelolaan Residu",
      title: "Sirkulasi Air Tertutup & Pemanfaatan Residu Produksi",
      subtitle: "Pencucian plastik kotor menghasilkan air limbah dan residu padat. Fasilitas kami dirancang untuk mengolah, memakai ulang, dan menyalurkan produk sampingan secara bertanggung jawab sesuai aturan lingkungan.",
      items: [
        {
          code: "IPAL Sirkulasi (~85–90% Guna Ulang)",
          title: "Pengolahan & Pemakaian Ulang Air Pencucian",
          desc: "Air cuci kimia masuk ke instalasi IPAL internal (koagulasi, flokulasi, filtrasi, dan netralisasi pH) sehingga sebagian besar air dapat dipompa kembali ke jalur pencucian, disertai pengendalian kualitas air berkala."
        },
        {
          code: "Pemanfaatan Residu Padat",
          title: "Pengolahan Bongkahan Purging & Serbuk Halus",
          desc: "Lelehan awal saat pemanasan mesin (purging), sisa ganti saringan, serta serbuk cacahan dipisahkan untuk diolah kembali menjadi produk utilitas seperti papan komposit (WPC) atau palet gudang."
        },
        {
          code: "Penyaluran Lumpur & Label",
          title: "Penanganan Bubur Kertas & Lumpur IPAL",
          desc: "Hancuran label kertas serta lumpur IPAL yang telah dipres kering disalurkan kepada mitra pengolah berizin (seperti jalur bahan bakar alternatif RDF industri semen) untuk menekan timbulan ke TPA."
        }
      ]
    },
    web3: {
      tag: "Inovasi Web3",
      statusBadge: "PENGEMBANGAN TAHAP 2 — DALAM PERANCANGAN & RISET",
      title: "Segera Hadir: Paspor Digital Batch & Ekosistem 'Eco-in'",
      desc: "Saat ini prioritas operasional kami adalah menjaga konsistensi fisik biji plastik serta pencatatan lot produksi yang rapi. Secara paralel, sistem pelacakan berbasis blockchain dan kerangka insentif Eco-in sedang dalam tahap perancangan arsitektur dan pengujian keamanan.",
      features: [
        {
          title: "Tahap 1 (Fondasi Aktif): Pencatatan Berat & Lot Digital",
          desc: "Timbangan IoT pada jalur masuk dan keluar mencatat data berat serta efisiensi penyusutan (yield) setiap siklus produksi sebagai dasar kode verifikasi batch (SHA-256)."
        },
        {
          title: "Tahap 2 (Dalam R&D): Pelacakan Keberlanjutan & Insentif Mitra",
          desc: "Rencana pengembangan agar mitra manufaktur dapat memindai paspor QR untuk verifikasi asal material pada laporan lingkungan, sekaligus membuka akses insentif ekosistem Eco-in di masa mendatang."
        }
      ],
      ctaBoxTitle: "Minta Sampel Uji Mesin & Cek Ketersediaan",
      ctaBoxSub: "Butuh rentang MFI tertentu, sampel 25–50 kg untuk uji coba di mesin pabrik Anda, atau informasi perkembangan Eco-in? Hubungi tim kami langsung:",
      emailBtn: "Hubungi Tim via Email",
      addressLabel: "Lokasi Fasilitas:",
      addressValue: "Kawasan Industri Cilegon, Banten, Indonesia"
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