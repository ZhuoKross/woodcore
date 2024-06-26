const formCreateUser = document.querySelectorAll(".form-register");

//prueba
//console.log(formCreateUser);



formCreateUser.forEach(form =>{
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        console.log(e);
        const nombrePersona = e.target[0].value;
        const apellidoPersona = e.target[1].value;
        const tipoDocumento = e.target[2].value;
        const numeroDocumento = e.target[3].value;
        const tipoRol = e.target[4].value;
        const email = e.target[6].value;
        const password = e.target[7].value;
        
        //Prueba para ver si los datos del form son obtenidos
        // console.log(nombrePersona);
        // console.log(apellidoPersona);
        // console.log(tipoDocumento);
        // console.log(numeroDocumento);
        // console.log(tipoRol);
        // console.log(email);
        // console.log(password);

        const result = fetch("http://localhost:3000/create-user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                nombrePersona,
                apellidoPersona,
                tipoDocumento,
                numeroDocumento,
                tipoRol,
                email,
                password                            
            })
        })
    })
})
