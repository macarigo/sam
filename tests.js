function haversine(lat1, lng1, lat2, lng2) {
    const toRad = (angle) => (angle * Math.PI) / 180;
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

const testLat1 = 41.17925153207525;
const testLng1 = -8.587510585784914;
const testLat2 = 41.18222309956026;
const testLng2 = -8.587510585784914;

console.log(haversine(testLat1, testLng1, testLat2, testLng2));