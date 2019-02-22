var wms_layers = [];

        var lyr_CartoDbDarkMatter_0 = new ol.layer.Tile({
            'title': 'CartoDbDarkMatter_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });var format_Homicides_TM_1 = new ol.format.GeoJSON();
var features_Homicides_TM_1 = format_Homicides_TM_1.readFeatures(json_Homicides_TM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Homicides_TM_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Homicides_TM_1.addFeatures(features_Homicides_TM_1);var lyr_Homicides_TM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Homicides_TM_1, 
                style: style_Homicides_TM_1,
                title: '<img src="styles/legend/Homicides_TM_1.png" /> Homicides_TM'
            });

lyr_CartoDbDarkMatter_0.setVisible(true);lyr_Homicides_TM_1.setVisible(true);
var layersList = [lyr_CartoDbDarkMatter_0,lyr_Homicides_TM_1];
lyr_Homicides_TM_1.set('fieldAliases', {'uid': 'uid', 'reported_d': 'reported_d', 'victim_rac': 'victim_rac', 'victim_age': 'victim_age', 'victim_sex': 'victim_sex', 'city': 'city', 'state': 'state', 'lat': 'lat', 'lon': 'lon', 'dispositio': 'dispositio', 'date2': 'date2', });
lyr_Homicides_TM_1.set('fieldImages', {'uid': 'TextEdit', 'reported_d': 'TextEdit', 'victim_rac': 'TextEdit', 'victim_age': 'TextEdit', 'victim_sex': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'dispositio': 'TextEdit', 'date2': 'TextEdit', });
lyr_Homicides_TM_1.set('fieldLabels', {'uid': 'no label', 'reported_d': 'header label', 'victim_rac': 'no label', 'victim_age': 'no label', 'victim_sex': 'no label', 'city': 'no label', 'state': 'no label', 'lat': 'no label', 'lon': 'no label', 'dispositio': 'no label', 'date2': 'no label', });
lyr_Homicides_TM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});