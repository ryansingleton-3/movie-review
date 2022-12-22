

const REVIEWS_ENDPOINT = "https://63792d007eb4705cf27caba9.mockapi.io/reviews";

const getFetchOptions = (method, data) => ({
  method: method,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});

export const getReviews = async () => {
  try {
    const resp = await fetch(REVIEWS_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
    return resp;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const createReview = async (review) => {
  try {
    const resp = await fetch(REVIEWS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review }),
    }).then((resp) => resp.json());
    return resp;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const updateReview = async (review) => {
  try {
    const resp = await fetch(
      REVIEWS_ENDPOINT + "/" + review.id,
      getFetchOptions("PUT", { review: review.review })
    );
    return resp;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const deleteReview = async (id) => {
  try {
    const resp = await fetch(REVIEWS_ENDPOINT + "/" + id, {
      method: "DELETE",
    });
    return resp;
  } catch (e) {
    console.log(e);
    return null;
  }
};
