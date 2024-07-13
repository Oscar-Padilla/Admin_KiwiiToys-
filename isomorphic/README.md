# Administrador KiwiiToys
Esta es la pantalla de administrador para la tienda KiwiiToys

## Para empezar
Se necesita tener:

- [Node.js 18.17](/) o actual.
- [Turborepo 2.0.1](/).
- [pnpm - package manager 9.1.4](/).

Como primer paso necesitas clonar el git en tu C:\ para mayor comodidad.
Una vez que ya lo hayas clonado debes abrirlo desde tu CMD o PowerShell como **ADMINISTRADOR**.

Comenzaremos a instalar cosas:

**--------|Paso 1|--------**
**Tuborepo:**
```bash
npm install -g turbo
```

**--------|Paso 2|--------**
**pnpm:**
```bash
npm install -g pnpm
```
Terminandose de instalar el pnpm es poner los siguiente codigos en orden:
**1**
```bash
Get-ExecutionPolicy -List ​
```
**2**
```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ​
```
**3**
```bash
Get-ExecutionPolicy -List ​
```
Y listo ya podremos ejecutar con exito el pnpm.

**--------|Paso 3|--------**
**Para inicializar el servidor de desarrollo**
```bash
pnpm install

pnpm run dev
```
Cuando se ejecuta el último comando se quedará trabado en un error, en el momento que ya no haga nada y solo se muestre el error, cancelaremos el proceso y ya estaría esta parte.

**--------|Paso 4|--------**
**Lo siguiente es para hacerle build localmente a todo el proyecto**
```bash
pnpm run build

pnpm run start
```
Lo mismo, si se queda atorado en un error, cancelar el proceso y continuar.

Y listo. Ya es todo lo que se hará para poder arrancar con el proyecto. Lo que sigue es para poder ejecutar el servidor y ver si funciona.

## Hacer que funcione la plantilla
Primero debemos ubicar dónde está la plantilla.
Esta se encuentra en:
```bash
C:\Admin-KiwiiToys-\isomorphic\apps\isomorphic
```
Aquí se aloja todo el codigo de la plantilla y pantallas.

Accederemos a la ubicación en nuestro CMD o PowerShell como **ADMINISTRADOR**.

Y empezamos:
**--------|Paso 1|--------**
Entraremos al archivo `.env.local.example`
Y encontraremos lo siguiente:
`
NEXT_PUBLIC_GOOGLE_MAP_API_KEY=""
NEXTAUTH_SECRET=""
NEXTAUTH_URL=""
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
`

Lo único que debemos de cambiar es:
`
NEXTAUTH_SECRET=""
NEXTAUTH_URL=""
`

Para `NEXTAUTH_SECRET=""` debemos de ir a nuestro navegador e ingresar al siguiente [link](https://generate-secret.vercel.app/32).

Nos aparecerá un string como este `b93183e08362a35ab7e698e1d55590fd`, ese valor lo pondremos dentro de las comillas.

En este momento lo veremos así:
`
NEXT_PUBLIC_GOOGLE_MAP_API_KEY=""
NEXTAUTH_SECRET="b93183e08362a35ab7e698e1d55590fd"
NEXTAUTH_URL=""
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
`

Para `NEXTAUTH_URL=""` solo lo sustituiremos por `NEXTAUTH_URL="http://localhost:3000"`.

Y nos quedaría así:
`
NEXT_PUBLIC_GOOGLE_MAP_API_KEY=""
NEXTAUTH_SECRET="b93183e08362a35ab7e698e1d55590fd"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
`

Una vez que tengamos eso en el `.env.local.example` nos iremos nuevamente al CMD o PowerShell y pondremos lo siguiente:
```bash
cp .env.local.example .env.local
```

Como últimos dos pasos es poner en nuestro CMD o PowerShell como **ADMINISTRADOR**.
```bash
pnpm install
```
Este instalará todos los `node_modules`.

**Esto solo debe de hacer cuando es la primera vez que lo instalas. Cuando estés codeando lo único que debes de ejecutar es:**

## Esto es **solo si ya hiciste lo anterior y cada que vas a modificar el codigo para correr el localhost.**
```bash
pnpm dev
```
Y listo, es todo.

Happy coding! 🚀