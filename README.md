# Zimbabwe Traffic Updates App

A real-time traffic monitoring application for Zimbabwe using Google Maps API.

## Setup Instructions

1. **Get a Google Maps API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable "Maps JavaScript API" and "Maps Embed API"
   - Create an API key
   - Add your domain to API restrictions if needed

2. **Add API Key to Application**:
   - Open `index.html`
   - Replace `YOUR_API_KEY` in the script URL with your actual API key:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=places" async defer></script>
   ```

3. **Run the Application**:
   - Open `index.html` in a web browser
   - The map should load centered on Zimbabwe with traffic data

## Features
- Real-time traffic overlay
- Toggle traffic visibility
- Centered on Zimbabwe (default view: Harare)
- Responsive design
- Automatic timestamp updates
- Error handling for missing API key

## Requirements
- Google Maps API key
- Modern web browser

## Troubleshooting
If you see an error message:
1. Verify your API key is correct
2. Ensure "Maps JavaScript API" is enabled
3. Check API key restrictions if applicable
