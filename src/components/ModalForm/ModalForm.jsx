import PropTypes from "prop-types";
import "./ModalForm.css";

const ModalForm = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // test
    console.log(data);

    setShowModal(false);
  };

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <label>
              Nombres:
              <input type="text" name="nombres" required />
            </label>
            <label>
              Primer Apellido:
              <input type="text" name="primerApellido" required />
            </label>
            <label>
              Segundo Apellido:
              <input type="text" name="segundoApellido" required />
            </label>
            <label>
              DNI/Documento de identidad:
              <input type="text" name="dni" required />
            </label>
            <label>
              Teléfono:
              <input type="tel" name="telefono" required />
            </label>
            <label>
              Correo:
              <input type="email" name="correo" required />
            </label>
            <div className="modal-buttons">
              <button type="submit">Enviar</button>
              <button type="button" onClick={handleClose}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

ModalForm.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalForm;
