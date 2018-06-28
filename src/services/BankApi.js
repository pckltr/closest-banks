import { createAtmList } from './Helpers';
// in case the call is not working for some reason
// import fileData from './file.json';

export async function getBanks() {

    // temp solution to CORB
    const url = 'https://cors-anywhere.herokuapp.com/https://atlas.api.barclays/open-banking/v2.1/atms';

    const data = await fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            return json.data["0"].Brand["0"];
        })
        .catch(function(err) {
            console.log('err', err);
            return err
        });

    // in case the call is not working for some reason
    // const data = fileData.data["0"].Brand["0"];

    return createAtmList(data);

}