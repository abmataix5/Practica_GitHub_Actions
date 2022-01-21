


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
<br>
action.yaml

![Captura de pantalla de 2022-01-21 13-07-52](https://user-images.githubusercontent.com/62066419/150524752-95d2c900-3e21-4f2f-ae0c-6178b7ce0a2a.png)
<br>
Archivo .js para escribir en el readme los reusltados del test.

![Captura de pantalla de 2022-01-21 13-07-55](https://user-images.githubusercontent.com/62066419/150524766-71d11c7b-9ff3-4a82-ba7b-6a6d8b6f0678.png)



Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->

## DEPLOY JOB 🚀

![Captura de pantalla dAe 2022-01-21 12-41-31](https://user-images.githubusercontent.com/62066419/150521657-d5ff1231-3732-4ddd-bff4-7e8adcd6e70c.png)

<br>

#### STEPS

-Desplegar App en vercel: Ejecuta una action externa, siguiendo su documentación oficial podremos desplegar nuestra app en Vercel.

#### PASOS

-Creamos una cuenta en Vercel y creamos un token.<br>
-Instalamos vercen el el proyecto, seguidamente nos creara un archivo llamado project.json, en el que estaran todos los tokens necesarios para desplegar nuestra app en Vercel.<br>
-Añadiremos estos tokens a los secrets de GitHub para poder obtenerlos desde el .yml.<br>

![Captura de pantalla de 2022-01-21 13-18-38](https://user-images.githubusercontent.com/62066419/150525988-d8689ca1-c70f-4c24-8833-1ec46cf8c0aa.png)



#### REULTADO 

![Captura de pantalla de 2022-01-21 13-17-22](https://user-images.githubusercontent.com/62066419/150525858-2c096447-e846-4b41-b20f-7a6fc6c33801.png)




## NOTIFICATION JOB 🚀

![Captura de pantalla de 2022-01-21 12-42-48](https://user-images.githubusercontent.com/62066419/150521675-849b512a-4514-42a0-9117-d83da242fc4a.png)


#### STEPS
-Checkout: Este paso descarga el codigo del repositorio para poder ejecutar los siguientes pasos.<br>
- Send email: Este paso ejecuta el action personalizado que hemos creado para enviar un email de confirmación.


#### PASOS NECESARIOS

-Para el correcto funcionamiento, hemos tenido que configurar nuestra cuenta de google, primero hemos tenido que hacer la verificación de dos pasos y luego para poder enviar un email desde nodemailer hemos tenido que crear un contraseña de aplicacion, que guardaremos en los secrets de GitHub para luego poder utilizarlos en el .yml.

![Captura de pantalla de 2022-01-21 14-04-38](https://user-images.githubusercontent.com/62066419/150544925-02078e65-93e3-4963-aa48-ee1cd4ab4259.png)



-Codigo .js

![Captura de pantalla de 2022-01-21 14-04-56](https://user-images.githubusercontent.com/62066419/150544960-50e7f18e-a14b-4dbd-9d34-41f266d8ab20.png)

-Action personalizada

![Captura de pantalla de 2022-01-21 14-05-10](https://user-images.githubusercontent.com/62066419/150544975-af0470c5-7313-440c-b28f-c04ecdb694ab.png)

-Resultado final

![Captura de pantalla de 2022-01-21 15-34-02](https://user-images.githubusercontent.com/62066419/150544989-75c40041-472f-47fb-bd38-d5fd0bb01b44.png)





