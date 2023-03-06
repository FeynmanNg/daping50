export const getImageUrl = (userId) => {
  let url = global.__MY_CONFIG__.API_HOST;
  url += `/competitionDetail/getUserImage?userId=${userId}`;
  return url;
}