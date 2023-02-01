import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "./http-hook";

export function useOrderData() {
  const token = useSelector((state) => state.login);
  const { sendRequest, pesanVerify } = useHttp();

  const [data, setData] = useState([]);

  try {
    useEffect(() => {
      const fetch = async () => {
        const hasil = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL_API}/datakemas`,
          "GET",
          null,
          {
            "Content-Type": "application/json",
            Authorization: `Dog ${token.tokenLogin}`,
          }
        );
        setData(hasil || []);
        return hasil;
      };
      fetch();
    }, [sendRequest, token.tokenLogin]);
  } catch (err) {
    console.log();
  }

  return {
    pesanVerify,
    data,
  };
}
