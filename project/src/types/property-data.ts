export type SubmitCommentData = {
  comment: string,
  rating: number,
  hotelId: number,
  cb: () => void,
};

export type FavoriteData = {
  hotelId: number,
  status: 1 | 0,
  cb?: () => void,
};
