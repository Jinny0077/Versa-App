import { Modal } from "react-bootstrap";

type SuccessMessageProps = {
  show: boolean;
  handleClose: () => void;
};

export function SuccessMessage({ show, handleClose }: SuccessMessageProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Success!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your order has been successfully submitted.</Modal.Body>
    </Modal>
  );
}
