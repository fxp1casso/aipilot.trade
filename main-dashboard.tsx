import type React from "react"
import LiveMarketIntelligence from "./LiveMarketIntelligence"
// import AIStrategyMatrix from './AIStrategyMatrix'; // Removed import

const MainDashboard: React.FC = () => {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Main Dashboard</h1>
      <LiveMarketIntelligence />
      {/* <AIStrategyMatrix /> */} {/* Removed AIStrategyMatrix component */}
    </main>
  )
}

export default MainDashboard
