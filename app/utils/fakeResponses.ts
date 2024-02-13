import { ApiResponse, FormData, NotificacionData } from '../models'

export const formRegister: ApiResponse<FormData> = {
  data: {
    columnas: [
      {
        columna: 'nombre',
        requerido: false,
        tipo: 'varchar',
        defecto: "('')",
        tamano: 100,
        dependiente: null,
        idSeccionAtributo: 0,
        ordenEdicion: 1,
        mostrarEnFormulario: true,
      },
      {
        columna: 'profesion',
        requerido: false,
        tipo: 'varchar',
        defecto: null,
        tamano: 100,
        dependiente: null,
        idSeccionAtributo: 0,
        ordenEdicion: 1,
        mostrarEnFormulario: true,
      },
      {
        columna: 'email',
        requerido: true,
        tipo: 'varchar',
        defecto: "('')",
        tamano: 100,
        dependiente: null,
        idSeccionAtributo: 0,
        ordenEdicion: 1,
        mostrarEnFormulario: true,
      },
      {
        columna: 'telefono',
        requerido: false,
        tipo: 'varchar',
        defecto: null,
        tamano: 100,
        dependiente: null,
        idSeccionAtributo: 0,
        ordenEdicion: 1,
        mostrarEnFormulario: true,
      },
      {
        columna: 'id_cargo',
        requerido: false,
        tipo: 'int',
        defecto: '((0))',
        tamano: null,
        dependiente: null,
        idSeccionAtributo: 0,
        ordenEdicion: 1,
        mostrarEnFormulario: true,
      },
    ],
  },
  status: 'Ok',
  statusCode: 200,
  message: 'Success',
}

export const adminRequests: ApiResponse<NotificacionData> = {
  data: {
    notificaciones: [
      {
        id: 75,
        uid: '79B7-SW-WQ11-AD2X',
        eid: '01',
        idUsuarioModifico: 1,
        idUsuarioCreo: 1,
        fechaModificacion: '2024-02-09T19:13:24.53',
        fechaCreacion: '2024-02-09T19:13:00',
        active: true,
        notificacion: 'Ingreso de usuario',
        notificacionCodigo: null,
        tipoNotificacion: {
          id: 1,
          tipoNotificacion: 'Crear Usuario',
          codigo: 'CrearUsuario',
          accionesNotificacion: [
            {
              id: 1,
              accionNotificacion: 'Crear',
              accionNotificacionCodigo: '',
              idTipoNotificacion: 1,
            },
          ],
        },
        usuarioOrigen: {
          id: 0,
          usuario: '',
          codigo: null,
          nombre: null,
          email: '',
          idPerfil: 0,
        },
        usuarioDestino: {
          id: 1,
          usuario: 'Superadministrador',
          codigo: 'JCR',
          nombre: 'Jeffrey Caro Roncancio',
          email: 'david.lopez@idaesoluciones.com',
          idPerfil: 1,
        },
        datos:
          '{"Nombre":"Jeffrey caro","Profesion":"Ing. Mecánico","Email":"jeffrey.caro@idaesoluciones","Telefono":"3102841577"}',
        multiempresa: 'SECAR INGENIEROS S.A.',
      },
      {
        id: 76,
        uid: '79B7-SW-WQ11-AD2X',
        eid: '01',
        idUsuarioModifico: 1,
        idUsuarioCreo: 1,
        fechaModificacion: '2024-02-09T19:14:08.693',
        fechaCreacion: '2024-02-09T19:14:00',
        active: true,
        notificacion: 'Ingreso de usuario',
        notificacionCodigo: null,
        tipoNotificacion: {
          id: 1,
          tipoNotificacion: 'Crear Usuario',
          codigo: 'CrearUsuario',
          accionesNotificacion: [
            {
              id: 1,
              accionNotificacion: 'Crear',
              accionNotificacionCodigo: '',
              idTipoNotificacion: 1,
            },
          ],
        },
        usuarioOrigen: {
          id: 0,
          usuario: '',
          codigo: null,
          nombre: null,
          email: '',
          idPerfil: 0,
        },
        usuarioDestino: {
          id: 1,
          usuario: 'Superadministrador',
          codigo: 'JCR',
          nombre: 'Jeffrey Caro Roncancio',
          email: 'david.lopez@idaesoluciones.com',
          idPerfil: 1,
        },
        datos:
          '{"Nombre":"Sebastian Rodriguez","Profesion":"Ing. de Desarrollo","Email":"Sebastian.rodriguez@idaesoluciones.com","Telefono":"3102581422"}',
        multiempresa: 'SECAR INGENIEROS S.A.',
      },
      {
        id: 77,
        uid: '79B7-SW-WQ11-AD2X',
        eid: '01',
        idUsuarioModifico: 1,
        idUsuarioCreo: 1,
        fechaModificacion: '2024-02-09T19:21:51.603',
        fechaCreacion: '2024-02-09T19:22:00',
        active: true,
        notificacion: 'Ingreso de usuario',
        notificacionCodigo: null,
        tipoNotificacion: {
          id: 1,
          tipoNotificacion: 'Crear Usuario',
          codigo: 'CrearUsuario',
          accionesNotificacion: [
            {
              id: 1,
              accionNotificacion: 'Crear',
              accionNotificacionCodigo: '',
              idTipoNotificacion: 1,
            },
          ],
        },
        usuarioOrigen: {
          id: 0,
          usuario: '',
          codigo: null,
          nombre: null,
          email: '',
          idPerfil: 0,
        },
        usuarioDestino: {
          id: 1,
          usuario: 'Superadministrador',
          codigo: 'JCR',
          nombre: 'Jeffrey Caro Roncancio',
          email: 'david.lopez@idaesoluciones.com',
          idPerfil: 1,
        },
        datos:
          '{"Nombre":"Pedro infante","Profesion":"actor","Email":"Pedro.infante@actor.com","Telefono":"1343241234"}',
        multiempresa: 'SECAR INGENIEROS S.A.',
      },
      {
        id: 78,
        uid: '79B7-SW-WQ11-AD2X',
        eid: '01',
        idUsuarioModifico: 1,
        idUsuarioCreo: 1,
        fechaModificacion: '2024-02-09T20:35:48.917',
        fechaCreacion: '2024-02-09T20:36:00',
        active: true,
        notificacion: 'Ingreso de usuario',
        notificacionCodigo: null,
        tipoNotificacion: {
          id: 1,
          tipoNotificacion: 'Crear Usuario',
          codigo: 'CrearUsuario',
          accionesNotificacion: [
            {
              id: 1,
              accionNotificacion: 'Crear',
              accionNotificacionCodigo: '',
              idTipoNotificacion: 1,
            },
          ],
        },
        usuarioOrigen: {
          id: 0,
          usuario: '',
          codigo: null,
          nombre: null,
          email: '',
          idPerfil: 0,
        },
        usuarioDestino: {
          id: 1,
          usuario: 'Superadministrador',
          codigo: 'JCR',
          nombre: 'Jeffrey Caro Roncancio',
          email: 'david.lopez@idaesoluciones.com',
          idPerfil: 1,
        },
        datos:
          '{"Nombre":"Maritza Carvajal","Profesion":"Ing. Mecatronica","Email":"Maritza.carvajal@gmail.com","Telefono":"1321564"}',
        multiempresa: 'SECAR INGENIEROS S.A.',
      },
      {
        id: 79,
        uid: '79B7-SW-WQ11-AD2X',
        eid: '01',
        idUsuarioModifico: 1,
        idUsuarioCreo: 1,
        fechaModificacion: '2024-02-09T23:32:02.24',
        fechaCreacion: '2024-02-09T23:32:00',
        active: true,
        notificacion: 'Ingreso de usuario',
        notificacionCodigo: null,
        tipoNotificacion: {
          id: 1,
          tipoNotificacion: 'Crear Usuario',
          codigo: 'CrearUsuario',
          accionesNotificacion: [
            {
              id: 1,
              accionNotificacion: 'Crear',
              accionNotificacionCodigo: '',
              idTipoNotificacion: 1,
            },
          ],
        },
        usuarioOrigen: {
          id: 0,
          usuario: '',
          codigo: null,
          nombre: null,
          email: '',
          idPerfil: 0,
        },
        usuarioDestino: {
          id: 1,
          usuario: 'Superadministrador',
          codigo: 'JCR',
          nombre: 'Jeffrey Caro Roncancio',
          email: 'david.lopez@idaesoluciones.com',
          idPerfil: 1,
        },
        datos:
          '{"Nombre":"Sebastian Rodriguez","Profesion":"Ing. de Desarrollo","Email":"master@blaster.com","Telefono":"13218561654"}',
        multiempresa: 'SECAR INGENIEROS S.A.',
      },
      {
        id: 80,
        uid: '79B7-SW-WQ11-AD2X',
        eid: '01',
        idUsuarioModifico: 1,
        idUsuarioCreo: 1,
        fechaModificacion: '2024-02-10T08:11:12.207',
        fechaCreacion: '2024-02-10T08:11:00',
        active: true,
        notificacion: 'Ingreso de usuario',
        notificacionCodigo: null,
        tipoNotificacion: {
          id: 1,
          tipoNotificacion: 'Crear Usuario',
          codigo: 'CrearUsuario',
          accionesNotificacion: [
            {
              id: 1,
              accionNotificacion: 'Crear',
              accionNotificacionCodigo: '',
              idTipoNotificacion: 1,
            },
          ],
        },
        usuarioOrigen: {
          id: 0,
          usuario: '',
          codigo: null,
          nombre: null,
          email: '',
          idPerfil: 0,
        },
        usuarioDestino: {
          id: 1,
          usuario: 'Superadministrador',
          codigo: 'JCR',
          nombre: 'Jeffrey Caro Roncancio',
          email: 'david.lopez@idaesoluciones.com',
          idPerfil: 1,
        },
        datos:
          '{"Nombre":"Luis Pantano","Profesion":"Desarrollador","Email":"luis.pantano@idaesoluciones.com","Telefono":"123456789"}',
        multiempresa: 'SECAR INGENIEROS S.A.',
      },
      {
        id: 81, // Id notificacion
        uid: '79B7-SW-WQ11-AD2X',
        eid: '01',
        idUsuarioModifico: 1,
        idUsuarioCreo: 1,
        fechaModificacion: '2024-02-12T09:35:43.267',
        fechaCreacion: '2024-02-12T09:36:00',
        active: true,
        notificacion: 'Solicitud de ingreso de Sebastian Rodriguez', //Descripcion del card
        notificacionCodigo: null,
        tipoNotificacion: {
          id: 1,
          tipoNotificacion: 'Ingreso de usuario',
          codigo: 'CrearUsuario',
          accionesNotificacion: [
            // Mapear las acciones
            {
              id: 1, // Id accion
              accionNotificacion: 'Crear',
              accionNotificacionCodigo: '',
              idTipoNotificacion: 1,
            },
            {
              id: 2, // Id accion
              accionNotificacion: 'Eliminar',
              accionNotificacionCodigo: '',
              idTipoNotificacion: 1,
            },
          ],
        },
        usuarioOrigen: {
          id: 0,
          usuario: '',
          codigo: null,
          nombre: null,
          email: '',
          idPerfil: 0,
        },
        usuarioDestino: {
          id: 1,
          usuario: 'Superadministrador',
          codigo: 'JCR',
          nombre: 'Jeffrey Caro Roncancio',
          email: 'david.lopez@idaesoluciones.com',
          idPerfil: 1,
        },
        datos:
          '{"Nombre":"Kevin","Profesion":"Kevin Pr","Email":"k@k.com","Telefono":"12345678","Id_cargo":"1"}',
        multiempresa: 'SECAR INGENIEROS S.A.',
      },
    ],
  },
  status: 'Ok',
  statusCode: 200,
  message: 'Success',
}

const tokenResponse = {
  status: 'Ok',
  statusCode: 200,
  message: 'Success',
  data: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VwZXJhZG1pbmlzdHJhZG9yIiwibmJmIjoxNzA3NDkyODk0LCJleHAiOjE3MDc1MDcyOTQsImlhdCI6MTcwNzQ5Mjg5NCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDM2NyIsImF1ZCI6IjAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMCJ9.GNNjsKJnQrUgltzhW7T9rTUYvYJcE_kv5sJI0_hNues',
  },
}
