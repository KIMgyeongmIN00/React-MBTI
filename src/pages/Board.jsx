import { useState } from "react";
import BoardCard from "../components/commons/BoardCard";
import { getTestResults } from "../utils/jsonAPI";
import { useEffect } from "react";

export default function Board() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getTestList() {
      const response = await getTestResults("resultsTable");
      setList([...response]);
    }

    getTestList();
  }, []);

  return (
    <div className="container grid mx-auto p-4 gap-y-6 max-w-2xl pb-20">
      {list.map((item) => {
        return (
          <BoardCard
            key={item.id}
            mbti={item.title}
            writeUser={item.test}
            time={item.time}
            description={item.description}
          />
        );
      })}
    </div>
  );
}
