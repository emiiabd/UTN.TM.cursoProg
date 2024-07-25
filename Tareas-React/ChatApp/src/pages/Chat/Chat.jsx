import React, { useState } from "react";
import { ChatTop, ChatWindows, ChatBottom } from "../../components/index";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { obtenerDatosPorId } from "../../helpers/mensajes";

const Chat = () => {

  const parametros = useParams();

  // FUNCTIONS

  const { nombre, thumbnail, ultima_conexion, id, mensajes } = obtenerDatosPorId(parametros.id);
  
  const [memoryMsj, setMemoryMsj] = useState(mensajes);
  console.log(thumbnail);

  const handleSubmit = (e, textValue) => {
    e.preventDefault();

    setMemoryMsj([
      ...memoryMsj,
      {
        author: "yo",
        content: textValue,
        fecha: "ahora",
        estado: "enviado",
        id: memoryMsj.length + 1,
      },
    ]);

  };

  return (
    <div className="chat">
      <ChatTop title={nombre} thumbnail={thumbnail} />
      <ChatWindows memoryMsg={memoryMsj} />
      <ChatBottom handleSubmit={handleSubmit} />
    </div>
  );
};

export default Chat;
