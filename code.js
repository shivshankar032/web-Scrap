function extractCampData() {
  const getText = (selector) => {
    const el = document.querySelector(selector);
    return el ? el.textContent.trim() : null;
  };

  const getList = (selector) => {
    return Array.from(document.querySelectorAll(selector)).map(e => e.textContent.trim());
  };

  const data = {
    highlights: getList('.camp-highlights li'),               // update selector as needed
    overview: getText('.camp-overview'),                      // update selector as needed
    ageRange: getText('.camp-age-range'),
    availability: getText('.camp-availability'),
    minimumStay: getText('.camp-minimum-stay'),
    price: getText('.camp-price'),
    mainLanguage: getText('.camp-language'),
    numberOfCampers: getText('.camp-number-of-campers'),
    gender: getText('.camp-gender'),
    bedrooms: getText('.camp-bedrooms'),
    activities: getList('.camp-activities li'),
    languageLessons: getText('.camp-language-lessons'),
    languagesTaught: getList('.camp-languages-taught li'),
    accommodationAndFacilities: getList('.camp-accommodation li')
  };

  console.log(JSON.stringify(data, null, 2));
}

extractCampData();
