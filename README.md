# Contador en Tiempo Real con Node.js

Este proyecto implementa un contador en tiempo real utilizando Node.js, Express, y Socket.io. El contador se incrementa cada vez que se genera una guía a través de la API de envía.com, demostrando el uso de sockets para actualizaciones en tiempo real entre diferentes clientes.

## Estructura del Proyecto

```
├── LICENSE
├── README.md
├── app.js
├── clients
│   └── enviaClient.js
├── config
│   └── config.js
├── controllers
│   └── shipController.js
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   └── js
│       ├── shipClient.js
│       └── wsClient.js
├── routes
│   ├── index.js
│   └── wsRoutes.js
├── servers
│   └── wsServer.js
└── services
    └── shipService.js
```

## Requisitos Previos

Para ejecutar este proyecto, necesitarás tener instalado Node.js versión 18.17 o superior.

## Dependencias

Este proyecto utiliza las siguientes dependencias principales:

- **Express**: Un marco de aplicación web minimalista y flexible para Node.js, utilizado para construir servidores web y APIs.
- **Socket.io**: Una biblioteca que permite la comunicación en tiempo real, bidireccional y basada en eventos entre los navegadores web y los servidores.
- **Axios**: Un cliente HTTP basado en promesas para el navegador y Node.js, utilizado para realizar solicitudes HTTP.
- **dotenv**: Un módulo de dependencia cero que carga variables de entorno desde un archivo `.env` a `process.env`, ayudando en la configuración del proyecto.

## Instalación

Clona este repositorio y navega hasta el directorio del proyecto. Ejecuta el siguiente comando para instalar las dependencias:

```
npm install
```

## Configuración de Variables de Entorno

Crea un archivo `.env` en el directorio raíz del proyecto y añade las siguientes variables:

```
API_URL=https://api-test.envia.com/
API_TOKEN=tuTokenDeAPIAquí
PORT=3000
```

Asegúrate de reemplazar `tuTokenDeAPIAquí` con tu clave de API real obtenida de envía.com.

## Ejecución

Para iniciar el servidor, ejecuta:

```
npm run serve
```

## Verificación de Funcionamiento

Para verificar que el servidor está funcionando correctamente, navega a:

```
http://localhost:3000/v1/health_check
```

Deberías ver un mensaje indicando que el servicio está operativo.

## Uso

Abre un navegador y ve a `http://localhost:3000` para ver la interfaz del contador. Genera guías a través de la API para ver cómo el contador se incrementa en tiempo real en todas las pestañas del navegador abiertas.

## Capturas
![image](https://github.com/gouh/counter/assets/13145599/10278876-bc2a-4523-85bc-80afa7d2508e)
![image](https://github.com/gouh/counter/assets/13145599/d31c78af-9922-48fb-9c04-c0a32b4ee6df)


## Contribuir

Si deseas contribuir a este proyecto, por favor envía un Pull Request con tus mejoras.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.


## Autor

- [@gouh](https://www.github.com/gouh)
