// import axios from 'axios';
// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Data awal sebelum terhubung ke PostgreSQL & Socket.io
export const initialTelemetryState = {
  plantLocation: "Cilegon Plant - Line 01 (U-Shape)",
  status: "ONLINE - SIMULATED STREAM",
  nodes: {
    inputScale: { id: "ESP32-LOAD-500A", weightKg: 485.50, material: "Post-Consumer Bale" },
    aiSorting: { id: "JETSON-YOLO11-01", purityRate: 98.4, polymerDetected: "HDPE / PET", fps: 64 },
    outputScale: { id: "ESP32-LOAD-150C", weightKg: 342.10, batchHash: "0x8f4b...c92a" }
  },
  recentBatches: [
    { batchId: "BATCH-2610-04", polymer: "rHDPE Blow Grade", weight: "200.00 kg", purity: "98.8%", hash: "0x7c9a...31f2", rewardClaimed: "0.42 ECO" },
    { batchId: "BATCH-2610-03", polymer: "rPET Clear Flake", weight: "200.00 kg", purity: "99.1%", hash: "0x3d1e...88a0", rewardClaimed: "0.35 ECO" },
    { batchId: "BATCH-2610-02", polymer: "rHDPE Injection", weight: "200.00 kg", purity: "97.9%", hash: "0x9a4f...12b4", rewardClaimed: "0.40 ECO" },
  ]
};

// Fungsi yang kelak dipanggil dari Express.js + PostgreSQL
export const fetchProductionHistory = async () => {
  // Nanti tinggal aktifkan baris di bawah saat Backend Express sudah siap:
  // const response = await axios.get(`${API_URL}/production/batches`);
  // return response.data;
  return initialTelemetryState.recentBatches;
};