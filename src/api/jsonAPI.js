import { json } from "./axios";

export const getTestResults = async (table) => { // JSON 서버에서 검사 결과를 가져오는 로직
  const response = await json.get(`/${table}`);
  return response.data;
};

export const getFilterdResults = async (table, key, value) => { // JSON 서버에서 필터링된 검사 결과를 가져오는 로직
  const response = await json.get(`/${table}?${key}=${value}`)
  return response.data;
};

export const createTestResult = async (table, resultData) => { // JSON 서버에 새로운 검사 결과를 추가하는 로직
  const response = await json.post(`/${table}`, resultData)
  return response.data;
};

export const deleteTestResult = async (table, id) => { // JSON 서버에서 해당 id 값을 찾아 삭제하는 로직
  const response = await json.delete(`/${table}/${id}`)
  return response;
};

export const updateTestResultPublic = async (table, id, isPublic) => { // JSON 서버에 공개/비공개를 전환하는 로직
  const response = await json.patch(`/${table}/${id}`, isPublic);
  return response;
};