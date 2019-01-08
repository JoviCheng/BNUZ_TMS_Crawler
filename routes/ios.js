var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  var result = {
    term: {
      id: 20181,
      endWeek: 19,
      currentWeek: 14,
      startWeek: 1
    },
    username: '成梓豪',
    schedules: [
      {
        endWeek: 17,
        id: '6e822f17-fdec-dc2e-e053-0100007fcc1d',
        dayOfWeek: 4,
        courseClassId: '6e69e404-0940-aaa0-e053-0100007f92a6',
        totalSection: 2,
        teacherName: '李玫',
        taskId: '6e69e404-0b39-aaa0-e053-0100007f92a6',
        startSection: 1,
        course: '交互体验与应用',
        oddEven: 0,
        courseItem: null,
        place: '木铎楼C404',
        teacherId: '01011',
        courseClassName: '16数媒2',
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6efa1188-7ae7-a807-e053-0100007fd72f',
        dayOfWeek: 3,
        courseClassId: '6e69e404-0935-aaa0-e053-0100007f92a6',
        totalSection: 2,
        teacherName: '于文',
        taskId: '6e69e404-0b23-aaa0-e053-0100007f92a6',
        startSection: 5,
        course: '软件测试方法与技术',
        oddEven: 0,
        courseItem: '实验',
        place: '木铎楼C403',
        teacherId: '01122',
        courseClassName: '16软2',
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6ef565f2-1be1-0611-e053-0100007f2b35',
        dayOfWeek: 4,
        courseClassId: '6e69e404-0935-aaa0-e053-0100007f92a6',
        totalSection: 2,
        teacherName: '孙玮',
        taskId: '6e69e404-0b22-aaa0-e053-0100007f92a6',
        startSection: 3,
        course: '软件测试方法与技术',
        oddEven: 0,
        courseItem: '理论',
        place: '励耘楼A302',
        teacherId: '01045',
        courseClassName: '16软2',
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6e822f17-fdf1-dc2e-e053-0100007fcc1d',
        dayOfWeek: 3,
        courseClassId: '6e1cfce0-b34a-034a-e053-0100007fcfbf',
        totalSection: 2,
        teacherName: '许跃颖',
        taskId: '6e1cfce0-bd63-034a-e053-0100007fcfbf',
        startSection: 7,
        course: '数码摄影',
        oddEven: 0,
        courseItem: null,
        place: '励耘楼B206',
        teacherId: '01080',
        courseClassName: '16数媒2',
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6ea413d9-7381-9e75-e053-0100007f4543',
        dayOfWeek: 3,
        courseClassId: '6e69e404-0941-aaa0-e053-0100007f92a6',
        totalSection: 2,
        teacherName: '王鹏',
        taskId: '6e69e404-0b3b-aaa0-e053-0100007f92a6',
        startSection: 3,
        course: '移动前端编程技术',
        oddEven: 0,
        courseItem: '实验',
        place: '金声楼1105',
        teacherId: '01130',
        courseClassName: '16数媒',
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6f1ddc85-6c9c-5030-e053-0100007f383f',
        dayOfWeek: 1,
        courseClassId: '6e69e404-0941-aaa0-e053-0100007f92a6',
        totalSection: 2,
        teacherName: '王鹏',
        taskId: '6e69e404-0b3a-aaa0-e053-0100007f92a6',
        startSection: 3,
        course: '移动前端编程技术',
        oddEven: 0,
        courseItem: '理论',
        place: '丽泽楼A203',
        teacherId: '01130',
        courseClassName: '16数媒',
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6e822f17-fdeb-dc2e-e053-0100007fcc1d',
        dayOfWeek: 5,
        courseClassId: '6e69e404-092b-aaa0-e053-0100007f92a6',
        totalSection: 2,
        teacherName: '周鹏',
        taskId: '6e69e404-0b0f-aaa0-e053-0100007f92a6',
        startSection: 5,
        course: 'iOS程序设计',
        oddEven: 0,
        courseItem: '实验',
        place: '木铎楼C503',
        teacherId: '01033',
        courseClassName: '16数媒',
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6e80989e-1d3b-cfc6-e053-0100007fb5bd',
        dayOfWeek: 2,
        courseClassId: '6e69e404-092b-aaa0-e053-0100007f92a6',
        totalSection: 2,
        teacherName: '周鹏',
        taskId: '6e69e404-0b0e-aaa0-e053-0100007f92a6',
        startSection: 3,
        course: 'iOS程序设计',
        oddEven: 0,
        courseItem: '理论',
        place: '木铎楼C503',
        teacherId: '01033',
        courseClassName: '16数媒',
        startWeek: 1
      },
      {
        endWeek: 9,
        id: '6ea6073a-6d84-6973-e053-0100007f487a',
        dayOfWeek: 2,
        courseClassId: '6eb19092-1ff8-0ad0-e053-0100007fe742',
        totalSection: 2,
        teacherName: 'Darren Mullins',
        taskId: '6ec7556d-c7e1-9a0c-e053-0100007f6d22',
        startSection: 5,
        course: '雅思口语',
        oddEven: 0,
        courseItem: null,
        place: '乐育楼C105',
        teacherId: '15295',
        courseClassName: null,
        startWeek: 1
      },
      {
        endWeek: 12,
        id: '7b2b6fc5-0a89-fc2e-e053-0100007f4cd0',
        dayOfWeek: 7,
        courseClassId: '6eb19092-2007-0ad0-e053-0100007fe742',
        totalSection: 2,
        teacherName: '张婧宜',
        taskId: '6ec7556d-c7f0-9a0c-e053-0100007f6d22',
        startSection: 5,
        course: '基础葡语（一）',
        oddEven: 0,
        courseItem: null,
        place: '乐育楼C108',
        teacherId: '15127',
        courseClassName: null,
        startWeek: 12
      },
      {
        endWeek: 17,
        id: '7b2b6fc5-0a8a-fc2e-e053-0100007f4cd0',
        dayOfWeek: 4,
        courseClassId: '6eb19092-2007-0ad0-e053-0100007fe742',
        totalSection: 2,
        teacherName: '张婧宜',
        taskId: '6ec7556d-c7f0-9a0c-e053-0100007f6d22',
        startSection: 5,
        course: '基础葡语（一）',
        oddEven: 0,
        courseItem: null,
        place: '励耘楼A105',
        teacherId: '15127',
        courseClassName: null,
        startWeek: 13
      },
      {
        endWeek: 11,
        id: '6ea6073a-6d74-6973-e053-0100007f487a',
        dayOfWeek: 4,
        courseClassId: '6eb19092-2007-0ad0-e053-0100007fe742',
        totalSection: 2,
        teacherName: '张婧宜',
        taskId: '6ec7556d-c7f0-9a0c-e053-0100007f6d22',
        startSection: 5,
        course: '基础葡语（一）',
        oddEven: 0,
        courseItem: null,
        place: '励耘楼A105',
        teacherId: '15127',
        courseClassName: null,
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6e7bac2e-63c5-5285-e053-0100007f6485',
        dayOfWeek: 5,
        courseClassId: '6e69e404-0934-aaa0-e053-0100007f92a6',
        totalSection: 2,
        teacherName: '李佳琪',
        taskId: '6e69e404-0b20-aaa0-e053-0100007f92a6',
        startSection: 7,
        course: '游戏策划与角色设计',
        oddEven: 0,
        courseItem: '理论',
        place: '励耘楼B408',
        teacherId: '01165',
        courseClassName: '16计',
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '6e7bac2e-63c6-5285-e053-0100007f6485',
        dayOfWeek: 5,
        courseClassId: '6e69e404-0934-aaa0-e053-0100007f92a6',
        totalSection: 1,
        teacherName: '李佳琪',
        taskId: '6e69e404-0b21-aaa0-e053-0100007f92a6',
        startSection: 9,
        course: '游戏策划与角色设计',
        oddEven: 0,
        courseItem: '实验',
        place: '励耘楼B408',
        teacherId: '01165',
        courseClassName: '16计',
        startWeek: 1
      },
      {
        endWeek: 9,
        id: '6f0a7127-fb07-1fc2-e053-0100007f11bd',
        dayOfWeek: 3,
        courseClassId: '6f1ed315-8555-f327-e053-0100007f2bb9',
        totalSection: 2,
        teacherName: '张云鹏',
        taskId: '6f1ed315-8a9e-f327-e053-0100007f2bb9',
        startSection: 10,
        course: '电影电视剧音乐赏析',
        oddEven: 0,
        courseItem: null,
        place: '丽泽楼A202',
        teacherId: '08111',
        courseClassName: null,
        startWeek: 1
      },
      {
        endWeek: 17,
        id: '74b324d5-309d-7abb-e053-0100007f3375',
        dayOfWeek: 2,
        courseClassId: '74006444-1768-9ef8-e053-0100007f3a90',
        totalSection: 3,
        teacherName: '魏良',
        taskId: '74006444-176a-9ef8-e053-0100007f3a90',
        startSection: 7,
        course: '角色与场景设计',
        oddEven: 0,
        courseItem: null,
        place: '木铎楼C404',
        teacherId: '13061',
        courseClassName: '16数媒1',
        startWeek: 1
      }
    ]
  }
  res.json(JSON.stringify(result))
  // res.json(result)
})

module.exports = router
