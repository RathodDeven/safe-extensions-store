import React from "react";
import { useUser } from "../components/wrapper/UserProvider";
import { REVIEW_TABLE_ID } from "../logic/constants";

const useAverageRating = ({
  pluginAddress,
}: {
  pluginAddress?: string;
}): {
  averageRating: number;
  nummberOfRatings: number;
} => {
  const [averageRating, setAverageRating] = React.useState<number>(0);
  const [nummberOfRatings, setNumberOfRatings] = React.useState<number>(0); // [TODO
  const { db } = useUser();

  const fetchAndSetAverageRating = async () => {
    // @ts-ignore
    const { results }: { results: { ratings: number }[] } = await db
      ?.prepare(
        `SELECT ratings FROM ${REVIEW_TABLE_ID} WHERE plugin_address = ?;`
      )
      .bind(pluginAddress)
      .all();
    const average =
      results.reduce((acc, curr) => acc + curr.ratings, 0) / results.length;
    setNumberOfRatings(results.length);
    if (results.length === 0) {
      setAverageRating(0);
      return;
    }
    setAverageRating(average);
  };

  React.useEffect(() => {
    if (!db) return;
    fetchAndSetAverageRating();
  }, [db]);
  return {
    averageRating,
    nummberOfRatings,
  };
};

export default useAverageRating;
