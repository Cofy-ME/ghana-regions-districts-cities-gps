const ghanaLocations = require('./index');

console.log("Testing ghana-regions-districts-gps library...");

// Test 1: Get Regions
const regions = ghanaLocations.getRegions();
console.log("Regions found:", regions.length);
if (regions.length === 0) console.error("FAIL: No regions returned");

// Test 2: Get Districts
const ashantiDistricts = ghanaLocations.getDistricts("Ashanti Region");
console.log("Ashanti Districts found:", ashantiDistricts.length);

// Test 3: Get By City
const cityTest = ghanaLocations.getDataByCity("Kumasi");
console.log("Searching for 'Kumasi'...", cityTest);

if (cityTest && cityTest.region === "Ashanti Region") {
    console.log("PASS: Found Kumasi in Ashanti Region");
} else {
    console.error("FAIL: Kumasi lookup failed", cityTest);
}

// Test 4: Get By Code
const codeTest = ghanaLocations.getDataByCode("GA");
console.log("Searching for code 'GA'...", codeTest);

if (codeTest && codeTest.district === "Accra") {
    console.log("PASS: Code GA matched Accra");
} else {
    console.error("FAIL: Code GA lookup failed", codeTest);
}
