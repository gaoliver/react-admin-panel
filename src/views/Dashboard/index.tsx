import "./index.scss";
import { useSelector } from "react-redux"

import {User} from "../../constants/interfaces"

function Dashboard() {
    const user = useSelector((state: User) => state.userData)
  return (
    <div className="view-content centered">
        <h3>{user.name} {user.surname}</h3>
        <h5>{user.email}</h5>
        <h5>{user.type}</h5>
        <h5>{user.state}</h5>
    </div>
  );
}

export default Dashboard;
