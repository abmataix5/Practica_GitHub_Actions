


# PRÁCTICA GHUB ACTIONS




## LINTER JOB 🚀
![Captura de pantalla de 2022-01-21 12-37-32](https://user-images.githubusercontent.com/62066419/150520890-574ba131-1e20-43a0-be18-6deb3def4f6c.png)

-Este job se encarga de ejecutar el linter que está en el proyecto para verificar las sintaxis utilizada es la correcta, al ejecutarlo por primera vez, podemos observar diversos error en la sintaxis en alguns archivos .js, los cuales he corregido.

#### STEPS

-Checkout code : Sirve para obtener el código del repositorio.<br>
-Install dependencies : Instala las dependencias de nodemodules.<br>
-Runt lint: Ejecuta el linter.


## CYPRESS JOB 🚀
![Captura de pantalla de 2022-01-21 12-40-56](https://user-images.githubusercontent.com/62066419/150521600-d3f1b3ff-ee25-40d9-a2ad-394a4acc09a5.png)

-Este job se encarga de utilizar los test de cypress que contiene el proyeto, hemos utilizado la action oficial.<br>
-Este job se ejecutara siempre despues del Linter_job -> needs

#### STEPS

-Cypress ejecutar : Ejecuta la action oficial del proyecto.<br>
-Guardar result : Guarda el resultado del test en un archivo llamado result.txt<br>
-Actualizar result: Nos crea un artifact llamado result.txt, con los resultados del test.



## BADGE JOB 🚀

![Captura de pantalla de 2022-01-21 12-41-31](https://user-images.githubusercontent.com/62066419/150521641-814c7ef4-bb63-4138-ac48-e91b43b83447.png)


#### STEPS

-Download a single artifact : Se encarga de de obtener el artifact almacenado en el job anterior<br>
-output-artifact : Imprime el artifact en nuestro archivo result.txt<br>
-Actualizar result: Nos crea un artifact llamado result.txt, con los resultados del test.<br>
-Action Update readme: Ejecuta nuestra action personalizada que veremos a continuación, sen encarga de actualizar el archivo Readme.md con los resutados del test.<br>
-Push cambios Readme: Realiza un commit y un push para actualizar los cambios en el repositorio remoto.

#### ACTION BADGE Y ARCHIVO .JS



Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->

## DEPLOY JOB 🚀

![Captura de pantalla dAe 2022-01-21 12-41-31](https://user-images.githubusercontent.com/62066419/150521657-d5ff1231-3732-4ddd-bff4-7e8adcd6e70c.png)


## NOTIFICATION JOB 🚀

![Captura de pantalla de 2022-01-21 12-42-48](https://user-images.githubusercontent.com/62066419/150521675-849b512a-4514-42a0-9117-d83da242fc4a.png)

