import request from '@/utils/request'

export default{
    //1 添加课程信息
    addCourseInfo(courseInfo){
      return request({
        url:'/eduservice/course/addCourseInfo',
        method:'post',
        data:courseInfo
      })
    },
    //2 查询所有讲师
    getListTeacher(){
        return request({
            url:'/eduservice/teacher/findAll',
            method:'get'
        })
    },
    //根据课程id查询课程基本信息
    getCourseInfoId(id){
      return request({
        url:`/eduservice/course/getCourseInfo/${id}`,
        method:'get'
      })
    },
    //修改课程信息
    updateCourseInfoId(courseInfo){
      return request({
        url:`/eduservice/course/updateCourseInfo`,
        method:'post',
        data:courseInfo
      })
    },
    //课程确认信息显示
    getCoursePublishInfo(id){
      return request({
        url:`/eduservice/course/getPublishCourseInfo/${id}`,
        method:'get'
      })
    },
    publishCourse(id){
      return request({
        url:`/eduservice/course/publishCourse/${id}`,
        method:'post'
      })
    },
    //课程列表
    getListCourse(){
      return request({
        url:'/eduservice/course/',
        method:'get'
      })
    },
    //课程列表条件分页查询
    getListCoursePage(current,limit,courseQuery){
      return request({
        url:`/eduservice/course/${current}/${limit}`,
        method:'post',
        data:courseQuery
      })
    },
    //删除课程
    deleteCourse(courseId){
      return request({
        url:`/eduservice/course/${courseId}`,
        method:'delete'
      })
    }
}
