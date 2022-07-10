import { fruits } from "data";
import { useEffect, useState } from "react";

export const useAxios = () => {
  const [data, setData] = useState(fruits);

  return data;
};
