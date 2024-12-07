var wms_layers = [];

var format_AREA_VERDE_0 = new ol.format.GeoJSON();
var features_AREA_VERDE_0 = format_AREA_VERDE_0.readFeatures(json_AREA_VERDE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_VERDE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_VERDE_0.addFeatures(features_AREA_VERDE_0);
var lyr_AREA_VERDE_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_VERDE_0, 
                style: style_AREA_VERDE_0,
                popuplayertitle: "AREA_VERDE",
                interactive: true,
                title: '<img src="styles/legend/AREA_VERDE_0.png" /> AREA_VERDE'
            });
var format_Area21Enero_1 = new ol.format.GeoJSON();
var features_Area21Enero_1 = format_Area21Enero_1.readFeatures(json_Area21Enero_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area21Enero_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area21Enero_1.addFeatures(features_Area21Enero_1);
var lyr_Area21Enero_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area21Enero_1, 
                style: style_Area21Enero_1,
                popuplayertitle: "Area21Enero",
                interactive: true,
                title: '<img src="styles/legend/Area21Enero_1.png" /> Area21Enero'
            });
var format_Area21EneroPol_2 = new ol.format.GeoJSON();
var features_Area21EneroPol_2 = format_Area21EneroPol_2.readFeatures(json_Area21EneroPol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area21EneroPol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area21EneroPol_2.addFeatures(features_Area21EneroPol_2);
var lyr_Area21EneroPol_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area21EneroPol_2, 
                style: style_Area21EneroPol_2,
                popuplayertitle: "Area21EneroPol",
                interactive: true,
                title: '<img src="styles/legend/Area21EneroPol_2.png" /> Area21EneroPol'
            });
var format_Lotes_3 = new ol.format.GeoJSON();
var features_Lotes_3 = format_Lotes_3.readFeatures(json_Lotes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_3.addFeatures(features_Lotes_3);
var lyr_Lotes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_3, 
                style: style_Lotes_3,
                popuplayertitle: "Lotes",
                interactive: true,
                title: '<img src="styles/legend/Lotes_3.png" /> Lotes'
            });
var format_Manzano_4 = new ol.format.GeoJSON();
var features_Manzano_4 = format_Manzano_4.readFeatures(json_Manzano_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzano_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzano_4.addFeatures(features_Manzano_4);
var lyr_Manzano_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzano_4, 
                style: style_Manzano_4,
                popuplayertitle: "Manzano",
                interactive: true,
                title: '<img src="styles/legend/Manzano_4.png" /> Manzano'
            });

lyr_AREA_VERDE_0.setVisible(true);lyr_Area21Enero_1.setVisible(true);lyr_Area21EneroPol_2.setVisible(true);lyr_Lotes_3.setVisible(true);lyr_Manzano_4.setVisible(true);
var layersList = [lyr_AREA_VERDE_0,lyr_Area21Enero_1,lyr_Area21EneroPol_2,lyr_Lotes_3,lyr_Manzano_4];
lyr_AREA_VERDE_0.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', });
lyr_Area21Enero_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'icon_url': 'icon_url', });
lyr_Area21EneroPol_2.set('fieldAliases', {'Id': 'Id', 'area': 'area', });
lyr_Lotes_3.set('fieldAliases', {'Id': 'Id', 'NroLote': 'NroLote', 'Manzano': 'Manzano', 'Codigo': 'Codigo', });
lyr_Manzano_4.set('fieldAliases', {'Id': 'Id', 'Manzano': 'Manzano', });
lyr_AREA_VERDE_0.set('fieldImages', {'Id': '', 'AREA': '', });
lyr_Area21Enero_1.set('fieldImages', {'X': '', 'Y': '', 'icon_url': '', });
lyr_Area21EneroPol_2.set('fieldImages', {'Id': '', 'area': '', });
lyr_Lotes_3.set('fieldImages', {'Id': '', 'NroLote': '', 'Manzano': '', 'Codigo': '', });
lyr_Manzano_4.set('fieldImages', {'Id': '', 'Manzano': '', });
lyr_AREA_VERDE_0.set('fieldLabels', {'Id': 'no label', 'AREA': 'no label', });
lyr_Area21Enero_1.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'icon_url': 'no label', });
lyr_Area21EneroPol_2.set('fieldLabels', {'Id': 'no label', 'area': 'no label', });
lyr_Lotes_3.set('fieldLabels', {'Id': 'no label', 'NroLote': 'no label', 'Manzano': 'no label', 'Codigo': 'no label', });
lyr_Manzano_4.set('fieldLabels', {'Id': 'no label', 'Manzano': 'no label', });
lyr_Manzano_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});