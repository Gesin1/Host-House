import Link from "next/link";
import { GiCampingTent } from "react-icons/gi";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button size={"icon"} asChild>
      <Link href="/">
        <GiCampingTent className="w-10 h-10" />
      </Link>
    </Button>
  );
};

export default Logo;
