import { useContext } from "react";
import { AgeContext } from "./AgeContext";
import { NameContext } from "./NameContext";

export default function Header() {
  const age = useContext(AgeContext);
  const name = useContext(NameContext);

  console.log("age::", age, "name::", name);
  return <div>hello</div>;
}
