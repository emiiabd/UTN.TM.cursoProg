import React from "react";
import "./NewWSRender.css";

const NewWSRender = ({handleCreateNewWorkSpace, handleOnChange}) => {
  return (
    <>
      <div className="title">
        <h3>Crear un nuevo workspace</h3>
      </div>
      <form className="newWS" onSubmit={handleCreateNewWorkSpace}>
        <div className="formScreen">
          <div className="inputs">
            <label htmlFor="WSname">Nombre del WorkSpace</label>
            <input
              type="text"
              name="WSname"
              id="WSname"
              placeholder="Nombre"
              onChange={handleOnChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="NewChannel">Desea crear un canal?</label>
            <input
              id="psw"
              type="NewChannel"
              name="NewChannel"
              placeholder="Nombre del canal"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="buttons btnBig">
          <input className="btnWS" type="submit" value="Crear nuevo entorno" />
        </div>
      </form>
    </>
  );
};

export default NewWSRender;
