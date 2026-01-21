const data = require('./data');

const getAllData = () => {
    return data;
};

const getRegions = () => {
    return Object.keys(data);
};

const getDistricts = (region) => {
    if (!data[region]) return [];
    return Object.keys(data[region]);
};

const getDistrictDetails = (region, district) => {
    if (!data[region] || !data[region][district]) return null;
    return data[region][district];
};

const getCities = (region, district) => {
    const details = getDistrictDetails(region, district);
    return details ? details.cities : [];
};

const getDataByCity = (city) => {
    if (!city) return null;
    const lowerCity = city.toLowerCase();

    for (const region in data) {
        for (const district in data[region]) {
            const { code, cities } = data[region][district];
            const found = cities.some(c => c.toLowerCase() === lowerCity);
            if (found) {
                return {
                    region,
                    district,
                    code,
                    city: cities.find(c => c.toLowerCase() === lowerCity) // Return correct casing
                };
            }
        }
    }
    return null;
};

const getDataByCode = (code) => {
    if (!code) return null;
    const upperCode = code.toUpperCase();

    for (const region in data) {
        for (const district in data[region]) {
            if (data[region][district].code === upperCode) {
                return {
                    region,
                    district,
                    code: upperCode
                };
            }
        }
    }
    return null;
};

module.exports = {
    getAllData,
    getRegions,
    getDistricts,
    getDistrictDetails,
    getCities,
    getDataByCity,
    getDataByCode
};
