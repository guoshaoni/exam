import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
//登录
import login from '../components/login/login.vue'
//后台管理员
import manager from '../components/manager/manager.vue'
import managerDir from '../components/manager/managerDir.vue'
import dirUpdate from '../components/manager/dirUpdate.vue'
import Add from '../components/manager/Add.vue'
import managerStage from '../components/manager/managerStage.vue'
import stageUpdate from '../components/manager/stageUpdate.vue'
import Addstage from '../components/manager/Addstage.vue'
import managerClass from '../components/manager/managerClass.vue'
import classUpdate from '../components/manager/classUpdate.vue'
import Addclasses from '../components/manager/Addclasses.vue'
import managerStudent from '../components/manager/managerStudent.vue'
import studentUpdate from '../components/manager/studentUpdate.vue'
import Addstudent from '../components/manager/Addstudent.vue'
import managerTeacher from '../components/manager/managerTeacher.vue'
import teacherUpdate from '../components/manager/teacherUpdate.vue'
import Addteacher from '../components/manager/Addteacher.vue'
//教师管理模块
import teacher from '../components/teacher/teacher.vue'
import testType from '../components/teacher/testType.vue'
import typeUpdate from '../components/teacher/typeUpdate.vue'
import Addtype from '../components/teacher/Addtype.vue'
import teacherTest from '../components/teacher/teacherTest.vue'
import testUpdate from '../components/teacher/testUpdate.vue'
import Addtest from '../components/teacher/Addtest.vue'
import paper from '../components/teacher/paper.vue'
import paperUpdate from '../components/teacher/paperUpdate.vue'
import Addpaper from '../components/teacher/Addpaper.vue'
//学生管理模块
import student from '../components/student/student.vue'
import exam from '../components/student/exam.vue'
import history from '../components/student/history.vue'
import studentPaper from '../components/student/studentPaper.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manager',
      name: 'manager',
      component: manager,
      children:[
          {path:'managerDir',name:'managerDir',component:managerDir},
          {path:'dirUpdate',name:'dirUpdate',component:dirUpdate},
          {path:'Add',name:'Add',component:Add},
          {path:'managerStage',name:'managerStage',component:managerStage},
          {path:'stageUpdate',name:'stageUpdate',component:stageUpdate},
          {path:'Addstage',name:'Addstage',component:Addstage},
          {path:'managerClass',name:'managerClass',component:managerClass},
          {path:'classUpdate',name:'classUpdate',component:classUpdate},
          {path:'Addclasses',name:'Addclasses',component:Addclasses},
          {path:'managerStudent',name:'managerStudent',component:managerStudent},
          {path:'studentUpdate',name:'studentUpdate',component:studentUpdate},
          {path:'Addstudent',name:'Addstudent',component:Addstudent},
          {path:'managerTeacher',name:'managerTeacher',component:managerTeacher},
          {path:'teacherUpdate',name:'teacherUpdate',component:teacherUpdate},
          {path:'Addteacher',name:'Addteacher',component:Addteacher}
      ]
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher,
      children:[
          {path:'testType',name:'testType',component:testType},
          {path:'typeUpdate',name:'typeUpdate',component:typeUpdate},
          {path:'Addtype',name:'Addtype',component:Addtype},
          {path:'teacherTest',name:'teacherTest',component:teacherTest},
          {path:'testUpdate',name:'testUpdate',component:testUpdate},
          {path:'Addtest',name:'Addtest',component:Addtest},
          {path:'paper',name:'paper',component:paper},
          {path:'paperUpdate',name:'paperUpdate',component:paperUpdate},
          {path:'Addpaper',name:'Addpaper',component:Addpaper},
      ]
    },
    {
      path: '/student',
      name: 'student',
      component: student,
        children:[
            {path:'exam',name:'exam',component:exam},
            {path:'history',name:'history',component:history},
            {path:'studentPaper',name:'studentPaper',component:studentPaper},
        ]
    }
  ]
})
