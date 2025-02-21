import {
  getTestResults,
  getFilterdResults,
  createTestResult,
  deleteTestResult,
  updateTestResultVisibility,
} from "../utils/jsonAPI";

export default function Profile() {
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
      id: "11",
      title: "내가 임의적으로 만든거",
      views: 333,
      test: "ehlsk",
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
