import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

function ViewContact() {
  const { id } = useParams();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    const result = await axios.get(`http://localhost:8080/contact/${id}`);
    setContact(result.data);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Contact Details</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">
                  <strong>Name:</strong>
                </label>
                <p className="form-control-plaintext">{contact.name}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <strong>Email:</strong>
                </label>
                <p className="form-control-plaintext">{contact.email}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <strong>Phone:</strong>
                </label>
                <p className="form-control-plaintext">{contact.phone_number}</p>
              </div>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewContact;
