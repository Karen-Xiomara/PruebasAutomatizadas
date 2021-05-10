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
- Verificar que durante las pruebas se puede ingresar de manera correcta el usuario y password a la aplicación Ghost

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
