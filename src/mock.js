/**
 * ------------------- 接口 -------------------
 */
// import Mock from 'mockjs';
import {
  answerProfileData,
  playerIntroductionData,
  rankData,
  realTimeDynamicData,
  totalContestantsNumberData,
  provinceAnswerProgressData,
  rank1Data
} from './data';

const timeout = 300; // 延迟

const mock = (result) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, timeout);
  })
}


// ----------- 比赛明细 competitionDetail

/**
 * 答题概况
 * post
 * 
 * competitionIds: []
 * competitionName: '窝点勘察'
 * stageName: '科目一'
 */
export const answerProfile = ({
  competitionIds,
  // competitionName,
  stageName
}) => {
  const temp = answerProfileData().filter(a => competitionIds.includes(a.id));
  const data = temp[parseInt(Math.random() * 10) % temp.length];
  return mock(data);
}


/**
 * 选手介绍
 * get
 * 
 * userId: ''
 */
export const playerIntroduction = ({
  userId
}) => {
  const list = playerIntroductionData().list;
  const data = list[parseInt(Math.random() * 10) % list.length];
  return mock(data);
}


/**
 * 排名
 * post
 * 
 * competitionIds: []
 * pageNo: 1
 * pageSize: 10
 */
export const rank = ({
  competitionIds,
  pageNo,
  pageSize
}) => {
  const data = rankData();
  return mock({
    list: data.list,
    page: 1,
    pageSize: 10,
    pages: 10,
    total: 10
  });
}


/**
 * 实时动态
 * get
 * 无参数
 */
export const realTimeDynamic = () => {
  return mock(realTimeDynamicData().list);
};


/**
 * 参赛人数
 * post
 * 
 * competitionIds: []
 */
export const totalContestantsNumber = ({
  competitionIds
}) => {
  const data = totalContestantsNumberData().data;
  return mock(data);
};


// ----------- 比赛省市信息 competitionProvince

/**
 * 省份答题进度
 * post
 * 
 * competitionMap: {
 *  科目一: [],
 *  ...
 * },
 * sortCompetitionName 排序比赛名
 */
export const provinceAnswerProgress = ({
  competitionMap,
  sortCompetitionName
}) => {
  return mock(provinceAnswerProgressData().list);
}


/**
 * 队伍（省）排名
 * post
 * 
 * competitionMap: {
 *  科目一: [],
 *  ...
 * }
 */
export const competitionProvinceRank = ({
  competitionMap
}) => {
  const list = rank1Data().list;
  return mock(list);
}