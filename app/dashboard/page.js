import CaseSummary from "./CaseSummary"
import Navbar from "./Navbar"
import FundManagement from "../components/dashboard/FundManagement"
import Leaderboard from "../components/dashboard/LeaderBoard"
import Manditory from "../components/dashboard/Mandatory"
import Reconnect from "../components/dashboard/Reconnect"

export default function Dashboard() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Navbar/>
            <CaseSummary/>      
            <FundManagement />
            <Reconnect />
            <Leaderboard />
            <Manditory />
        </div>
    )
}