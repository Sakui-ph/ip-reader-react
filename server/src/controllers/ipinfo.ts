import { Request, Response } from "express";

module.exports = {
  getUserIP: async (req: Request, res: Response) => {
    let url = "https://ipinfo.io/geo";
    if (req.query.ip !== null) {
      url = `https://ipinfo.io/${req.body.ip}/geo`;
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const result = fetch(url, {
      method: "GET",
      headers: headers,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => res.send(result))
      .catch((error) => console.error(error));
  },
};

export default module.exports;
