sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("myfirstdemoapp.myfirstdemoapp.controller.View1", {
        onInit() {
            
    this.getView().setModel(new sap.ui.model.odata.v2.ODataModel("/Northwind/"), "mainModel");

        }
    });
});