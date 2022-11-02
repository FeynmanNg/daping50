import Mock from 'mockjs';
import {cloneDeep} from '../ui/lib/utils/util';
import storage from '@/helper/storage';

const form = storage.getForm() || {};

export const answerProfileData = () => [
  {
    accuracyRate: '31%', // 准确率
    competitionName: '窝点勘查',
    finishedNumber: 41, // 已完成人数
    onlineNumber: 310, // 在线人数
    stageName: '科目一',
    id: form.subject1ids[0] // todo 只为测试 需要页面表单的一致
  },
  {
    accuracyRate: '62%', // 准确率
    competitionName: '窝点勘查',
    finishedNumber: 62, // 已完成人数
    onlineNumber: 320, // 在线人数
    stageName: '科目二',
    id: form.subject1ids[1] // todo 只为测试 需要页面表单的一致
  },
  {
    accuracyRate: '53%', // 准确率
    competitionName: '检查鉴定',
    finishedNumber: 33, // 已完成人数
    onlineNumber: 330, // 在线人数
    stageName: '科目一',
    id: form.subject2ids[0] // todo 只为测试 需要页面表单的一致
  },
  {
    accuracyRate: '74%', // 准确率
    competitionName: '检查鉴定',
    finishedNumber: 34, // 已完成人数
    onlineNumber: 340, // 在线人数
    stageName: '科目二',
    id: form.subject2ids[1] // todo 只为测试 需要页面表单的一致
  }
];

export const playerIntroductionData = () => Mock.mock({
  'list|5': [{
    competitionDeclaration: Mock.Random.csentence(5, 15), // 比赛宣言
    personel: Mock.Random.csentence(5, 15), // 人员介绍
    province: '@province', // 省
    'userId|+1': 1001
  }]
});

// 制造攀爬效果的 mock 数据
let rankDataIndex = 0;
let times = 0;
export const rankData = () => {
  ++times;
  // return Mock.mock({
  //   'list|15': [{
  //     account: '@id', // 账号
  //     areaCode: '@id', // 省份行政编号
  //     groupName: '', // 组织
  //     name: '@cname', // 名字
  //     province: '@province', // 省
  //     'rankNo|+1': 1, // 名次
  //     stageScoreMap: {
  //       科目一: '@natural(1, 100)',
  //       科目二: '@natural(1, 100)',
  //       科目三: '@natural(1, 100)'
  //     },
  //     totalScore: '@natural(1, 100)', // 总分
  //     'userId|+1': '@id' // 用户 id
  //   }]
  // })
  return [
    // demo1
    {
      list: [
        {
          account: '520000200007096219',
          areaCode: '320000200710317979',
          groupName: '',
          name: '尹霞',
          province: '河北省',
          rankNo: 1,
          stageScoreMap: { 科目一: 66, 科目二: 66, 科目三: 31 },
          totalScore: 24,
          userId: '820000199501230933'
        },
        {
          account: '210000201710059454',
          areaCode: '44000019961219142X',
          groupName: '',
          name: '万涛',
          province: '吉林省',
          rankNo: 2,
          stageScoreMap: { 科目一: 78, 科目二: 19, 科目三: 77 },
          totalScore: 84,
          userId: '210000197405225824'
        },
        {
          account: '210000197411026354',
          areaCode: '230000200612204899',
          groupName: '',
          name: '赵勇',
          province: '海南省',
          rankNo: 3,
          stageScoreMap: { 科目一: 9, 科目二: 53, 科目三: 18 },
          totalScore: 78,
          userId: '820000201812016459'
        },
        {
          account: '370000199703246360',
          areaCode: '330000198909097805',
          groupName: '',
          name: '方超',
          province: '福建省',
          rankNo: 4,
          stageScoreMap: { 科目一: 94, 科目二: 84, 科目三: 39 },
          totalScore: 72,
          userId: '210000199712226180'
        },
        {
          account: '63000019970411366X',
          areaCode: '510000201008177638',
          groupName: '',
          name: '卢勇',
          province: '新疆维吾尔自治区',
          rankNo: 5,
          stageScoreMap: { 科目一: 77, 科目二: 12, 科目三: 100 },
          totalScore: 27,
          userId: '540000201811025241'
        },
        {
          account: '230000201212152182',
          areaCode: '820000198611297843',
          groupName: '',
          name: '易芳',
          province: '上海',
          rankNo: 6,
          stageScoreMap: { 科目一: 70, 科目二: 100, 科目三: 53 },
          totalScore: 27,
          userId: '610000197805231275'
        },
        {
          account: '340000199305272189',
          areaCode: '710000200209046709',
          groupName: '',
          name: '孙勇',
          province: '山西省',
          rankNo: 7,
          stageScoreMap: { 科目一: 74, 科目二: 5, 科目三: 59 },
          totalScore: 21,
          userId: '540000197410263557'
        },
        {
          account: '620000199305015956',
          areaCode: '360000200408182708',
          groupName: '',
          name: '何丽',
          province: '青海省',
          rankNo: 8,
          stageScoreMap: { 科目一: 63, 科目二: 3, 科目三: 79 },
          totalScore: 31,
          userId: '120000199412304130'
        },
        {
          account: '640000200401277680',
          areaCode: '140000200110306375',
          groupName: '',
          name: '吴丽',
          province: '浙江省',
          rankNo: 9,
          stageScoreMap: { 科目一: 16, 科目二: 45, 科目三: 12 },
          totalScore: 51,
          userId: '310000199903314400'
        },
        {
          account: '610000199912051260',
          areaCode: '460000198404235570',
          groupName: '',
          name: '袁敏',
          province: '湖北省',
          rankNo: 10,
          stageScoreMap: { 科目一: 56, 科目二: 1, 科目三: 13 },
          totalScore: 11,
          userId: '410000202003248039'
        },
        {
          account: '220000200303318508',
          areaCode: '810000199904088511',
          groupName: '',
          name: '康勇',
          province: '山东省',
          rankNo: 11,
          stageScoreMap: { 科目一: 11, 科目二: 99, 科目三: 60 },
          totalScore: 8,
          userId: '360000200003262523'
        },
        {
          account: '630000197208243677',
          areaCode: '430000199608094879',
          groupName: '',
          name: '林刚',
          province: '湖北省',
          rankNo: 12,
          stageScoreMap: { 科目一: 75, 科目二: 60, 科目三: 2 },
          totalScore: 74,
          userId: '640000198108233881'
        },
        {
          account: '230000201210078724',
          areaCode: '54000020171220851X',
          groupName: '',
          name: '田秀英',
          province: '湖南省',
          rankNo: 13,
          stageScoreMap: { 科目一: 95, 科目二: 76, 科目三: 49 },
          totalScore: 63,
          userId: '140000200603137581'
        },
        {
          account: '150000200103164729',
          areaCode: '460000201506304463',
          groupName: '',
          name: '冯勇',
          province: '贵州省',
          rankNo: 14,
          stageScoreMap: { 科目一: 67, 科目二: 5, 科目三: 25 },
          totalScore: 22,
          userId: '500000201012159852'
        },
        {
          account: '820000202004244837',
          areaCode: '220000198607121616',
          groupName: '',
          name: '方明',
          province: '浙江省',
          rankNo: 15,
          stageScoreMap: { 科目一: 7, 科目二: 58, 科目三: 99 },
          totalScore: 56,
          userId: '500000201207211817'
        }
      ]
    },
    // demo2
    {
      list: [
        {
          account: '210000197411026354',
          areaCode: '230000200612204899',
          groupName: '',
          name: '赵勇',
          province: '海南省',
          rankNo: 1,
          stageScoreMap: { 科目一: 9, 科目二: 53, 科目三: 18 },
          totalScore: 78,
          userId: '820000201812016459'
        },
        {
          account: '520000200007096219',
          areaCode: '320000200710317979',
          groupName: '',
          name: '尹霞',
          province: '河北省',
          rankNo: 2,
          stageScoreMap: { 科目一: 66, 科目二: 66, 科目三: 31 },
          totalScore: 24,
          userId: '820000199501230933'
        },
        {
          account: '210000201710059454',
          areaCode: '44000019961219142X',
          groupName: '',
          name: '万涛',
          province: '吉林省',
          rankNo: 3,
          stageScoreMap: { 科目一: 78, 科目二: 19, 科目三: 77 },
          totalScore: 84,
          userId: '210000197405225824'
        },
        {
          account: '370000199703246360',
          areaCode: '330000198909097805',
          groupName: '',
          name: '方超',
          province: '福建省',
          rankNo: 4,
          stageScoreMap: { 科目一: 94, 科目二: 84, 科目三: 39 },
          totalScore: 72,
          userId: '210000199712226180'
        },
        {
          account: '63000019970411366X',
          areaCode: '510000201008177638',
          groupName: '',
          name: '卢勇',
          province: '新疆维吾尔自治区',
          rankNo: 5,
          stageScoreMap: { 科目一: 77, 科目二: 12, 科目三: 100 },
          totalScore: 27,
          userId: '540000201811025241'
        },
        {
          account: '230000201212152182',
          areaCode: '820000198611297843',
          groupName: '',
          name: '易芳',
          province: '上海',
          rankNo: 6,
          stageScoreMap: { 科目一: 70, 科目二: 100, 科目三: 53 },
          totalScore: 27,
          userId: '610000197805231275'
        },
        {
          account: '340000199305272189',
          areaCode: '710000200209046709',
          groupName: '',
          name: '孙勇',
          province: '山西省',
          rankNo: 7,
          stageScoreMap: { 科目一: 74, 科目二: 5, 科目三: 59 },
          totalScore: 21,
          userId: '540000197410263557'
        },
        {
          account: '620000199305015956',
          areaCode: '360000200408182708',
          groupName: '',
          name: '何丽',
          province: '青海省',
          rankNo: 8,
          stageScoreMap: { 科目一: 63, 科目二: 3, 科目三: 79 },
          totalScore: 31,
          userId: '120000199412304130'
        },
        {
          account: '640000200401277680',
          areaCode: '140000200110306375',
          groupName: '',
          name: '吴丽',
          province: '浙江省',
          rankNo: 9,
          stageScoreMap: { 科目一: 16, 科目二: 45, 科目三: 12 },
          totalScore: 51,
          userId: '310000199903314400'
        },
        {
          account: '610000199912051260',
          areaCode: '460000198404235570',
          groupName: '',
          name: '袁敏',
          province: '湖北省',
          rankNo: 10,
          stageScoreMap: { 科目一: 56, 科目二: 1, 科目三: 13 },
          totalScore: 11,
          userId: '410000202003248039'
        },
        {
          account: '220000200303318508',
          areaCode: '810000199904088511',
          groupName: '',
          name: '康勇',
          province: '山东省',
          rankNo: 11,
          stageScoreMap: { 科目一: 11, 科目二: 99, 科目三: 60 },
          totalScore: 8,
          userId: '360000200003262523'
        },
        {
          account: '630000197208243677',
          areaCode: '430000199608094879',
          groupName: '',
          name: '林刚',
          province: '湖北省',
          rankNo: 12,
          stageScoreMap: { 科目一: 75, 科目二: 60, 科目三: 2 },
          totalScore: 74,
          userId: '640000198108233881'
        },
        {
          account: '820000202004244837',
          areaCode: '220000198607121616',
          groupName: '',
          name: '方明',
          province: '浙江省',
          rankNo: 13,
          stageScoreMap: { 科目一: 7, 科目二: 58, 科目三: 99 },
          totalScore: 56,
          userId: '500000201207211817'
        },
        {
          account: '230000201210078724',
          areaCode: '54000020171220851X',
          groupName: '',
          name: '田秀英',
          province: '湖南省',
          rankNo: 14,
          stageScoreMap: { 科目一: 95, 科目二: 76, 科目三: 49 },
          totalScore: 63,
          userId: '140000200603137581'
        },
        {
          account: '150000200103164729',
          areaCode: '460000201506304463',
          groupName: '',
          name: '冯勇',
          province: '贵州省',
          rankNo: 15,
          stageScoreMap: { 科目一: 67, 科目二: 5, 科目三: 25 },
          totalScore: 22,
          userId: '500000201012159852'
        }
      ]
    }
  ][times % 2 ? rankDataIndex % 2 : ++rankDataIndex % 2];
};

export const realTimeDynamicData = () => Mock.mock({
  'list|1-1': [{
  // 'list|1-5': [{
    'competitionId|1': form.subject1ids.concat(form.subject2ids), // 比赛id
    'continueRight|1-10': 1, // 连续答题
    province: '@province',
    recordTime: '@time', // 记录时间
    userId: '@id',
    userName: '@cname' // 选手名称
  }]
})

export const totalContestantsNumberData = () => Mock.mock({
  'data|200-500': 200
});

// 制造攀爬效果的 mock 数据
let progressDataIndex = 0;
export const provinceAnswerProgressData = () => {
  // return Mock.mock({
  //   'list|10': [{
  //     areaCode: '@natural',
  //     progressMap: {
  //       科目一: '@natural(1, 100)' + '%',
  //       科目二: '@natural(1, 100)' + '%'
  //     },
  //     province: '@province',
  //     'rankNo|+1': 1, // 名次
  //     sort: '' // 排序
  //   }]
  // });
  return [
    // demo1
    {
      list: [
        {
          areaCode: 831992697908096,
          progressMap: { 窝点勘查: '62%', 检查鉴定: '35%' },
          province: '甘肃省',
          rankNo: 1,
          sort: ''
        },
        {
          areaCode: 8101346037245040,
          progressMap: { 窝点勘查: '55%', 检查鉴定: '58%' },
          province: '吉林省',
          rankNo: 2,
          sort: ''
        },
        {
          areaCode: 2286670625728040,
          progressMap: { 窝点勘查: '87%', 检查鉴定: '58%' },
          province: '广东省',
          rankNo: 3,
          sort: ''
        },
        {
          areaCode: 179736992674188,
          progressMap: { 窝点勘查: '58%', 检查鉴定: '29%' },
          province: '香港特别行政区',
          rankNo: 4,
          sort: ''
        },
        {
          areaCode: 1367858625394778,
          progressMap: { 窝点勘查: '92%', 检查鉴定: '7%' },
          province: '河北省',
          rankNo: 5,
          sort: ''
        },
        {
          areaCode: 8568818334647662,
          progressMap: { 窝点勘查: '15%', 检查鉴定: '98%' },
          province: '广西壮族自治区',
          rankNo: 6,
          sort: ''
        },
        {
          areaCode: 8302771473631788,
          progressMap: { 窝点勘查: '25%', 检查鉴定: '83%' },
          province: '安徽省',
          rankNo: 7,
          sort: ''
        },
        {
          areaCode: 1325602609309678,
          progressMap: { 窝点勘查: '59%', 检查鉴定: '90%' },
          province: '江苏省',
          rankNo: 8,
          sort: ''
        },
        {
          areaCode: 5904361350601016,
          progressMap: { 窝点勘查: '99%', 检查鉴定: '31%' },
          province: '湖南省',
          rankNo: 9,
          sort: ''
        },
        {
          areaCode: 6646913461007208,
          progressMap: { 窝点勘查: '52%', 检查鉴定: '57%' },
          province: '河北省',
          rankNo: 10,
          sort: ''
        }
      ]
    },
    // demo2
    {
      list: [
        {
          areaCode: 2286670625728040,
          progressMap: { 窝点勘查: '87%', 检查鉴定: '78%' },
          province: '广东省',
          rankNo: 1,
          sort: ''
        },
        
        {
          areaCode: 8101346037245040,
          progressMap: { 窝点勘查: '55%', 检查鉴定: '80%' },
          province: '吉林省',
          rankNo: 2,
          sort: ''
        },
        {
          areaCode: 831992697908096,
          progressMap: { 窝点勘查: '62%', 检查鉴定: '35%' },
          province: '甘肃省',
          rankNo: 3,
          sort: ''
        },
        {
          areaCode: 179736992674188,
          progressMap: { 窝点勘查: '58%', 检查鉴定: '29%' },
          province: '香港特别行政区',
          rankNo: 4,
          sort: ''
        },
        {
          areaCode: 1367858625394778,
          progressMap: { 窝点勘查: '92%', 检查鉴定: '7%' },
          province: '河北省',
          rankNo: 5,
          sort: ''
        },
        {
          areaCode: 8568818334647662,
          progressMap: { 窝点勘查: '15%', 检查鉴定: '98%' },
          province: '广西壮族自治区',
          rankNo: 6,
          sort: ''
        },
        {
          areaCode: 6646913461007208,
          progressMap: { 窝点勘查: '52%', 检查鉴定: '57%' },
          province: '河北省',
          rankNo: 7,
          sort: ''
        },
        {
          areaCode: 8302771473631788,
          progressMap: { 窝点勘查: '25%', 检查鉴定: '83%' },
          province: '安徽省',
          rankNo: 8,
          sort: ''
        },
        {
          areaCode: 1325602609309678,
          progressMap: { 窝点勘查: '59%', 检查鉴定: '90%' },
          province: '江苏省',
          rankNo: 9,
          sort: ''
        },
        {
          areaCode: 5904361350601016,
          progressMap: { 窝点勘查: '99%', 检查鉴定: '31%' },
          province: '湖南省',
          rankNo: 10,
          sort: ''
        }
      ]
    }
  ][++progressDataIndex % 2];
};


const rank1DataMock = Mock.mock({
  'list|34': [{
    areaCode: '@natural',
    competitionMap: {
      科目一: '@natural(1, 100)', // 分数
      科目二: '@natural(1, 100)' // 分数
    },
    province: '@province',
    'rankNo|+1': 1, // 名次
    totalScore: '@natural(1, 100)' // 总分
  }]
});
// 处理省份
rank1DataMock.list.forEach(a => {
  a.province = a.province
    .replace('省', '')
    // .replace('自治区', '')
    // .replace('特别行政区', '')
    .replace('回族', '')
    .replace('藏族', '')
    .replace('壮族', '')
    // .replace('维吾尔', '');
})
const rank1DataMock2 = cloneDeep(rank1DataMock);
rank1DataMock2.list
  .sort((a, b) => a.totalScore - b.totalScore)
  .forEach((a, i) => {
    a.rankNo = i + 1;
    a.totalScore += 5;
  });
let rank1Index = 0;
export const rank1Data = () => {
  // return Mock.mock({
  //   'list|15': [{
  //     areaCode: '@natural',
  //     competitionMap: {
  //       科目一: '@natural(1, 100)', // 分数
  //       科目二: '@natural(1, 100)' // 分数
  //     },
  //     province: '@province',
  //     'rankNo|+1': 1, // 名次
  //     totalScore: '@natural(1, 100)' // 总分
  //   }]
  // });
  return [rank1DataMock, rank1DataMock2][++rank1Index % 2];
};