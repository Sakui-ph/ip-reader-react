import { useEffect, useState } from "react";
import { IpGet, IpSearch } from "../api/ipinfo";

export default function HomePage() {
  const [ip, setIp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [currentIp, setCurrentIp] = useState({
    ip: "",
  });
  const [geolocation, setGeolocation] = useState({
    city: "",
    region: "",
    country: "",
    loc: "",
    org: "",
    postal: "",
    timezone: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitting");
    setSubmitting(true);
  };

  useEffect(() => {
    IpGet().then((response) => {
      setCurrentIp(response);
      setGeolocation(response);
    });
  }, []);

  useEffect(() => {
    if (submitting) {
      IpSearch(ip).then((response) => {
        console.log(response);
        setCurrentIp(response);
        setGeolocation(response);
      });
      setSubmitting(false);
    }
  }, [submitting, ip]);

  return (
    <div>
      <div>
        <ul>
          <li>Ip: {currentIp.ip}</li>
          <li>City: {geolocation.city}</li>
          <li>Region: {geolocation.region}</li>
          <li>Country: {geolocation.country}</li>
          <li>Location: {geolocation.loc}</li>
          <li>Organization: {geolocation.org}</li>
          <li>Postal: {geolocation.postal}</li>
          <li>Timezone: {geolocation.timezone}</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for IP address"
          onChange={(e) => setIp(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
