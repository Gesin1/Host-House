import Image from "next/image";
import { findCountryByCode } from "@/utils/countries";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validateCountry = findCountryByCode(countryCode)!;

  const countryName =
    validateCountry.name.length > 20
      ? `${validateCountry.name.substring(0, 20)}...`
      : validateCountry.name;
  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      <Image
        src={validateCountry.flag}
        alt={`${validateCountry.name}`}
        width={20}
        height={20}
      />
      {countryName}
    </span>
  );
}

export default CountryFlagAndName;
