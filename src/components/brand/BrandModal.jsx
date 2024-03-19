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
            <div className='d-flex justify-content-center flex-column align-items-center'>
              <div className="ptf-partner-box__image" style={{
                    'filter': 'grayscale(0%)'
              }}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    style={{
                      height: '-webkit-fill-available'
                    }}
                  />
              </div>
              <h4 className='my-4'>{brand.name}</h4>
              <p className='text-center'>
                {brand.description}
              </p>
              <a href={brand.link} className='has-accent-1 text-decoration-underline' target='_blank'>Learn More</a>
            </div>
          </Modal.Body>
        </Modal>
    )
};
export default BrandModal;