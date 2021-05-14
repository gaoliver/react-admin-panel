import "./index.scss";
import { Table } from "reactstrap";
import { MdCheckBox, FaTrash } from "react-icons/all";

function Users() {
  const approve = <MdCheckBox color="green" size="1.3rem" />;
  const remove = <FaTrash color="red" />;
  return (
    <div className="view-content">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>{approve} - {remove}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>{remove}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>{approve} - {remove}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
