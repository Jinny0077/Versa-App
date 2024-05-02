import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SuccessMessage } from "../components/SuccessMessage";

export function ShippingDetails() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSuccessMessage(true);
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div>
      <h2>Shipping Details</h2>
      <Form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Shipping Address
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows={3}
            required
          ></textarea>
        </div>
        <Button type="submit">Submit</Button>
      </Form>
      <SuccessMessage
        show={showSuccessMessage}
        handleClose={handleCloseSuccessMessage}
      />
    </div>
  );
}
