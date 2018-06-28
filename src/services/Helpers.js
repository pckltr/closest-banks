export function createAtmList(data) {
    const arr = data.ATM.map(atm => {
        let postalAdress = atm.Location.PostalAddress;
        let fullAddress = '';

        if (postalAdress.BuildingNumber !== undefined) {
            fullAddress += postalAdress.BuildingNumber + ' ';
        }
        if (postalAdress.StreetName !== undefined) {
            fullAddress += postalAdress.StreetName + ' ';
        }
        if (postalAdress.TownName !== undefined) {
            fullAddress += postalAdress.TownName + ', ';
        }
        if (postalAdress.PostCode !== undefined) {
            fullAddress += postalAdress.PostCode;
        }

        let newObj = {...postalAdress, fullAddress, bankName: data.BrandName };
        return newObj;
    });
    return findNearestAtms(arr);
}

function calculateDistance(point1, point2) {
    return Math.hypot(point1.latitude-point2.latitude, point1.longitude-point2.longitude);
}

async function findNearestAtms(arr) {
    try {
        const userLocation = await getUserLocation();
        arr.forEach(atm => {
            let atmLocation = {
                latitude: Number(atm.GeoLocation.GeographicCoordinates.Latitude),
                longitude: Number(atm.GeoLocation.GeographicCoordinates.Longitude)
            };
            atm.distance = calculateDistance(userLocation.coords, atmLocation);
        });
        arr.sort(compareByDistance);

        return arr.slice(0,10);
    } catch (error) {
        console.warn(error.message);
    }
}

function compareByDistance(a, b) {
    return a.distance - b.distance;
}

function getUserLocation() {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })
    } else {
        console.warn('Geolocation not supported.')
    }
}