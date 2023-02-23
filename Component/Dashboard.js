// import { Colors } from 'chart.js';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='DASHBOARD'>
      <h1>DASHBOARD</h1>
      <nav>
        <ul>
          <li>
            <Link to="/homepage"><h1>Data</h1></Link>
          </li>
          <li>
            <Link to="/chart"><h1>Chart</h1></Link>
          </li>
          <li>
            <Link to="/analysis"><h1>Analysis</h1></Link>
          </li>
          <li>
            <Link to="/login"><h1>Exit</h1></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard