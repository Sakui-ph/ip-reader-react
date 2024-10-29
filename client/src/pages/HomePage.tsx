import { useState } from "react";

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [geolocation, setGeolocation] = useState("nothing yet");

  return <div>{geolocation}</div>;
}
