import type { DashboardData } from '../../interfaces/DashboardData'
import './Dashboard.css'

const Dashboard = () => {
    const dashboardData: DashboardData = {
        symbol: 'ARBT',
        currency: 'USD',
        shortname: 'Arbitrary Inc.'
    }

    return (
        <div>
            <div className='container-dashboard'>
                <h2>{dashboardData.symbol}</h2>
                <p><b>Currency:</b> {dashboardData.currency}</p>
                <p><b>Shortname:</b> {dashboardData.shortname}</p>
            </div>
        </div>
    )
}

export default Dashboard