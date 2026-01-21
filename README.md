# Ghana Regions, Districts & Cities GPS

A comprehensive Node.js library providing data on Ghana's 16 regions, 261 districts, and over 1,200 cities/towns, including their specific GPS codes.

## Installation

```bash
npm install ghana-regions-districts-cities-gps
```

## Usage

```javascript
const ghanaLocations = require('ghana-regions-districts-cities-gps');

// 1. Get all regions
const regions = ghanaLocations.getRegions();
// Returns: ['Ashanti Region', 'Greater Accra Region', ...]

// 2. Get districts in a region
const ashantiDistricts = ghanaLocations.getDistricts("Ashanti Region");
// Returns: ['Kumasi', 'Asokwa', ...]

// 3. Get details for a specific district (Code & Cities)
const adentaDetails = ghanaLocations.getDistrictDetails("Greater Accra Region", "Adentan");
/* Returns: 
{ 
    code: "GD", 
    cities: ["Adenta", "Frafraha", "Adjiringanor"] 
}
*/

// 4. Get just the cities in a district
const adentaCities = ghanaLocations.getCities("Greater Accra Region", "Adentan");
// Returns: ["Adenta", "Frafraha", "Adjiringanor"]

// 5. Look up GPS info by City Name (Case insensitive)
const cityInfo = ghanaLocations.getDataByCity("Kumasi");
/* Returns:
{
    region: 'Ashanti Region',
    district: 'Kumasi',
    code: 'AK',
    city: 'Kumasi'
}
*/

// 6. Look up Location by GPS Code
const codeInfo = ghanaLocations.getDataByCode("GA");
/* Returns:
{
    region: 'Greater Accra Region',
    district: 'Accra',
    code: 'GA'
}
*/
```

## Data Source
- Validated against 2024 administrative boundaries.
- Contains all 16 Regions and 261 Districts.

## License
ISC
