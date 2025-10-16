/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["myfirstdemoapp/myfirstdemoapp/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
