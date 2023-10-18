# ReactNative-Productos

En esta sección quiero que nos enfoquemos en el diseño de el **login** y **registro**, a la vez del manejo de la **autenticación**.

Esto nos servirá para poder determinar más adelante, ¿qué usuario creo qué producto?
En pocas palabras, consumiremos servicios del backend que levantamos en la sección anterior.

![Login](https://github.com/manuels-bts/ReactNative-Productos/assets/116088500/55c3b3a2-8109-4e47-9df1-5d9b85ab7b7f)


# Feedback
Por alguna razon, la funcion **checkToken()****authContext** me esta retornando estos errores: 

- En simulador:

![image](https://github.com/manuels-bts/ReactNative-Productos/assets/116088500/eab809e1-4591-451b-b045-7088625c7cff)

- En Terminal:

  ![image](https://github.com/manuels-bts/ReactNative-Productos/assets/116088500/3c350efe-044a-45b0-9d1f-bef0e41bf70c)


Lo anterior lo compare lado a lado con el codigo del curso y con el de compañeros. Esto comenzo desde que se agrego el siguiente codigo en este [archivo de cafeAPI.tsx](https://github.com/manuels-bts/ReactNative-Productos/blob/master/ProductosApp/src/api/cafeAPI.tsx):
```
// Si existe el token, anexalo en los headers de cualquier peticion 
cafeAPI.interceptors.request.use(
    async (config) => {
        const token = AsyncStorage.getItem('token')

        if (token) {
            config.headers['x-token'] = token
        }

        return config
    }
)
```

El Work around 
