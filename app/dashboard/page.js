import CaseSummary from "./CaseSummary"
import Navbar from "./Navbar"

export default function Dashboard() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Navbar/>
            <CaseSummary/>
        </div>
    )
}