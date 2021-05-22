# PRUEBAS AUTOMATIZADAS DE SOFTWARE
## _Grupo #_ 

## Integrantes
Xiomara Correa - (k.correa@uniandes.edu.co)</br>
Alberto Chica - (a.chica@uniandes.edu.co)</br>
Jhon Cuesta - (j.cuestaa@uniandes.edu.co)</br>
Ricardo Matiz - (rmatizc@uniandes.edu.co)</br>
Nilson Parra - (n.parram@uniandes.edu.co)

## Funcionalidades bajo pruebas

- Crear Post
- Modificar Post
- Crear página
- Modificar página
- Propiedades del perfil



## Escenarios de pruebas

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

## Instrucciones de ejecucion para Cypress 
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

## Instrucciones de ejecucion para Kraken 
- Instalar Kraken en una máquina física
- Crear un proyecto básico de Kraken
- Instalar las aplicaciones NodeJs y Ghost en las versiones compatibles
- Crear el siguiente usuario en Ghost: email: j.cuestaa@uniandes.edu.co y password: hqlDIOPN9j 
- Ingresar al repositorio https://github.com/Karen-Xiomara/PruebasAutomatizadas.git
- Crear un directorio local
- Clonar el repositorio en el directorio creado
- Copiar a la carpeta features del proyecto Kraken los archivos .features que se encuentran en la carpeta Kraken del repositorio clonado
- Para ejecutar las pruebas, en una consola de comandos ejecutar el siguiente comando: kraken-mobile run (agregar bundle exec si la máquina es linux)  
- Verificar que durante las pruebas se puede ingresar de manera correcta el usuario y password a la aplicación Ghost


## Instrucciones para Ejecución de pruebas con Screenshots
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

## Instrucciones para Ejecución de Resemble

- Ingresar al repositorio https://github.com/Karen-Xiomara/PruebasAutomatizadas.git
- Clonar el repositorio en un directorio de su preferencia
- Crear un directorio local
- Abrir una terminal de linea de comandos y ubicarse en el directorio creado anteriormente, Instalar resemble con el comando npm install resemblejs
- Desde la terminal se ejecuta el comando npm init para crear un proyecto Resemble
- Ir al directorio del repositorio clonado y copiar el contenido de la carpeta regressionReportResemble
- Reemplazar los archivos copiados en la carpeta en la que se encuentra el proyecto de Resemble
- Desde una linea de comandos y ubicarse en el directorio del proyecto Resemble y ejecutar la herramienta con el comando node index.js
- Ver el reporte HTML creado en la carpeta report y buscar allí la carpeta que corresponda con la fecha y hora de la última ejecución 
- Notar que el reporte HTML contiene 10 escenarios de las funcionalidades
NOTA: el código para la generación del reporte HTML se encuentra en el archivo index.js, usando una configuración del archivo config.json

## Instrucciones para Ejecución de BackStop
- Abrir una terminal e instalar backstop con el comando npm install -g backstopjs
- Ingresar al repositorio https://github.com/Karen-Xiomara/PruebasAutomatizadas.git
- Clonar el repositorio en un directorio de su preferencia
- En el repositorio clonado abrir la carpeta regressionReportBackstop y abrir una terminal en dicha carpeta
- Ejecutar el comando backstop reference para establecer las imágenes de referencia
- Ejecutar el comando backstop test para ejecutar backstop
- Ver el reporte HTML en la ruta backstop_data\html_report\index.html
- Notar que el reporte HTML contiene 1 escenario de las funcionalidades (Para un total de 11 escenarios con los de Resemble)
NOTA: el código para la generación del reporte HTML se encuentra en el archivo backstop.json

## Instrucciones para Ejecución de Escenarios con generación de datos
- Ingresar al repositorio https://github.com/Karen-Xiomara/PruebasAutomatizadas.git
- Clonar el repositorio en un directorio de su preferencia
- Instalar Cypress, NodeJS y Ghost v3.42.5 
- Se recomienda inicializar la base de datos de Ghost si ya se ha realizado pruebas anteriores
- Crear el siguiente usuario en Ghost: email: j.cuestaa@uniandes.edu.co y password: hqlDIOPN9j
- Ingresar a la ruta PruebasAutomatizadas\cypress-ghost del repositorio clonado
- Desde la ruta anterior, abrir una terminal y ejecutar el comando nmp install para instalar las dependencias del proyecto
- Abrir una terminal y ejecutar el comando npm install -D cypress-xpath
- Abrir una terminal y ejecutar el comando npm install faker.
- En la ruta PruebasAutomatizadas\cypress-ghost\cypress\integration se encuentran los archivos que generan los 150 escenarios de prueba.
- Los escenarios utilizan unos archivos .json que se importan desde la ruta PruebasAutomatizadas\cypress-ghost\cypress\Mocks (estos archivos fueron generados con Mokaroo para la estrategia de generación data pool a priori, otros se generan según la estrategia generación aleatoria dinámica de datos con la herramienta faker)
- Los escenarios utilizan el archivo funciones.js que se encuentra en la ruta PruebasAutomatizadas\cypress-ghost\cypress 
- Abrir una terminal y desde la ruta PruebasAutomatizadas\cypress-ghost ejecutar el comando cypress run para correr los 150 escenarios
- Verificar que durante las pruebas se puede ingresar de manera correcta el usuario y password a la aplicación Ghost.

## Detalle de Escenarios con generación de datos
- Escenario1Jhon: Pool de datos seudo aleatorio dinámico - 3 escenarios de prueba. 
- Escenario2Jhon: Estrategia aleatoria de generación de datos a partir de faker - 1 escenario de prueba. 
- Escenario3Jhon: Estrategia aleatoria de generación de datos a partir de faker - 1 escenario de prueba. 
- Escenario4Jhon: Pool de datos a priori - 15 escenarios de prueba. 
- Escenario5Jhon: Pool de datos a priori - 10 escenarios de prueba.
- EscenarioXiomara: Pool de datos a priori - 14 escenarios de prueba. 
- EscenarioXiomara2: Pool de datos a priori - 14 escenario de prueba. 
- EscenarioXiomara3: Pool de datos seudo aleatorio dinámico - 1 escenario de prueba. 
- EscenarioXiomara4: Pool de datos seudo aleatorio dinámico - 1 escenario de prueba. 
- EscenarioXiomara5: Estrategia aleatoria de generación de datos a partir de faker - 1 escenario de prueba.
- EscenarioAJC1: Pool de datos a priori - 15 escenarios de pruebas.
- EscenarioAJC2: Pool de datos seudo aleatorio dinàmico - 10 escenarios de pruebas.
- EscenarioAJC3: Estrategia aleatoria de generación de datos a partir de faker - 1 escenario de prueba.
- EscenarioAJC5: Pool de datos a priori - 5 escenarios de pruebas.


