﻿#include "../../LIB00001_ae_plugins/libraries/ae_plugins_library_v0.01.jsx";var locations = {        script: (new File($.fileName)).parent,        scriptName: (new File($.fileName)).name,        //projectPath: app.project.file.path,        projectName: app.project.name        //activeComp: app.project.activeItem};var scriptControl;var modules = ["WAV - LipSyncPlug","WAV - LipSyncPlug","WAV - LipSyncPlug"];// PRIMARY VERIICATIONfunction primaryVerification() {    var outputModuelsExisit = plugins.outputModule.verify(modules);    if (outputModuelsExisit) {        scriptUI();    } else {};};// SCRIPT UIfunction scriptUI() {    scriptControl = new Window ("palette", "easyJet Mulitlanguage Exporter");        scriptControl.graphics.backgroundColor = scriptControl.graphics.newBrush (scriptControl.graphics.BrushType.SOLID_COLOR, [1,1,1]); // BACKGROUND COLOUR        scriptControl.margins = [20,20,20,20]; // BOX MARGINS            var imageFolder = locations.script.toString() + "/" + locations.scriptName.slice(0,-4) + "_assets/";        var header = scriptControl.add ("image", undefined, File (imageFolder + "header.jpg"));                            var scriptControlExport = scriptControl.add("group");    var scriptControlExportButton = scriptControlExport.add ("button", [0,0,440,20], "RENDER");    scriptControl.show();   };function render() {    //LOOP    plugins.renderQueue.clear();};//STARTprimaryVerification();