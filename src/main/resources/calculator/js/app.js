var app = (function (){

    var datos;

    function setDatos(){
        datos = $("#datos").val();
    }

    function makeCalculations(){
        if($("#datos").val() === ""){
            alert("No hay valores para calcular");
        }else{
            setDatos();
            var url = "https://fast-tor-09008.herokuapp.com/calculator";
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