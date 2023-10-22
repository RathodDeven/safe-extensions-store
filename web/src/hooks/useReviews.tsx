import React from "react";
import { ReviewTableScheme, useUser } from "../components/wrapper/UserProvider";
import { REVIEW_TABLE_ID } from "../logic/constants";

const useReviews = ({
  pluginAddress,
}: {
  pluginAddress?: string;
}): {
  reviews: ReviewTableScheme[];
  fetchReviews: () => Promise<void>;
  addReview: (review: ReviewTableScheme) => void;
} => {
  const [reviews, setReviews] = React.useState<ReviewTableScheme[]>([]);
  const { db } = useUser();

  const fetchReviews = async () => {
    // @ts-ignore
    const {
      results,
    }: {
      results: ReviewTableScheme[];
    } = await db
      ?.prepare(`SELECT * FROM ${REVIEW_TABLE_ID} WHERE plugin_address = ?;`)
      .bind(pluginAddress)
      .all();
    console.log("results", results);
    setReviews(results);
  };

  React.useEffect(() => {
    if (!db || !pluginAddress) return;
    fetchReviews();
  }, [db, pluginAddress]);

  return {
    reviews,
    fetchReviews,
    addReview: (review: ReviewTableScheme) => {
      setReviews([review, ...reviews]);
    },
  };
};

export default useReviews;
