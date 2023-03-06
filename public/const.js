(function (global) {
  global.__GLOBAL__ = {
    /**
     * 常量配置
     * TODO 线上配置文件修改时，需要同步修改该目录下的 index.html 中 constant.js 版本号 ?v=NUMBER（NUMBER 递增即可）
     */
    SUBJECT_TITLE_SUB: '答题概况', // 科目左上角文本——答题概况
    COMPETITORS_TOTAL: '参赛总人数', // 参赛总人数
    INTRODUCTION: '选手介绍', // 选手介绍
    ONLINE: '在考人', // 在考人 数
    COMPLETED: '已完成', // 已完成
    RATE: '准确率', // 准确率

    SCORE_TOTAL_RATE: '总分榜', // 总分榜
    PROCESS: '答题进度榜', // 答题进度
    RTK: '实时动态', // 实时动态

    // ORG: '主办单位：厦门市美亚柏科信息股份有限公司', // 主办方
    ORG: '主办单位：中华人民共和国公安部 中华全国总工会', // 主办方

    PAGE_TITLE: '演示大屏',

    // 刷新延时 单位毫秒
    REFRESH_STEPS: 1000 * 5 * 1,
    REFRESH_STEPS_INTRODUCTION: 1000 * 6, // 选手介绍
    REFRESH_STEPS_ANSWER_PROFILE: 1000 * 10, // 答题概况
    REFRESH_STEPS_RANK: 1000 * 10, // 单人排名列表
    REFRESH_STEPS_REALTIME_DYNAMIC: 1000 * 5, // 实时动态
    // 队伍页
    REFRESH_STEPS_DT: 1000 * 10, // 答题进度榜
    REFRESH_STEPS_COMPETITION_PROVINCE_RANK: 1000 * 10, // 总分榜（队伍排名列表）

    // bus event name
    BUS_EVENT_COUNTDOWN: 'on-countdown',

    PERSON_RANK_LIST_WIDTH_DIFF: 3, // 个人排名列表 各科的间隔宽度，数值越大 宽度越大

    SHOW_MAP_MODAL: false, // 地图的浮框

    SHOW_PERSON_COMPETITION_DECLARATION: false, // 个人 比赛宣言

    SHOW_PERSON_REAL_TIME_DYNAMIC: 5, // 个人 实时动态的浮夸：只有 连续答题 >= 5 才显示

    PAGE_SIZE: 40 // 个人排名列表数量

  }



})(window)
