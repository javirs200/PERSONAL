console.log("coming soon....");


console.log("js form validation");


window.onload = () => {

    let miform = document.getElementById("miform")

    miform.addEventListener("submit", (event) => {

        //strings

        let enviado = "Has enviado formulario!!!"

        let nameLengthWarn = "error en la longitud del nombre"

        let emailformatWarn = "email no se adecua al formato"

        let scoresWarn = "califica todos nuestros juegos"

        let warnMsj = ""

        //---------recieve data---------

        event.preventDefault(); // parar envío formulario

        console.log(enviado);

        //console.log(event); // objeto con datos
        //console.log(event.target.elements); // inputs del form

        let data = event.target

        let fname = data.name.value

        let fEmail = data.email.value

        let fScores = [data.p1.value,
        data.p2.value,
        data.p3.value,
        data.p4.value]

        //console.log(fname, fEmail, fScores);

        //----------validation----------

        if (fname.length < 3 || fname.length > 5) {
            warnMsj += nameLengthWarn + '\n'
        }

        if (
            (!fEmail.endsWith(".com") && !fEmail.endsWith(".es")) ||
            !fEmail.includes("@")
        ) {
            warnMsj += emailformatWarn + '\n'
        }

        
        for (const score of fScores) {
            if(score === ""){
                warnMsj += scoresWarn + '\n'
                break
            }
        }

        if (warnMsj.length > 0) {
            console.log("warnings -> \n",warnMsj);
        }
        




    }
    )

}