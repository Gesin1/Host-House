import { FaStar } from "react-icons/fa";
import { fetchPropertyRating } from "@/utils/actions";

async function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  // temp

  const { count, rating } = await fetchPropertyRating(propertyId);
  if (count === 0) return null;
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
