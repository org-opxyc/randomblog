const base = BASE_URL;
const statusCode = 301;
const middleEastCountries = {
    // Always included
    Bahrain: "BH",
    Iran: "IR",
    Iraq: "IQ",
    Israel: "IL",
    Jordan: "JO",
    Kuwait: "KW",
    Lebanon: "LB",
    Oman: "OM",
    Palestine: "PS",
    Qatar: "QA",
    "Saudi Arabia": "SA",
    Syria: "SY",
    Turkey: "TR",
    "United Arab Emirates": "AE",
    Yemen: "YE",
    // Usually included
    Egypt: "EG",
    // Sometimes included
    Afghanistan: "AF",
    Cyprus: "CY",
    Kyrgyzstan: "KG",
    Libya: "LY",
    Pakistan: "PK",
    Sudan: "SD",
    Tajikstan: "TJ",
    Turkmenistan: "TM",
    Uzbekistan: "UZ",
};
const middleEastCountryCodes = Object.keys(middleEastCountries);

const getPrefix = (request) => {
    const countryCode = request?.cf?.country;
    const continent = request?.cf?.continent;
    let prefix = "";

    if (continent === "AF" || countryCode in middleEastCountryCodes) {
        prefix = "/en-mea/";
    } else if (countryCode === "US") {
        prefix = "/us/";
    } else if (countryCode === "JP") {
        prefix = "/jp/";
    } else if (countryCode === "ID") {
        prefix = "/id/";
    }

    return prefix;
};

function handleRequest(request) {
    const url = new URL(request.url);
    let { pathname, search, hash } = url;

    const prefix = getPrefix(request);
    // if there is no need of a prefix or if the required prefix
    // is present in the pathname, simply fetch
    if (prefix === "" || pathname.indexOf(prefix) === 0) {
        return fetch(request);
    }

    pathname = pathname.replace("/", prefix);
    const destinationURL = base + pathname + search + hash;
    return Response.redirect(destinationURL, statusCode);
}

addEventListener("fetch", async (event) => {
    event.respondWith(handleRequest(event.request));
});
