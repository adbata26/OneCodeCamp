import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function A2_form() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [customer_name, setCustomer] = useState("");
  const [delivery_address, setAddress] = useState("");
  const [contact_no, setContact] = useState("");
  const [eras, setEras] = useState(false);
  const [slayer, setSlayer] = useState(false);
  const [eras_quantity, setErasQuantity] = useState("");
  const [slayer_quantity, setSlayerQuantity] = useState("");
  const [items_purchase, setItemPurchase] = useState([]);

  function submitForm(e) {
    e.preventDefault();
    setItemPurchase([]);

    if (eras == true) {
      const eras_total = 2000 * eras_quantity;
      setItemPurchase([
        ...items_purchase,
        {
          productname: "TAYLOR SWIFT ERAS TOUR",
          subtotal: eras_total
        },
      ]);
    }
    if (slayer == true) {
      const slayer_total = 2000 * slayer_quantity;
      setItemPurchase([
        ...items_purchase,
        {
          productname: "Demon Slayer",
          subtotal: slayer_total
        },
      ]);
    }

    setShow(true);
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card mt-5 shadow">
            <div className="card-body">
              <form>
                <h2 className="mb-4 h2">Order Form</h2>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label htmlFor="customer_name" className="mt-1">
                      Customer Name:
                    </label>
                  </div>
                  <input
                    type="type"
                    className="form-control ms-2"
                    id="customer_name"
                    value={customer_name}
                    onChange={(e) => {
                      setCustomer(e.target.value);
                    }}
                  />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label htmlFor="delivery_address" className="mt-1">
                      Delivery Address:
                    </label>
                  </div>
                  <textarea
                    style={{ resize: "none" }}
                    className="form-control ms-2"
                    id="delivery_address"
                    value={delivery_address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <label htmlFor="contact_number" className="mt-1">
                      Contact Number:
                    </label>
                  </div>
                  <input
                    type="number"
                    className="form-control ms-2"
                    id="contact_number"
                    value={contact_no}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                  />
                </div>
                <h2 className="mt-5 h4">Products</h2>

                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input shadow"
                      type="checkbox"
                      value=""
                      id="erastour"
                      checked={eras}
                      onChange={(e) => {
                        if (eras != false) {
                          setEras(false);
                        } else {
                          setEras(true);
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor="erastour">
                      TAYLOR SWIFT: ERAS TOUR CONCERT
                    </label>
                  </div>

                  <div className="input-group mb-3 justify-content-end">
                    <div className="input-group-prepend">
                      <label htmlFor="qt1">Quantity</label>
                    </div>
                    <input
                      type="number"
                      id="qt1"
                      className="ms-2"
                      style={{ width: "40px" }}
                      value={eras_quantity}
                      onChange={(e) => {
                        setErasQuantity(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input shadow"
                      type="checkbox"
                      value=""
                      id="slayer"
                      checked={slayer}
                      onChange={(e) => {
                        if (slayer != false) {
                          setSlayer(false);
                        } else {
                          setSlayer(true);
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor="slayer">
                      DEMON SLAYER: HASHIRA ARC
                    </label>
                  </div>

                  <div className="input-group mb-3 justify-content-end">
                    <label htmlFor="qt1">Quantity</label>

                    <input
                      type="number"
                      id="qt1"
                      className="ms-2"
                      style={{ width: "40px" }}
                      value={slayer_quantity}
                      onChange={(e) => {
                        setSlayerQuantity(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    onClick={(e) => {
                      submitForm(e);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="btn btn-success mt-2"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          <h5 className="mb-2">Order Complete</h5>
          <div>Customer Name: {customer_name}</div>
          <div>Delivery Address: {delivery_address}</div>
          <div>Contact #: {contact_no}</div>
          <div className="h6 mt-2">ORDER DETAILS</div>
          <ul>
            {items_purchase.map((item, index) => (
              <li key={index}>
                Product Name: {item.productname} = {item.subtotal}
              </li>
            ))}
          </ul>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose} className="w-100">
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
