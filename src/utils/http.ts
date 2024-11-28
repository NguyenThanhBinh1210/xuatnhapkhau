/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccesTokenToLS,
  setProfileFromLS,
  setRefreshTokenToLS,
} from "./auth";

function createHttp(): AxiosInstance {
  let accessToken: string | null = getAccessTokenFromLS();
  let refreshToken: string | null = getRefreshTokenFromLS();
  // let refreshTokenRequest: Promise<string> | null = null

  const instance = axios.create({
    baseURL: "http://bong88-stg-api.nccdmm.fun/api/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (accessToken && config.headers) {
        config.headers["authorization"] = `Bearer ${accessToken}`;
        return config;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      const { url } = response.config;
      if (url === "/auth/login") {
        const loginResponse = response.data as any;
        const dataProfile = loginResponse.data.userInfos;
        accessToken = loginResponse.data.tokenInfos.accessToken;
        refreshToken = loginResponse.data.tokenInfos.refreshToken;
        if (loginResponse.statusCode === 200) {
          setProfileFromLS(dataProfile);
          setAccesTokenToLS(accessToken as string);
          setRefreshTokenToLS(refreshToken as string);
          window.location.href = "/";
        }
      } else if (url === "/auth/log-out") {
        accessToken = "";
        refreshToken = "";
        clearLS();
      }
      return response;
    },
    (error) => {
      clearLS();
      accessToken = "";
      refreshToken = "";
      return Promise.reject(error);
    }
  );
  return instance;
}

const http = createHttp();

export default http;
