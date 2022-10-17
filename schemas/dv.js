module.exports = {
  vuex: false,
  model: [
    {
      title: '答题概况',
      path: '/competitionDetail/answerProfile',
      name: 'answerProfile',
      // prefix: '',
      methods: false,
      options: {
        methods: 'post'
      }
    },
    {
      title: '选手介绍',
      path: '/competitionDetail/playerIntroduction',
      name: 'playerIntroduction',
      // prefix: '',
      methods: false,
      options: {
        methods: 'post'
      }
    },
    {
      title: '排名列表',
      path: '/competitionDetail/rank',
      name: 'rank',
      // prefix: '',
      methods: false,
      options: {
        methods: 'post'
      }
    },
    {
      title: '实时动态',
      path: '/competitionDetail/realTimeDynamic',
      name: 'realTimeDynamic',
      // prefix: '',
      methods: false,
      options: {
        methods: 'get'
      }
    },
    {
      title: '参赛人数',
      path: '/competitionDetail/totalContestantsNumber',
      name: 'totalContestantsNumber',
      // prefix: '',
      methods: false,
      options: {
        methods: 'post'
      }
    },
    {
      title: '省份答题进度',
      path: '/competitionProvince/provinceAnswerProgress',
      name: 'provinceAnswerProgress',
      // prefix: '',
      methods: false,
      options: {
        methods: 'post'
      }
    },
    {
      title: '排名',
      path: '/competitionProvince/rank',
      name: 'competitionProvinceRank',
      // prefix: '',
      methods: false,
      options: {
        methods: 'post'
      }
    }
  ]
}