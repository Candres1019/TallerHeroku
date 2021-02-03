var app = (function (){

    var datos;

    function setDatos(){
        datos = $("#datos").val();
    }

    function makeCalculations(){
        console.log("LLego a la Funcion makeCalculations en js")
        if($("#datos").val() === ""){
            alert("No hay valores para calcular");
        }else{
            setDatos();
            console.log("Guardo los datos :" + datos);
            var url = "http://localhost:5000/calculator";
            axios.post(url, datos)
                .then(res => {
                    const dataObject = JSON.parse(res.data);
                    const mean = dataObject.media;
                    const desviacion = dataObject.desviacionEstandar;
                    $("#media").text("Media: "+mean);
                    $("#desviacionEstandar").text("Desviacion Estandar: "+desviacion);
                })
        }
    }

    return {
        makeCalculations: makeCalculations
    }

})();