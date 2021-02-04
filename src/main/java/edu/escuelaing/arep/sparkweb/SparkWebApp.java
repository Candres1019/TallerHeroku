package edu.escuelaing.arep.sparkweb;

import com.google.gson.Gson;

import static spark.Spark.*;

/**
 * Clase encargada de a conexión Web.
 * @author Andres Mateo Calderon Ortega.
 */
public class SparkWebApp {

    /**
     * Metodo principal encargado realziar la inicicion y el llamado html, para enviar
     * y recibir datos.
     * @param args - ""utilizaremos
     */
    public static void main(String[] args){
        port(getPort());
        staticFiles.location("/calculator");
        init();
        post("/calculator", (request, response) ->{
            response.type("application/json");
            CalculadoraEstadistica calculadoraEstadistica = new CalculadoraEstadistica();
            calculadoraEstadistica.stringToLinkedList(request.body());
            double media = calculadoraEstadistica.calcularMedia();
            double desviacionEstandar = calculadoraEstadistica.calcularDesviacionEstandar();
            return new Gson().toJson("{\"media\": \""+media+"\", \"desviacionEstandar\": \""+desviacionEstandar+"\"}") ;
        });
    }

    /**
     * Metodo encargado de decidir porque puerto correra la aplicación
     * @return Puerto a utilizar
     */
    static int getPort(){
        if (System.getenv("PORT") != null){
            return Integer.parseInt(System.getenv("PORT"));
        }
        return 4567;
    }

}
