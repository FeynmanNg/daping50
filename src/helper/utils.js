export const getImageUrl = (userId) => {
  let url = global.__MY_CONFIG__.API_HOST;
  url += `/competitionDetail/getUserImage?userId=${userId}`;
  return url;
}

export const filterProvince = (provinceName = '') => {
  return provinceName
    .replace('省', '')
    .replace('自治区', '')
    .replace('特别行政区', '')
    .replace('回族', '')
    .replace('藏族', '')
    .replace('壮族', '')
    .replace('维吾尔', '')
    .replace('新疆兵团', '兵团');
}
