import Modal from 'react-bootstrap/Modal';

const BrandModal = ({show, onHide, brand}) => {
    return (
        <Modal
          show={show}
          onHide={onHide}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton style={{
            border: 'none'
          }}></Modal.Header>
          <Modal.Body>
            <h4>{brand.name}</h4>
            <p>
              {brand.description}
            </p>
          </Modal.Body>
        </Modal>
    )
};
export default BrandModal;