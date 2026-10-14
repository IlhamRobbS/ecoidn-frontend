import { useState, useEffect } from 'react';
import { initialTelemetryState } from '../services/telemetryService';

const LiveDashboard = () => {
  const [telemetry, setTelemetry] = useState(initialTelemetryState);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => {
        const addedInput = +(Math.random() * 1.5).toFixed(2);
        const addedOutput = +(addedInput * 0.72).toFixed(2);
        return {
          ...prev,
          nodes: {
            ...prev.nodes,
            inputScale: {
              ...prev.nodes.inputScale,
              weightKg: +(prev.nodes.inputScale.weightKg + addedInput).toFixed(2),
            },
            outputScale: {
              ...prev.nodes.outputScale,
              weightKg: +(prev.nodes.outputScale.weightKg + addedOutput).toFixed(2),
            },
          },
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen py-12 px-6 bg-eco-dark text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-eco-blue uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-eco-blue animate-ping" />
              {telemetry.status} &bull; {telemetry.plantLocation}
            </div>
            <h1 className="text-3xl font-bold">Real-Time Factory Telemetry</h1>
          </div>
          <div className="text-xs font-medium text-zinc-400 bg-eco-surface px-4 py-2.5 rounded-lg border border-zinc-800">
            Backend Ready: PERN Stack (PostgreSQL + Express + Socket.io)
          </div>
        </div>

        {/* 3-Node Live Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {/* Node A */}
          <div className="p-6 bg-eco-surface border border-zinc-800 rounded-xl">
            <div className="flex justify-between text-xs font-semibold text-zinc-400">
              <span>NODE A • INPUT LOAD CELL</span>
              <span className="text-eco-blue font-mono">{telemetry.nodes.inputScale.id}</span>
            </div>
            <p className="text-4xl font-extrabold text-white mt-4">
              {telemetry.nodes.inputScale.weightKg} <span className="text-lg font-normal text-zinc-500">kg</span>
            </p>
            <p className="text-xs text-zinc-500 mt-3">
              Material: {telemetry.nodes.inputScale.material}
            </p>
          </div>

          {/* Node B */}
          <div className="p-6 bg-eco-surface border border-eco-blue/40 rounded-xl">
            <div className="flex justify-between text-xs font-semibold text-zinc-400">
              <span>NODE B • YOLO11 VISION</span>
              <span className="text-eco-blue font-mono">{telemetry.nodes.aiSorting.id}</span>
            </div>
            <p className="text-4xl font-extrabold text-eco-blue mt-4">
              {telemetry.nodes.aiSorting.purityRate}%
            </p>
            <p className="text-xs text-zinc-500 mt-3">
              Detected: {telemetry.nodes.aiSorting.polymerDetected} ({telemetry.nodes.aiSorting.fps} FPS)
            </p>
          </div>

          {/* Node C */}
          <div className="p-6 bg-eco-surface border border-zinc-800 rounded-xl">
            <div className="flex justify-between text-xs font-semibold text-zinc-400">
              <span>NODE C • OUTPUT PELLET SCALE</span>
              <span className="text-eco-blue font-mono">{telemetry.nodes.outputScale.id}</span>
            </div>
            <p className="text-4xl font-extrabold text-white mt-4">
              {telemetry.nodes.outputScale.weightKg} <span className="text-lg font-normal text-zinc-500">kg</span>
            </p>
            <p className="text-xs font-mono text-zinc-500 mt-3">
              Latest Hash: <span className="text-zinc-300">{telemetry.nodes.outputScale.batchHash}</span>
            </p>
          </div>
        </div>

        {/* Batch Passport Log Table */}
        <div className="bg-eco-surface border border-zinc-800 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="text-lg font-bold">Verified Digital Product Passports (Recent Batches)</h2>
            <span className="text-xs font-semibold text-eco-blue">Synced with Smart Contract</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-xs font-semibold text-zinc-400 uppercase">
                  <th className="py-3.5 px-6">Batch ID</th>
                  <th className="py-3.5 px-6">Polymer Grade</th>
                  <th className="py-3.5 px-6">Net Weight</th>
                  <th className="py-3.5 px-6">AI Purity</th>
                  <th className="py-3.5 px-6">SHA-256 Hash</th>
                  <th className="py-3.5 px-6">B2B Reward</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {telemetry.recentBatches.map((batch) => (
                  <tr key={batch.batchId} className="hover:bg-zinc-800/40">
                    <td className="py-4 px-6 font-mono font-semibold text-white">{batch.batchId}</td>
                    <td className="py-4 px-6 text-zinc-300">{batch.polymer}</td>
                    <td className="py-4 px-6 text-zinc-300">{batch.weight}</td>
                    <td className="py-4 px-6 text-eco-blue font-semibold">{batch.purity}</td>
                    <td className="py-4 px-6 font-mono text-xs text-zinc-400">{batch.hash}</td>
                    <td className="py-4 px-6 font-mono text-xs text-eco-blue">{batch.rewardClaimed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LiveDashboard;