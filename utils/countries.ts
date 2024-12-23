import countries from "world-countries";

// Function to convert country code to flag emoji
// const getFlagEmoji = (countryCode: string) => {
//   const base = 127397; // The base Unicode for regional indicator symbols
//   return countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => String.fromCodePoint(base + char.charCodeAt(0)))
//     .join("");
// };

export const formattedCountries = countries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    // flag: getFlagEmoji(item.cca2),
    // flag: item.flag,
    flag: `https://flagcdn.com/w320/${item.cca2.toLowerCase()}.png`, // Flag image URL
    location: item.latlng,
    region: item.region,
  };
});

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((item) => item.code === code);
};
