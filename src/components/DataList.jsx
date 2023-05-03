import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { fireDb } from "../Firebase/Firebase";

import "../App.css";

const DataList = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    try {
      onValue(ref(fireDb), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          Object.values(data).map((user) => {
            setUsersData((oldArr) => [...oldArr, user]);
          });
        }
        // setUsersData(data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(usersData);

  return (
    <div>
      <h3 className="data__list__header">Data List</h3>

      {/* table data hereby */}

      <table>
        <tr>
          <th>Name</th>
          <th>DOB/Age</th>
          <th>Sex</th>
          <th>Mobile</th>
          <th>Govt ID Type</th>
          <th>Govt ID No.</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Email</th>
          <th>Occupation</th>
          <th>Martial Status</th>
          <th>Blood Group</th>
        </tr>
        {usersData &&
          usersData.map((items) => (
            <tr key={items.uuid}>
              <td>{items.data.name}</td>
              <td>{items.data.dob}</td>
              <td>{items.data.sex}</td>
              <td>{items.data.mobile}</td>
              <td>{items.data.id_type}</td>
              <td>{items.data.id_number}</td>
              <td>{items.data.address}</td>
              <td>{items.data.city}</td>
              <td>{items.data.state}</td>
              <td>{items.data.country}</td>
              <td>{items.data.email}</td>
              <td>{items.data.occupation}</td>
              <td>{items.data.marital_status}</td>
              <td>{items.data.blood_group}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default DataList;
