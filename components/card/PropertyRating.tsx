import { FaStar } from "react-icons/fa";

function PropertyRating({ inPage }: { propertyId: string; inPage: boolean }) {
  // temp

  const rating = 4.2;
  const count = 100;

  const clasName = `flex gap-1 items-center ${inPage ? "text-md" : "text-xs"}`;
  const countText = count > 1 ? "reviews" : "review";
  const countValue = `(${count}) ${inPage ? countText : ""}`;

  return (
    <span className={clasName}>
      <FaStar className="w-4 h-4" />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;
