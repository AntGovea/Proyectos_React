import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from 'sweetalert2';

//moment es comparable a newDate() pero es mas flexible a horas ,minutos etc
const now = moment().minutes(0).seconds(0).add(1, "hours"); //3:00:00
const nowEnd = now.clone().add(1, "hours");

export const CalendarModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  //feecha de inicio
  const [dateStart, setdateStart] = useState(now.toDate());
  //fecha de fin
  const [dateEnd, setDateEnd] = useState(nowEnd.toDate());
  //valores del formulario
  const [formValues, setformValues] = useState({
    title: "Evento",
    notes: "",
    start: now.toDate(),
    end: nowEnd.toDate(),
  });
  //titulo del evento 
  const [titleValid, setTitleValid] = useState(true);
  //extracion de valores
  const { notes, title ,start, end} = formValues;

  //asignacion de valores a variables por medio el evento
  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  //metodo para cerrar el modal
  const closeModal = () => {
   //Cerrar el modal

    
  };

//asignacion de vvalor de fecha de inicio
  const handleStartDatechange = (e) => {
    setdateStart(e);
    setformValues({ ...formValues, start: e });
  };
    //asignacion de vvalor de fecha de final
  const handleEndDatechange = (e) => {
    setDateEnd(e);
    setformValues({
      ...formValues,
      end: e,
    });
  };

  //guardar informacion del formulario modal
  const handleSubmitForm = (e) => {
    e.preventDefault();
  
    const momentStart=moment(start);
    const momentEnd=moment(end);

   //si la fecha es igual o anteriror a la del comienzo lanzar u error o regresar al usuario
   if(momentStart.isSameOrAfter(momentEnd)){
    // throw new Error('La fecha de finalizacionn debe ser mayor a la fercha de inicio ');
    return   Swal.fire('Error', 'La fecha fin debe ser mayor a la fecha de inicio','error');
  };

  if(title.trim().length < 2){
      console.log('invalido')
    return setTitleValid(false);
  
      }

            else{
                console.log('valido')
                return setTitleValid(true);
            }

            //TODO grabar datos
            //Cerra el Modal
            closeModal();

}

  return (
    <div>
      <Modal
        isOpen={true}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={300} //tiempo de cerrado del modal
      >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label>Fecha y hora inicio</label>
            <DateTimePicker
              className="form-control"
              onChange={handleStartDatechange}
              value={dateStart}
            />
          </div>

          <div className="form-group">
            <label>Fecha y hora fin</label>
            <DateTimePicker
              className="form-control"
              onChange={handleEndDatechange}
              value={dateEnd}
              //propiedad para validar que la fecha de fin no sea menor a la de inicio
              minDate={dateStart}
            />
          </div>

          <hr />
          <div className="form-group">
            <label>Titulo y notas</label>
            <input
              type="text"
              className={`form-control ${titleValid ? 'is-valid' :'is-invalid' }  `}
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              value={title}
              onChange={handleInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notes"
              value={notes}
              onChange={handleInputChange}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>
      </Modal>
    </div>
  );
};
