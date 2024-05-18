import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [contacts, setContacts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const result = await axios.get("http://localhost:8080/contacts");
    setContacts(result.data);
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8080/contact/${id}`);
    loadContacts();
  };

  return (
    <>
      <div className="container">
        <div className="table-responsive py-5">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id.</th>
                <th scope="col">Name</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Email Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id}>
                  <th scope="row">{c.id}</th>
                  <td>{c.name}</td>
                  <td>{c.phone_number}</td>
                  <td>{c.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary me-3"
                      to={`/viewContact/${c.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary me-3"
                      to={`/editContact/${c.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        deleteContact(c.id);
                      }}
                      className="btn btn-danger me-3"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
