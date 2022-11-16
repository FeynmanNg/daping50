import Mock from 'mockjs';
import { filterProvince, validProvince } from '@/helper/utils';

export const zfbData = {
  list: buildZfb()
};
// 处理排名 和 省名
zfbData.list.forEach((_, i) => {
  _.province = filterProvince(_.province);
  _.rankNo = i + 1;
});


/**
 * 需求：全国各省的数据
 * 因为 mockJs 实现的随机数（重复各省），不能把全国的数据模拟出来
 * 只能去重后，再次生成，至各省数据完整
 */
function buildZfb(data = []) {
  if (data.length === 32) { // 全国 + 新疆兵团
    return data;
  }
  if (data.length) {
    const another = {
      areaCode: Mock.Random.natural(10000),
      competitionMap: {
        科目一: Mock.Random.natural(1, 100),
        科目二: Mock.Random.natural(1, 100)
      },
      province: Mock.Random.province(),
      rankNo: 0,
      totalScore: Mock.Random.natural(1, 100)
    };
    // 判断是否存在
    const exist = data.find(_ => validProvince(_.province, another.province));
    if (!exist) data.push(another);
    // 把 【海外】去掉、港澳台 去掉
    data = data.filter(_ => {
      return _.province.indexOf('海外') < 0 &&
        _.province.indexOf('香港') < 0 &&
        _.province.indexOf('澳门') < 0 &&
        _.province.indexOf('台湾') < 0
    });

    return buildZfb(data);
  } else {
    // todo 先插入 新疆兵团
    return buildZfb([{
        areaCode: Mock.Random.natural(10000),
        competitionMap: {
          科目一: Mock.Random.natural(1, 100),
          科目二: Mock.Random.natural(1, 100)
        },
        province: '兵团',
        rankNo: 0,
        totalScore: Mock.Random.natural(1, 100)
    }]);
  }
}