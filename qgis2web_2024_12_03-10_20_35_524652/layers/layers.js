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
var format_AFILIADOS_2 = new ol.format.GeoJSON();
var features_AFILIADOS_2 = format_AFILIADOS_2.readFeatures(json_AFILIADOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFILIADOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFILIADOS_2.addFeatures(features_AFILIADOS_2);
var lyr_AFILIADOS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AFILIADOS_2, 
                style: style_AFILIADOS_2,
                popuplayertitle: "AFILIADOS",
                interactive: true,
                title: '<img src="styles/legend/AFILIADOS_2.png" /> AFILIADOS'
            });
var format_Area21EneroPol_3 = new ol.format.GeoJSON();
var features_Area21EneroPol_3 = format_Area21EneroPol_3.readFeatures(json_Area21EneroPol_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area21EneroPol_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area21EneroPol_3.addFeatures(features_Area21EneroPol_3);
var lyr_Area21EneroPol_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area21EneroPol_3, 
                style: style_Area21EneroPol_3,
                popuplayertitle: "Area21EneroPol",
                interactive: true,
                title: '<img src="styles/legend/Area21EneroPol_3.png" /> Area21EneroPol'
            });
var format_Lotes_4 = new ol.format.GeoJSON();
var features_Lotes_4 = format_Lotes_4.readFeatures(json_Lotes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_4.addFeatures(features_Lotes_4);
var lyr_Lotes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_4, 
                style: style_Lotes_4,
                popuplayertitle: "Lotes",
                interactive: true,
                title: '<img src="styles/legend/Lotes_4.png" /> Lotes'
            });
var format_Manzano_5 = new ol.format.GeoJSON();
var features_Manzano_5 = format_Manzano_5.readFeatures(json_Manzano_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzano_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzano_5.addFeatures(features_Manzano_5);
var lyr_Manzano_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzano_5, 
                style: style_Manzano_5,
                popuplayertitle: "Manzano",
                interactive: true,
                title: '<img src="styles/legend/Manzano_5.png" /> Manzano'
            });

lyr_AREA_VERDE_0.setVisible(true);lyr_Area21Enero_1.setVisible(true);lyr_AFILIADOS_2.setVisible(true);lyr_Area21EneroPol_3.setVisible(true);lyr_Lotes_4.setVisible(true);lyr_Manzano_5.setVisible(true);
var layersList = [lyr_AREA_VERDE_0,lyr_Area21Enero_1,lyr_AFILIADOS_2,lyr_Area21EneroPol_3,lyr_Lotes_4,lyr_Manzano_5];
lyr_AREA_VERDE_0.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', });
lyr_Area21Enero_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'icon_url': 'icon_url', });
lyr_AFILIADOS_2.set('fieldAliases', {'Id': 'Id', 'NroLote': 'NroLote', 'Manzano': 'Manzano', 'Codigo': 'Codigo', 'CANTIDAD': 'CANTIDAD', 'UV': 'UV', 'Nro_Manzan': 'Nro_Manzan', 'Nro_Lote': 'Nro_Lote', 'Nom_Prop': 'Nom_Prop', 'CI-1': 'CI-1', 'CI-Expedid': 'CI-Expedid', 'Prop2': 'Prop2', 'CI-1_1': 'CI-1_1', 'CI-Expedi2': 'CI-Expedi2', 'Sup_Plano': 'Sup_Plano', 'Departamen': 'Departamen', 'Provincia': 'Provincia', 'Canton': 'Canton', 'Distrito': 'Distrito', 'SubDistrit': 'SubDistrit', 'Sector': 'Sector', 'FechaCompr': 'FechaCompr', 'Vendedor': 'Vendedor', 'Obs': 'Obs', 'Documentos': 'Documentos', });
lyr_Area21EneroPol_3.set('fieldAliases', {'Id': 'Id', 'area': 'area', });
lyr_Lotes_4.set('fieldAliases', {'Id': 'Id', 'NroLote': 'NroLote', 'Manzano': 'Manzano', 'Codigo': 'Codigo', });
lyr_Manzano_5.set('fieldAliases', {'Id': 'Id', 'Manzano': 'Manzano', });
lyr_AREA_VERDE_0.set('fieldImages', {'Id': '', 'AREA': '', });
lyr_Area21Enero_1.set('fieldImages', {'X': '', 'Y': '', 'icon_url': '', });
lyr_AFILIADOS_2.set('fieldImages', {'Id': '', 'NroLote': '', 'Manzano': '', 'Codigo': '', 'CANTIDAD': '', 'UV': '', 'Nro_Manzan': '', 'Nro_Lote': '', 'Nom_Prop': '', 'CI-1': '', 'CI-Expedid': '', 'Prop2': '', 'CI-1_1': '', 'CI-Expedi2': '', 'Sup_Plano': '', 'Departamen': '', 'Provincia': '', 'Canton': '', 'Distrito': '', 'SubDistrit': '', 'Sector': '', 'FechaCompr': '', 'Vendedor': '', 'Obs': '', 'Documentos': '', });
lyr_Area21EneroPol_3.set('fieldImages', {'Id': '', 'area': '', });
lyr_Lotes_4.set('fieldImages', {'Id': '', 'NroLote': '', 'Manzano': '', 'Codigo': '', });
lyr_Manzano_5.set('fieldImages', {'Id': '', 'Manzano': '', });
lyr_AREA_VERDE_0.set('fieldLabels', {'Id': 'no label', 'AREA': 'header label - visible with data', });
lyr_Area21Enero_1.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'icon_url': 'no label', });
lyr_AFILIADOS_2.set('fieldLabels', {'Id': 'no label', 'NroLote': 'header label - visible with data', 'Manzano': 'header label - visible with data', 'Codigo': 'no label', 'CANTIDAD': 'no label', 'UV': 'no label', 'Nro_Manzan': 'header label - visible with data', 'Nro_Lote': 'header label - visible with data', 'Nom_Prop': 'header label - visible with data', 'CI-1': 'no label', 'CI-Expedid': 'no label', 'Prop2': 'header label - visible with data', 'CI-1_1': 'no label', 'CI-Expedi2': 'no label', 'Sup_Plano': 'header label - visible with data', 'Departamen': 'no label', 'Provincia': 'no label', 'Canton': 'no label', 'Distrito': 'no label', 'SubDistrit': 'no label', 'Sector': 'no label', 'FechaCompr': 'header label - visible with data', 'Vendedor': 'header label - visible with data', 'Obs': 'no label', 'Documentos': 'no label', });
lyr_Area21EneroPol_3.set('fieldLabels', {'Id': 'no label', 'area': 'no label', });
lyr_Lotes_4.set('fieldLabels', {'Id': 'no label', 'NroLote': 'hidden field', 'Manzano': 'no label', 'Codigo': 'header label - visible with data', });
lyr_Manzano_5.set('fieldLabels', {'Id': 'no label', 'Manzano': 'header label - visible with data', });
lyr_Manzano_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});