sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller) {
    'use strict';
   return Controller.extend("sap.ui.controller.wolkthrough.App",{
    onShowHello: function(){
        alert("Hello there!")
    }
   }) 
});