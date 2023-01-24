sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("josecarlosgz.ManagedObject.controller.App", {
            onInit: function () {

            },
            
            //!(1) Llamamos a una función del Component.js mediante el método getOwnerComponent() que tiene acceso a todas las funciones y métodos del Componponent.js
            onPress_AppController: function () {
                // var nombreVista = sap.ui.core.UIComponent.getRouterFor(this).getCurrentRoute().getName();
                this.getOwnerComponent().onPress_Component();
            }

        });
    });
