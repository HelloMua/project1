sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(
	Controller,
	MessageToast
) {
	"use strict";

	return Controller.extend("project1.controller.HelloPanel", {

        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sRecipient1 = this.getView().getModel().getProperty("/recipient/age");
            var sMsg = oBundle.getText("helloMsg", [sRecipient, sRecipient1]);

            // show message
            MessageToast.show(sMsg);
        },

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});