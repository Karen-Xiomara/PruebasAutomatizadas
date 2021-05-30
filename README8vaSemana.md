# PRUEBAS AUTOMATIZADAS DE SOFTWARE
## _Grupo #_ 

## Integrantes
Xiomara Correa - (k.correa@uniandes.edu.co)</br>
Alberto Chica - (a.chica@uniandes.edu.co)</br>
Jhon Cuesta - (j.cuestaa@uniandes.edu.co)</br>
Ricardo Matiz - (rmatizc@uniandes.edu.co)</br>
Nilson Parra - (n.parram@uniandes.edu.co)

## Documento Estrategia de pruebas
El documento que contiene la estrategia de pruebas para las 8 semanas se encuentra en la raíz del repositorio, el nombre es Estrategia-pruebas.docx

## Video Estrategia de pruebas
La url del video que consolida la estrategia de pruebas es la siguiente: https://www.youtube.com/watch?v=HZiHt2zTX64.

## Funcionalidades bajo pruebas

- Crear Post (ID Funcionalidad:1)
- Modificar Post (ID Funcionalidad:2)
- Crear página (ID Funcionalidad:3)
- Modificar página (ID Funcionalidad:4)
- Propiedades del perfil (ID Funcionalidad:5)
- Login (ID Funcionalidad:6)
- Create Tag (ID Funcionalidad:7)
- Delete Tag (ID Funcionalidad:8)

## Escenarios de pruebas E2E

- Escenario 1: Crear post con titulos y detalles y publicarlo
- Escenario 2: Crear post con titulos y detalles y no publicarlo
-	Escenario 3: Crear post con titulos y detalles programando una fecha de publicación
-	Escenario 4: Listar los posts que se encuentran como borrador (draft)
-	Escenario 5: Ingresar a la Pagina Ghost
- Escenario 6: Modificar el titulo de un post y publicarlo
- Escenario 7: Modificar el contenido de un post y publicarlo
- Escenario 8: Modificar un post y hacerlo privado
- Escenario 9: Modificar el titulo y contenido de un post y publicarlo
- Escenario 10: Modificar un post con caracteres especiales y publicarlo
- Escenario 11: Crear una pagina publicada
- Escenario 12: Crear una pagina borrador
- Escenario 13: Crear una pagina borrador sin titulo
- Escenario 14: Crear una pagina borrador sin description
- Escenario 15: Crear una pagina programada
- Escenario 16: Crear de nuevo Post cancelando  el Publish
- Escenario 17: Modificar una Página con Publish execution
- Escenario 18: Modificar un Post con Publish execution
- Escenario 19: Modificar un Post sin Publish
- Escenario 20: Cancelar una eliminación de un Post
- Escenario 21: Modificar valores del perfil de usuario
- Escenario 22: Modificar configuraciones del portal (settings)
- Escenario 23: Crear y eliminar TAG
- Escenario 24: Crea una página en estado borrador
- Escenario 25: Invitar a colaboradores


## Resumen pruebas 
| ID Funcionalidad | ID Escenario | P. Reconocimiento| P. E2E | VRT | V.Datos |Ruta Carpeta|
| ------------------| ---------------| ---------------- | ------ | ----| ------------|
| N/A                  |26       |        X         |        |    | | PruebasAutomatizadas/monkey-cypress/cypress/integration/monkey            |  
| N/A                  |27        |        X         |        |    | | PruebasAutomatizadas/RIPuppet            |  
|4  | 1               |                  | X       |    | |PruebasAutomatizadas/Cypress             | 
|1  |  2             |                  |X        |    | |PruebasAutomatizadas/Cypress             | 
| 1 |   3            |                  | X       |    | |PruebasAutomatizadas/Cypress             | 
|2  |    4          |                  | X       |    | | PruebasAutomatizadas/Cypress            | 
|5  |     5          |                  |X        |    | | PruebasAutomatizadas/Cypress            | 
| 2 |6                |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 2 |7                |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 2 |8                |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 2 |9                |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 2 |10               |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 3 |11                |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 3 |12                |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 3 |13                |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 3 |14                |                  |X       |    | |PruebasAutomatizadas/Cypress             |
| 3 |15               |                  |X       |    | |PruebasAutomatizadas/Cypress             |
|1  |16  |                  |  X      |     | PruebasAutomatizadas/Cypress            | 
| 1 |17                 |                  |X        |    | |PruebasAutomatizadas/Cypress             | 
| 2 |18                |                  |X       |    | |PruebasAutomatizadas/Cypress             | 
|2 | 19 |                  |  X      |   |  |PruebasAutomatizadas/Cypress             | 
| 1 |20                 |                  |X        |   |  | PruebasAutomatizadas/Cypress            | 
| 5 |21               |                  | X       |   |  |PruebasAutomatizadas/Cypress             | 
| 7 |22               |                  | X       |     X||PruebasAutomatizadas/Cypress y PruebasAutomatizadas/regressionReportBackstop| 
| 5 |23              |                  | X       |     | |PruebasAutomatizadas/Cypress             | 
| 5 |24               |                  | X       |     | | PruebasAutomatizadas/Cypress             | 
| 3 |25               |                  | X       |     | | PruebasAutomatizadas/Cypress            | 

## Indicaciones para las pruebas exploratorias
El inventario de pruebas manuales se encuentra en el archivo inventario-pruebas-exploratorias.xlsx que se encuentra en la ruta PruebasAutomatizadas/Videos, en el cual están las 20 pruebas exploratorias. Cada prueba tiene su enlace a los videos alojados en OneDrive.


## Instrucciones de ejecucion de pruebas E2E para Cypress 
- Instalar las aplicaciones NodeJs y Ghost en las versiones compatibles
- Crear el siguiente usuario en Ghost: email: j.cuestaa@uniandes.edu.co y password: hqlDIOPN9j
- Ingresar al repositorio https://github.com/Karen-Xiomara/PruebasAutomatizadas.git
- Crear un directorio local
- Clonar el repositorio en el directorio creado
- Abrir la interfaz de Cypress
- Abrir el directorio creado desde la interfaz de Cypress
- Ingresar a la carpeta Integrations
- Copiar a la carpeta Integrations los archivos .spec.js que se encuentran en la carpeta Cypress del repositorio clonado
- Copiar y reemplazar en la carpeta support el archivo index.js que se encuentra en la carpeta Cypress del repositorio clonado
- Abrir una terminal y ejecutar el comando npm install -D cypress-xpath
- Ejecutar desde la interfaz de Cypress los archivos .spec.js
- Verificar que durante las pruebas se puede ingresar de manera correcta el usuario y password a la aplicación Ghost NOTA: los escenarios del 21 al 25 se encuentran en un solo archivo, el nombre es Escenarios_21-25_ghost3.spec.js y se encuentra en la carpeta Cypress. Para los demás existe un archivo por escenario.

## Instrucciones para Ejecución de pruebas E2E con Screenshots
- Instalar las aplicaciones NodeJs y Ghost en las versiones compatibles
- Se recomienda inicializar la base de datos de Ghost si ya se ha realizado pruebas anteriores
- Crear el siguiente usuario en Ghost: email: j.cuestaa@uniandes.edu.co y password: hqlDIOPN9j
- Ingresar al repositorio https://github.com/Karen-Xiomara/PruebasAutomatizadas.git
- Crear un directorio local
- Clonar el repositorio en un directorio de su preferencia
- Abrir el directorio creado desde una terminal de linea de comandos
- Abrir cypress con el comando cypress open
- Ingresar a la carpeta Integrations
- Copiar a la carpeta Integrations los archivos .spec.js que se encuentran en la carpeta EscenariosConScreenShots dentro de la carpeta de las versiones 330 y 345 del repositorio clonado
- Copiar y reemplazar en la carpeta support el archivo index.js que se encuentra en la carpeta Cypress del repositorio clonado
- Abrir una terminal y ejecutar el comando npm install -D cypress-xpath
- Ejecutar desde una terminal ubicada en la raíz del proyecto cypress los archivos .spec.js
- Verificar que durante las pruebas se puede ingresar de manera correcta el usuario y password a la aplicación Ghost.

## Instrucciones para Ejecución de pruebas de regresión visual con BackStop
- Abrir una terminal e instalar backstop con el comando npm install -g backstopjs
- Ingresar al repositorio https://github.com/Karen-Xiomara/PruebasAutomatizadas.git
- Clonar el repositorio en un directorio de su preferencia
- En el repositorio clonado abrir la carpeta regressionReportBackstop y abrir una terminal en dicha carpeta
- Ejecutar el comando backstop reference para establecer las imágenes de referencia
- Ejecutar el comando backstop test para ejecutar backstop
- Ver el reporte HTML en la ruta backstop_data\html_report\index.html
- Notar que el reporte HTML contiene 1 escenario de las funcionalidades (Para un total de 11 escenarios con los de Resemble)
NOTA: el código para la generación del reporte HTML se encuentra en el archivo backstop.json


## Instrucciones para ejecutar las pruebas de reconocimiento aleatorias
Ingresar en el directorio `monkey-cypress` que se encuentra en la raíz del proyecto 

Ejecutar el comando para instalar las dependencias:

```
npm install
```
Abrir el archivo monkey-config.json que se encuentra en la ruta PruebasAutomatizadas/monkey-cypress,  y modificar los atributos "userGhostAdmin" y "passwordGhostAdmin" con las credenciales del usuario registrado en Ghost. También modificar el atributo "loginUrl" y reemplazar por la siguiente url "http://localhost:2369/ghost/#/signin".
Para ejecutar el monkey:

```
cypress run -C monkey-config.json
```

Para ejecutar el smart monkey:

```
cypress run -C smart-monkey-config.json
```
 

## Instrucciones para ejecutar las pruebas de reconocimiento Ripper
Ingresar en el directorio `RIPuppet` que se encuentra en la raíz del proyecto

Ejecutar el comando para instalar las dependencias:

```
npm install
```
Abrir el archivo config.json que se encuentra en la ruta PruebasAutomatizadas/RIPuppet, y modificar los atributos "userGhostAdmin" y "passwordGhostAdmin" con las credenciales del usuario registrado en Ghost. También modificar el atributo "loginUrl" y reemplazar por la siguiente url "http://localhost:2369/ghost/#/signin".
Para ejecutar el ripper:

```
node index.js
```

## Instrucciones para Ejecución de Escenarios con generación de datos
- Ingresar al repositorio https://github.com/Karen-Xiomara/PruebasAutomatizadas.git
- Clonar el repositorio en un directorio de su preferencia
- Instalar Cypress, NodeJS y Ghost v3.42.5 
- Se recomienda inicializar la base de datos de Ghost si ya se ha realizado pruebas anteriores
- Crear el siguiente usuario en Ghost: email: j.cuestaa@uniandes.edu.co y password: hqlDIOPN9j
- Ingresar a la ruta PruebasAutomatizadas\cypress-ghost del repositorio clonado
- Desde la ruta anterior, abrir una terminal y ejecutar el comando npm install para instalar las dependencias del proyecto
- Abrir una terminal y ejecutar el comando npm install -D cypress-xpath
- Abrir una terminal y ejecutar el comando npm install faker.
- En la ruta PruebasAutomatizadas\cypress-ghost\cypress\integration se encuentran los archivos que generan los 150 escenarios de prueba.
- Los escenarios utilizan unos archivos .json que se importan desde la ruta PruebasAutomatizadas\cypress-ghost\cypress\Mocks (estos archivos fueron generados con Mokaroo para la estrategia de generación data pool a priori, otros se generan según la estrategia generación aleatoria dinámica de datos con la herramienta faker)
- Los escenarios utilizan el archivo funciones.js que se encuentra en la ruta PruebasAutomatizadas\cypress-ghost\cypress 
- Abrir una terminal y desde la ruta PruebasAutomatizadas\cypress-ghost ejecutar el comando cypress run para correr los 150 escenarios
- Verificar que durante las pruebas se puede ingresar de manera correcta el usuario y password a la aplicación Ghost.



