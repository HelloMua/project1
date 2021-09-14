sap.ui.define([
    // "sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
	"use strict";

	// XMLView.create({
    //     viewName: "project1.view.App"
    // }).then(function (oView) {
    //     oView.placeAt("content");
    // });

    new ComponentContainer({
        name: "project1",
        setting: {
            id: "project1"
        },
        async: true
    }).placeAt("content");
});