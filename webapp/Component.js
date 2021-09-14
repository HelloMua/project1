sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"./controller/HelloDialog"
], function (UIComponent,
	JSONModel, 
	HelloDialog) {
	"use strict";

	return UIComponent.extend("project1.Component", {

		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
			// rootView: {
			// 	viewName: "project1.view.App",
			// 	type: "XML",
			// 	/*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
			// 	id: "app"
			// }
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "world",
					age : 10
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());

			// create the views based on the url/hash
			this.getRouter().initialize();

			// set i18n model
			// var i18nModel = new ResourceModel({
			// 	bundleName : "project1.i18n.i18n"
			// });
			// this.setModel(i18nModel, "i18n");
		},

		exit : function () {
			if (this._helloDialog) {
				this._helloDialog.destroy();
				delete this._helloDialog;
			}
		},
		
		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});
