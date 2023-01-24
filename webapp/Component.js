/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "josecarlosgz/ManagedObject/model/models",
    "./controller/modulo_reutilizable"
],
    function (UIComponent, Device, models, modulo_reutilizable) {
        "use strict";

        return UIComponent.extend("josecarlosgz.ManagedObject.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                /*
                !(2.1) Creamos una instancia del modulo_reutilizable y le pasamos por parámetro la vista que está abierta en pantalla.
                ?Pasamos la instancia del modulo_reutilizable a una nueva propiedad de esta clase Component.js, de este modo, dicha propiedad tendrá acceso a todas las funciones definidas en modulo_reutilizable.js
                Nota:  Escribimos esta sentencia en el init para que no se creen múltiples instancias al pulsar el botón de la vista App
                */
                this.nueva_propiedad_Component = new modulo_reutilizable(this.getRootControl());
            },

            //!(2.2) Llamamos a una función definida en modulo_reutilizable.js
            onPress_Component: function () {
                this.nueva_propiedad_Component.onPress_modulo_reutilizable();
            }



        });
    }
);