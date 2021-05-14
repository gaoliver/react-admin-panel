import { MdCheckBox, FaTrash } from "react-icons/all";
import "./index.scss";

function Users() {
  return (
    <div className="view-content">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>markotto@site.com</td>
              <td id="actions">
                <MdCheckBox color="green" size="1.3rem" />
                <FaTrash color="red" />
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>jacobthornton@site.com</td>
              <td id="actions">
                <MdCheckBox color="green" size="1.3rem" />
                <FaTrash color="red" />
              </td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>larry_thebird@site.com</td>
              <td id="actions">
                <MdCheckBox color="green" size="1.3rem" />
                <FaTrash color="red" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
