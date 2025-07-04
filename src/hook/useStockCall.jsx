import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, stockSuccess,getProCatBrandSuccess } from "../features/StockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();

  const getData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${url}`);
      console.log(data);
      dispatch(stockSuccess({data,url}));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.post(url, info);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const updateStockData = async (url, info) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.put(`${url}/${info._id}`, info);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };


  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken.delete(`${url}/${id}`);

      getData(url);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  // -----------------
    // PROMISE ALL YAPILARI
  //* eş zamanlı istek atma. aynı anda istek atılıyor aynı anda responselar gelmeye başlıyor. Zaman noktasında da avantajlı. En uzun hangi istek sürdüyse veriler ondan sonra valid olur. Birbirine bağımlı isteklerde en büyük avantajı hata durumu. İsteklerden biri bile hatalı olursa hepsi iptal olur.

  const getProCatBrand = async () => {
    dispatch(fetchStart());

    try {
      // const [a,b,c]=[2,4,6]  => Array destructure

      const [products, categories, brands] = await Promise.all([
        axiosWithToken("products"),
        axiosWithToken("categories"),
        axiosWithToken("brands"),
      ]);
      dispatch(
        getProCatBrandSuccess([
          products?.data?.data,
          categories?.data?.data,
          brands?.data?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

 
  /* -------------------------------------------------------------------------- */
  const getPurcBrandPro = async () => {
    dispatch(fetchStart());

    try {
      // const [a,b,c]=[2,4,6]  => Array destructure

      const [purchases, brands, products,firms] = await Promise.all([
        axiosWithToken("purchases"),
        axiosWithToken("brands"),
        axiosWithToken("products"),
        axiosWithToken("firms"),
      ]);

      dispatch(
        getPurcBrandProSuccess([
          purchases?.data?.data,
          brands?.data?.data,
          products?.data?.data,
          firms?.data?.data,
        ])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  /* -------------------------------------------------------------------------- */
  const getSalesBrandPro = async () => {
    dispatch(fetchStart());

    try {
      const [sales, brands, products] = await Promise.all([
        axiosWithToken("sales"),
        axiosWithToken("brands"),
        axiosWithToken("products"),
      ]);

      dispatch(
        getSalesBrandProSuccess([sales?.data?.data, brands?.data?.data, products?.data?.data])
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return {
    getData,
    deleteStockData,
    createStockData,
    updateStockData,
    getProCatBrand,
    getPurcBrandPro,
    getSalesBrandPro,
   
  };
};




export default useStockCall;
