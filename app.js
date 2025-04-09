// Initialize and display the map centered on Zimbabwe
function initMap() {
    // Default coordinates for Zimbabwe (centered on Harare)
    const zimbabwe = { lat: -17.825166, lng: 31.03351 };
    
    // Create map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: zimbabwe,
        mapTypeId: "roadmap",
    });

    // Traffic layer
    const trafficLayer = new google.maps.TrafficLayer();
    let trafficEnabled = true;
    trafficLayer.setMap(map);

    // Update timestamp
    document.getElementById('updateTime').textContent = new Date().toLocaleString();

    // Toggle traffic button
    document.getElementById('trafficToggle').addEventListener('click', () => {
        trafficEnabled = !trafficEnabled;
        trafficLayer.setMap(trafficEnabled ? map : null);
        document.getElementById('trafficToggle').textContent = 
            trafficEnabled ? 'Toggle Traffic' : 'Show Traffic';
    });

    // Add info window with instructions
    const infoWindow = new google.maps.InfoWindow({
        content: `<h3 class="font-bold mb-2">Zimbabwe Traffic Updates</h3>
                 <p>This app shows real-time traffic conditions in Zimbabwe.</p>
                 <p class="mt-2 text-sm text-red-600">Note: To enable full functionality, please add your Google Maps API key.</p>`,
        position: zimbabwe
    });
    infoWindow.open(map);
}

// Error handling for Google Maps API
window.onerror = function() {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-0 left-0 right-0 bg-red-600 text-white p-4 text-center z-50';
    errorDiv.innerHTML = `
        <p class="font-bold">Google Maps Error</p>
        <p>Please ensure you have a valid API key and have enabled the Maps JavaScript API.</p>
        <p class="text-sm mt-2">
            <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
               target="_blank" 
               class="underline">Get API Key Instructions</a>
        </p>
    `;
    document.body.prepend(errorDiv);
};
