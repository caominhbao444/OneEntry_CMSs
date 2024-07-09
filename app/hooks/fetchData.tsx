"use client";
import React, { useCallback, useEffect, useState } from "react";
import { getPageData } from "../action";
import { BannerType } from "@/lib/interface";

const fetchData = ({ url = "", fetchBanner = false }) => {
  const [banner, setBanner] = useState<BannerType>({ title: "", image: "" });
  const [isLoading, setLoading] = useState<boolean>(true);
  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getPageData(url);
      if (fetchBanner) {
        setBanner(data.bannerData);
      }
    } catch (error) {
      console.log("Error fetching data ", error);
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    getData();
  }, [getData]);
  return { banner, isLoading };
};

export default fetchData;
