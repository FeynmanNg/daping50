/**
 * ------------------- 接口 -------------------
 */
const timeout = 1000; // 延迟

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
  competitionName,
  stageName
}) => {
  return mock({
    data: [
      {
        accuracyRate: '70%', // 准确率
        competitionName: '窝点勘察', // 名称
        finishedNumber: 40, // 已完成人数
        onlineNumber: 300, // 在线人数
        stageName: '科目一' // 阶段名称
      }
    ]
  });
}

/**
 * 查询科目/阶段
 * get
 * 
 * competitionIds: []
 */
// export const getStageByCompetitionId = ({
//   competitionIds
// }) => {
//   return mock({
//     data: [
//       {
//         amount: 100, // 题目总数
//         id: 1001, // 科目/阶段 id
//         name: '科目一', // 科目/阶段名称
//         passedline: 40, //                   todo
//         relation: 1001, // 关联 科目id
//         scores: 300, // 分数
//         sequence: 1000 // 比赛序号
//       }
//     ]
//   });
// }


/**
 * 选手介绍
 * get
 * 
 * userId: ''
 */
export const playerIntroduction = ({
  userId
}) => {
  return mock({
    data: [
      {
        competitionDeclaration: '比赛宣言比赛宣言比赛宣言', // 比赛宣言
        personel: '人员介绍人员介绍人员介绍人员介绍', // 人员介绍
        province: '广东省', // 省
        userId: 900100 // userId
      }
    ]
  });
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
  return mock({
    data: {
      list: [
        {
          account: '123456', // 账号
          areaCode: '', // 省份行政编号
          groupName: '组织', // 组织
          name: '', // 名字
          province: '广东省', // 省
          rankNo: 1, // 名次
          stageScoreMap: {
            科目一: 78,
            科目二: 60,
            科目三: 69
          },
          totalScore: 69, // 总分
          userId: 900100 // 用户 id
        }
      ],
      page: 1,
      pageSize: 10,
      pages: 10,
      total: 10
    }
  });
}


/**
 * 实时动态
 * get
 * 无参数
 */
export const realTimeDynamic = () => mock({
  data: [
    {
      competitionId: '', // 比赛id
      continueRight: 3, // 连续答题
      province: '广东省',
      recordTime: '14:55:28', // 记录时间
      userId: 900100,
      userName: '周星星' // 选手名称
    }
  ]
});

/**
 * sendMsg
 */
// export const sendMsg = () => mock();


/**
 * 参赛人数
 * post
 * 
 * competitionIds: []
 */
export const totalContestantsNumber = ({
  competitionIds
}) => mock({
  data: 300 // 总人数
});


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
}) => mock({
  data: [
    {
      areaCode: '',
      progressMap: {
        科目一: '50%',
        科目二: '50%',
        科目三: '50%'
      },
      province: '广东省',
      rankNo: 1, // 名次
      sort: 1 // 排序
    }
  ]
});


/**
 * 排名
 * post
 * 
 * competitionMap: {
 *  科目一: [],
 *  ...
 * }
 */
export const rank1 = ({
  competitionMap
}) => mock({
  areaCode: '',
  competitionMap: {
    科目一: 60, // 分数
    科目二: 60, // 分数
    科目三: 60 // 分数
  },
  province: '广东省',
  rankNo: 1, // 名次
  totalScore: 84 // 总分
})


// 地图
export const mapData = () => {
  return [
    {
      
    }
  ]
}