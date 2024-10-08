// maptilersdk.config.apiKey = 'qDzB0QjUyb3sFOzUgAe1';
// const map = new maptilersdk.Map({
//     container: 'map', 
//     style: "streets-v2",
//     center: [85.3910, 26.1197], // Adjust the center if needed
//     zoom: 9, // starting zoom
// });

// function loadMap(){
//     map.on('load', function () {
        
//         map.addSource('store-locations', { // Changed to 'store-locations' for consistency
//           type: 'geojson',
//           data: {
//             "type": "FeatureCollection",
//             "features": [{
//               "type": "Feature",
//               "properties": { 
//                 storeId: '0001',
//                 icon: 'marker' 
//               },
//               "geometry": {
//                 "type": "Point",
//                 "coordinates": [85.3910, 26.1197] // Make sure this is correct for your location
//               }
//             }]
//           }
//         });
      
//         // Add a layer to display the 'store-locations' source data as a symbol
//         map.addLayer({
//             'id': 'store-layer',
//             'type': 'symbol',
//             'source': 'store-locations', // Consistent with the source name
//             'layout': {
//                 'icon-image': '{icon}-15', 
//                 'icon-size': 1.5,
//                 'text-field': '{storeId}',
//                 'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
//                 'text-size': 12,
//                 'text-offset': [0, 1.5], 
//                 'text-anchor': 'top' 
//             },
//             'paint': {
//                 'text-color': '#000000',
//                 'text-halo-color': '#ffffff',
//                 'text-halo-width': 1
//             }
//         });
//     });    
// }

// loadMap();

maptilersdk.config.apiKey = 'qDzB0QjUyb3sFOzUgAe1';
const map = new maptilersdk.Map({
    container: 'map', 
    style: "streets-v2",
    center: [85.3910, 26.1197],
    zoom: 9,
});

//fetch stores from api
async function getStores() {
    const res = await fetch('api/v1/stores')
    const data = await res.json()

    const stores = data.data.map(store =>{
        return {
            type: "Feature",
            properties: { storeId: store.storeId }, // Assuming storeId comes from your API data
            geometry: {
                type: "Point",
                coordinates: [store.location.coordinates[0],store.location.coordinates[1]] // Assuming longitude and latitude come from your API data
            }
        };
    })
    loadMap(stores);
}


function loadMap(stores){
    map.on('load', function () {        
            
        map.addSource('store-locations', { // Changed to 'store-locations' for consistency
            type: 'geojson',
            data: {
                "type": "FeatureCollection",
                "features": stores
            }
        });
          
            // Add a layer to display the 'store-locations' source data as a symbol
            map.addLayer({
                'id': 'store-layer',
                'type': 'symbol',
                'source': 'store-locations', // Consistent with the source name
                'layout': {
                    'icon-image': '{icon}-15', 
                    'icon-size': 1.5,
                    'text-field': '{storeId}',
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-size': 12,
                    'text-offset': [0, 1.5], 
                    'text-anchor': 'top' 
                },
                'paint': {
                    'text-color': '#000000',
                    'text-halo-color': '#ffffff',
                    'text-halo-width': 1
                }
            });
        });    
    }

getStores();
