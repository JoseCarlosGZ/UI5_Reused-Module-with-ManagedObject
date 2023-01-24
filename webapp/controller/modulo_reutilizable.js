// @ts-nocheck
sap.ui.define([
    "sap/ui/base/ManagedObject"
],
    /**
     * 
     * @param {typeof sap.ui.base.ManagedObject} ManagedObject 
     */
    function (ManagedObject) {
        "use strict"

        //!(3.1) Heredamos de la clase de la API de SAPUI5 ManagedObject para que podamos crear una instancia de dicho código en el Component.js y tener acceso a éste módulo donde vamos a centralizar las funciones a reutilizar
        return ManagedObject.extend("logaligroup.SAPUI5.controller.modulo_reutilizable", {

            
            //!(3.2) Creamos el constructor de este módulo para que 
            constructor: function (obj_vista_recibida) {
                /*
                !(3.3) propiedadVR: propiedad que se le añade a la clase modulo_reutilizable. Dicha propiedad contendrá la vista que se envie desde el Component.js que corresponderá con la vista mostrada en pantalla y rescatada gracias a la instrucción this.getRootControl()
                */
                this.propiedadVR = obj_vista_recibida;
            },



            onPress_modulo_reutilizable: function () {

                //oView contiene un objeto vista, tiene acceso a los mismos métodos que this.getView().... tendría desde el controlador de esa vista.
                const oView = this.propiedadVR;

                //Obtenemos el nombre de la vista
                var sNamespace = oView.getViewName();
                //Obtenemos la posición del último punto de la string
                var indexLastDot = sNamespace.lastIndexOf('.');
                //Obtenemos una substring a partir del siguiente carácter al último punto, hasta el final del string.
                var viewName = sNamespace.slice(indexLastDot + 1);
                oView.byId("miInput").setValue("Estas en la vista de nombre → " + viewName);


            }
        });
    });