import { MdCheckBox, FaTrash } from "react-icons/all";
import "./index.scss";

import { users } from "../../service/mockData";
import Capitalize from "../../components/Capitalize";

function Users() {
  // Message for fake button
  const fakeButton = () => {
    alert(
      "This is only illustrative button. There's still not a functionallity for that. Front-end work, no database for this project yet."
    );
  };

  return (
    <div className="view-content">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Get users map */}
            {users
              .filter((x) => x.state !== "deleted")
              ?.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>{Capitalize(user.type)}</td>
                  {/* User state */}
                  <td id="actions">
                    {user.state === "approved" ? (
                      <FaTrash
                        className="action-button"
                        color="red"
                        onClick={fakeButton}
                      />
                    ) : (
                      <>
                        <MdCheckBox
                          className="action-button"
                          color="green"
                          size="1.3rem"
                          onClick={fakeButton}
                        />
                        <FaTrash
                          className="action-button"
                          color="red"
                          onClick={fakeButton}
                        />
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
