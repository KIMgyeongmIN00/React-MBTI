import { auth } from './axios';

export const register = async (userData) => { // JWS서버에 회원가입 요청을 보내는 코드
  const response = await auth.post(`/register`, userData);
  return response.data;
};

export const login = async (userData) => { // JWS에서 인증 토큰 요청을 보내는 코드
  const response = await auth.post(`/login`, userData)
  return response.data;
};

export const getUserProfile = async (token) => { // 현재 해당 프로필을 response 받는 코드
  const response = await auth.get(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data;
};

export const updateProfile = async (formData, token) => { // 서버에 저장된 프로필 데이터를 수정하는 코드
  const response = await auth.patch(`/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  }
  );
  return response.data;
};