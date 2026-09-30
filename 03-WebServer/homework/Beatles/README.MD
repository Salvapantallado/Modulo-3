# Beatles Page

Vamos a hacer una página usando los templates HTML que vimos en clase.

## Requisitos Básicos

### API

1. Utiliza este arreglo con los integrantes de los Beatles:

```javascript
var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://imgs.search.brave.com/vGHY1jCRD-UyVK6StXh-BI6KaH4xgPfpn0VETPio_nU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdHMtdGhlLWNv/b2xlc3QtcGhvdG8t/b2Ytam9obi1sZW5u/b24tdjAtcWlsN3Fq/Z2x6NTRjMS5qcGVn/P3dpZHRoPTM4NCZm/b3JtYXQ9cGpwZyZh/dXRvPXdlYnAmcz0w/MTQ1YmVlY2M4NDUy/NzgxODQ5MjI3OGQ5/MWQzMjI5N2I0ZGU2/OTkz"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"https://imgs.search.brave.com/CSkrhhdZ2MnnPwwVEYHuCRvwcP-vyjgs8Vj5ICrk2AM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODUw/MDE2MTQvcGhvdG8v/cGF1bC1tY2NhcnRu/ZXktb2YtZW5nbGlz/aC1yb2NrLWFuZC1w/b3AtZ3JvdXAtdGhl/LWJlYXRsZXMtcGVy/Zm9ybXMtb24tc3Rh/Z2UtZHVyaW5nLXJl/aGVhcnNhbHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW1O/Vmt4Z3BMelMySXlv/Yk1uTEFPQnMtSmM3/LTgtUWN3NnNyMkJT/Q0hwUlk9"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://imgs.search.brave.com/M5cEi7Rlt4B7ustTtLxVxhiJTa3ibwbCQfiCJmxdDGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbnBy/b3ZpbmNpYS5jb20u/YXIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMTIvR2Vvcmdl/LUhhcnJpc29uLTY3/OHgzODEuanBn"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]
```

2. Crea la ruta "/api" que muestre el arreglo completo

3. Ahora en la ruta "/api/John%20Lennon" deberiamos ver solo el objeto de John

4. Haz lo mismo con los otros beatles. Podemos hacer esto sin repetirnos en una misma ruta?

5. Si el usuario no entra un Beatle valido tiene que darle un error diciendo que la página no se encontro

### Html y templates

1. Crea un `index.html` (usá bootstrap). Que tenga un header básico, y un jumbotron con un mensaje de bienvenida.
En tu server, devolvé ese HTML cuando los usuarios vayan a la ruta `/`.

2. Ahora crea un nuevo template en el cual ingresaremos un profile page de cada beatle, el titulo de la pagina y un h1 tiene que decir el nombre, un parrafo con la fecha de nacimiento y una imagen con la profilePic.

> Podés usar el string replace como vimos en clases, en la carpeta `/demo` vas a encontrar los ejemplos.

3. Crea una ruta en la cual si ponemos el nombre del Beatle nos muestre su profil page ej. "/Paul%20McCartney".  NO PISES TU RUTA DE API

4. Terminaste? Fijate tu código esta muy desordenado? Te repetiste? Intenta refactorear tu codigo para que quede ordenado, intenta poner las tareas en funciones
