const DATA_MOOK = [
  {
    nombre: 'Messi',
    thumbnail: './src/assets/foto-1.webp',
    ultima_conexion: 'ayer',
    id: 1,
    mensajes: [
      {
        author: 'yo',
        content: 'Hola, ¿cómo estás?',
        estado: 'visto',
        fecha: 'hoy',
        hour: '13:15',
        id: 'msg1'
      },
      {
        author: 'Messi',
        content: '¡Todo bien! ¿Y tú?',
        estado: 'visto',
        fecha: 'hoy',
        hour: '13:20',
        id: 'msg2'
      }
    ]
  },
  {
    nombre: 'Abuelita',
    id: 2,
    thumbnail: './src/assets/foto-2.jpg',
    ultima_conexion: 'ayer',
    mensajes: [
      {
        author: 'yo',
        content: 'Hola abuelita, ¿cómo estás?',
        estado: 'entregado',
        fecha: '23/12/2024',
        hour: '10:00',
        id: 'msg1'
      },
      {
        author: 'Abuelita',
        content: 'Hola mi niño, estoy bien. ¿Y tú?',
        estado: 'visto',
        fecha: '23/12/2024',
        hour: '10:05',
        id: 'msg2'
      }
    ]
  },
  {
    nombre: 'Pedro',
    id: 3,
    thumbnail: './src/assets/foto-3.webp',
    ultima_conexion: 'hoy',
    mensajes: [
      {
        author: 'yo',
        content: '¿Vamos al cine?',
        estado: 'entregado',
        fecha: 'ayer',
        hour: '15:30',
        id: 'msg1'
      },
      {
        author: 'Pedro',
        content: 'Sí, claro. ¿A qué hora?',
        estado: 'visto',
        fecha: 'ayer',
        hour: '15:35',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: 'A las 7pm está bien.',
        estado: 'visto',
        fecha: 'ayer',
        hour: '16:00',
        id: 'msg3'
      }
    ]
  },
  {
    nombre: 'Laura',
    id: 4,
    thumbnail: './src/assets/foto-4.webp',
    ultima_conexion: 'hoy',
    mensajes: [
      {
        author: 'yo',
        content: 'Hola Laura, ¿qué tal?',
        estado: 'entregado',
        fecha: '15/07/2024',
        hour: '11:00',
        id: 'msg1'
      },
      {
        author: 'Laura',
        content: 'Hola, todo bien. ¿Y tú?',
        estado: 'visto',
        fecha: '15/07/2024',
        hour: '11:05',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: 'Todo bien, gracias.',
        estado: 'visto',
        fecha: '15/07/2024',
        hour: '11:10',
        id: 'msg3'
      }
    ]
  },
  {
    nombre: 'Carlos',
    id: 5,
    thumbnail: './src/assets/foto-5.webp',
    ultima_conexion: 'hoy',
    mensajes: [
      {
        author: 'yo',
        content: '¿Tienes tiempo para hablar?',
        estado: 'no entregado',
        fecha: '20/06/2024',
        hour: '14:30',
        id: 'msg1'
      },
      {
        author: 'Carlos',
        content: 'Sí, estoy libre ahora.',
        estado: 'visto',
        fecha: '20/06/2024',
        hour: '14:35',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: 'Genial, ¿puedes ayudarme con un proyecto?',
        estado: 'visto',
        fecha: '20/06/2024',
        hour: '14:45',
        id: 'msg3'
      }
    ]
  },
  {
    nombre: 'Ana',
    id: 6,
    thumbnail: './src/assets/foto-6.jpg',
    ultima_conexion: 'hoy',
    mensajes: [
      {
        author: 'yo',
        content: 'Hola Ana, ¿te gustaría venir a mi fiesta?',
        estado: 'entregado',
        fecha: 'hoy',
        hour: '16:00',
        id: 'msg1'
      },
      {
        author: 'Ana',
        content: 'Claro, ¿cuándo es?',
        estado: 'visto',
        fecha: 'hoy',
        hour: '16:05',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: 'Este sábado a las 8pm.',
        estado: 'visto',
        fecha: 'hoy',
        hour: '16:10',
        id: 'msg3'
      },
      {
        author: 'Ana',
        content: 'Perfecto, allí estaré.',
        estado: 'visto',
        fecha: 'hoy',
        hour: '16:15',
        id: 'msg4'
      }
    ]
  },
  {
    nombre: 'Juan',
    id: 7,
    thumbnail: './src/assets/foto-7.webp',
    ultima_conexion: 'ayer',
    mensajes: [
      {
        author: 'yo',
        content: '¿Has terminado el proyecto?',
        estado: 'entregado',
        fecha: '01/05/2024',
        hour: '09:00',
        id: 'msg1'
      },
      {
        author: 'Juan',
        content: 'Sí, te lo envío ahora mismo.',
        estado: 'visto',
        fecha: '01/05/2024',
        hour: '09:05',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: '¡Gracias!',
        estado: 'visto',
        fecha: '01/05/2024',
        hour: '09:10',
        id: 'msg3'
      },
      {
        author: 'Juan',
        content: 'De nada, ¡que tengas un buen día!',
        estado: 'visto',
        fecha: '01/05/2024',
        hour: '09:15',
        id: 'msg4'
      },
      {
        author: 'yo',
        content: 'Igualmente.',
        estado: 'visto',
        fecha: '01/05/2024',
        hour: '09:20',
        id: 'msg5'
      }
    ]
  }
];

export { DATA_MOOK };