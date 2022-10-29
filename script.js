const datos = document.getElementById("datos")
function obtenerDatos() {
    //let contenido = "";
    const res = fetch("http://localhost/clase36_dw/index.php?limit=5", {
        'method' : 'GET'
    }).then(
        (a) => {
            console.log(a, "😃")
            return a.json()
        }
    ).then(
        function(resultado){
            console.log(resultado)
            /* return resultado; */
            resultado.forEach(element => {
                const fecha = new Date(element.user_registered);
                const fechaFormat = fecha.toLocaleDateString("es-ES")


                const tr = document.createElement("tr")


                const td_id = document.createElement("td")
                const td_usu = document.createElement("td")
                const td_mail = document.createElement("td")
                const td_fecha = document.createElement("td")



                td_id.innerText =element.ID
                td_usu.innerText = element.user_login
                td_mail.innerText = element.user_email
                td_fecha.innerText = fechaFormat


                tr.appendChild(td_id)
                tr.appendChild(td_usu)
                tr.appendChild(td_mail)
                tr.appendChild(td_fecha)


                datos.appendChild(tr)
            });
        }
    ).catch(
        (error) => {
            console.error("Me has fallado! 😔")
            return []
        }
    )
    /* res.map(
        item => {
            item.ID,
            item.user_login,
            item.user_email,
            item.user_registered
        }
    ) */
    

}

obtenerDatos();

