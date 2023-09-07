const { writeFileSync, mkdirSync } = require('fs');
require('dotenv').config();

const targetPat = './environments/environment.ts';

const envFileContent = `
export const environment = {
    mapbox_key: "${ process.env.MAPBOX_KEY }",
    otraL: "PROPIEDAD"
};
`;


// recursive si existe la sobreescribe
mkdirSync('./environments', { recursive: true });


writeFileSync( targetPat, envFileContent );