import useAuthStore from "../utils/auth/useAuthStore";
import {
  getTestResults,
  getFilterdResults,
  createTestResult,
  deleteTestResult,
  updateTestResultVisibility,
} from "../utils/jsonAPI";
import { v4 as uuidv4 } from "uuid";

export default function Profile() {
  const { user } = useAuthStore();

  async function handleCallResults() {
    const response = await getTestResults("resultsTable");
    console.log(response);
    const filterdResponse = await getFilterdResults(
      "resultsTable",
      "views",
      300
    );
    console.log(filterdResponse);
    const create = await createTestResult("resultsTable", {
      id: uuidv4(),
      title: "MBTI",
      test: user,
      time: new Date().toLocaleString("ko-KR"),
    });
    console.log(create);
  }

  async function handleDeleteResults() {
    const deleteResult = await deleteTestResult("resultsTable", "11");
    console.log(deleteResult);
  }

  async function handleUpdateResults() {
    const update = await updateTestResultVisibility("resultsTable", "11", {
      title: "간단한 수정",
    });
    console.log(update);
  }

  return (
    <div>
      <button onClick={handleCallResults}>불러와봐</button>
      <br />
      <button onClick={handleDeleteResults}>삭제한다</button>
      <br />
      <button onClick={handleUpdateResults}>변경한다</button>
    </div>
  );
}
