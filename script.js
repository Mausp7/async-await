const renderCountryNames = (countries) => {
    let returnHTML = ``;

    for (const c of countries) {
        returnHTML += `<div>${c.name.official}</div>`;
    };

    return returnHTML;
}

const renderCountryFlags = (countries) => {
    let returnHTML = ``;

    for (const c of countries) {
        returnHTML += `<img src="${c.flags.png}">`;
    };

    return returnHTML;
}

async function loadEvent() {
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    
    //console.log(renderCountryNames(countryArr));
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", `<div id="country-names">${renderCountryNames(countryArr)}</div>`);
    rootElement.insertAdjacentHTML("beforeend", `<div id="country-flags">${renderCountryFlags(countryArr)}</div>`);

    console.log("Loaded");
}

window.addEventListener("load", loadEvent);