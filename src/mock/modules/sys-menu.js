// 生成数据列表
var dataList = [
  {
    'menuId': 1,
    'parentId': 0,
    'parentName': null,
    'menuName': '系统管理',
    'menuUrl': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 2,
    'parentId': 1,
    'parentName': '系统管理',
    'menuName': '管理员列表',
    'menuUrl': 'sys/user',
    'perms': null,
    'type': 1,
    'icon': 'admin',
    'orderNum': 1,
    'open': null,
    'list': null
  },
  {
    'menuId': 3,
    'parentId': 1,
    'parentName': '系统管理',
    'menuName': '角色管理',
    'menuUrl': 'sys/role',
    'perms': null,
    'type': 1,
    'icon': 'role',
    'orderNum': 2,
    'open': null,
    'list': null
  },
  {
    'menuId': 4,
    'parentId': 1,
    'parentName': '系统管理',
    'menuName': '菜单管理',
    'menuUrl': 'sys/menu',
    'perms': null,
    'type': 1,
    'icon': 'menu',
    'orderNum': 3,
    'open': null,
    'list': null
  },
  {
    'menuId': 5,
    'parentId': 1,
    'parentName': '系统管理',
    'menuName': 'SQL监控',
    'menuUrl': 'http://localhost:8080/renren-fast/druid/sql.html',
    'perms': null,
    'type': 1,
    'icon': 'sql',
    'orderNum': 4,
    'open': null,
    'list': null
  },
  {
    'menuId': 6,
    'parentId': 1,
    'parentName': '系统管理',
    'menuName': '定时任务',
    'menuUrl': 'job/schedule',
    'perms': null,
    'type': 1,
    'icon': 'job',
    'orderNum': 5,
    'open': null,
    'list': null
  },
  {
    'menuId': 7,
    'parentId': 6,
    'parentName': '定时任务',
    'menuName': '查看',
    'menuUrl': null,
    'perms': 'sys:schedule:list,sys:schedule:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 8,
    'parentId': 6,
    'parentName': '定时任务',
    'menuName': '新增',
    'menuUrl': null,
    'perms': 'sys:schedule:save',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 9,
    'parentId': 6,
    'parentName': '定时任务',
    'menuName': '修改',
    'menuUrl': null,
    'perms': 'sys:schedule:update',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 10,
    'parentId': 6,
    'parentName': '定时任务',
    'menuName': '删除',
    'menuUrl': null,
    'perms': 'sys:schedule:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 11,
    'parentId': 6,
    'parentName': '定时任务',
    'menuName': '暂停',
    'menuUrl': null,
    'perms': 'sys:schedule:pause',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 12,
    'parentId': 6,
    'parentName': '定时任务',
    'menuName': '恢复',
    'menuUrl': null,
    'perms': 'sys:schedule:resume',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 13,
    'parentId': 6,
    'parentName': '定时任务',
    'menuName': '立即执行',
    'menuUrl': null,
    'perms': 'sys:schedule:run',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 14,
    'parentId': 6,
    'parentName': '定时任务',
    'menuName': '日志列表',
    'menuUrl': null,
    'perms': 'sys:schedule:log',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 15,
    'parentId': 2,
    'parentName': '管理员列表',
    'menuName': '查看',
    'menuUrl': null,
    'perms': 'sys:user:list,sys:user:info',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 16,
    'parentId': 2,
    'parentName': '管理员列表',
    'menuName': '新增',
    'menuUrl': null,
    'perms': 'sys:user:save,sys:role:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 17,
    'parentId': 2,
    'parentName': '管理员列表',
    'menuName': '修改',
    'menuUrl': null,
    'perms': 'sys:user:update,sys:role:select',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  },
  {
    'menuId': 18,
    'parentId': 2,
    'parentName': '管理员列表',
    'menuName': '删除',
    'menuUrl': null,
    'perms': 'sys:user:delete',
    'type': 2,
    'icon': null,
    'orderNum': 0,
    'open': null,
    'list': null
  }
  // ,
  // {
  //   'menuId': 19,
  //   'parentId': 3,
  //   'parentName': '角色管理',
  //   'menuName': '查看',
  //   'menuUrl': null,
  //   'perms': 'sys:role:list,sys:role:info',
  //   'type': 2,
  //   'icon': null,
  //   'orderNum': 0,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 20,
  //   'parentId': 3,
  //   'parentName': '角色管理',
  //   'menuName': '新增',
  //   'menuUrl': null,
  //   'perms': 'sys:role:save,sys:menu:list',
  //   'type': 2,
  //   'icon': null,
  //   'orderNum': 0,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 21,
  //   'parentId': 3,
  //   'parentName': '角色管理',
  //   'menuName': '修改',
  //   'menuUrl': null,
  //   'perms': 'sys:role:update,sys:menu:list',
  //   'type': 2,
  //   'icon': null,
  //   'orderNum': 0,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 22,
  //   'parentId': 3,
  //   'parentName': '角色管理',
  //   'menuName': '删除',
  //   'menuUrl': null,
  //   'perms': 'sys:role:delete',
  //   'type': 2,
  //   'icon': null,
  //   'orderNum': 0,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 23,
  //   'parentId': 4,
  //   'parentName': '菜单管理',
  //   'menuName': '查看',
  //   'menuUrl': null,
  //   'perms': 'sys:menu:list,sys:menu:info',
  //   'type': 2,
  //   'icon': null,
  //   'orderNum': 0,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 24,
  //   'parentId': 4,
  //   'parentName': '菜单管理',
  //   'menuName': '新增',
  //   'menuUrl': null,
  //   'perms': 'sys:menu:save,sys:menu:select',
  //   'type': 2,
  //   'icon': null,
  //   'orderNum': 0,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 25,
  //   'parentId': 4,
  //   'parentName': '菜单管理',
  //   'menuName': '修改',
  //   'menuUrl': null,
  //   'perms': 'sys:menu:update,sys:menu:select',
  //   'type': 2,
  //   'icon': null,
  //   'orderNum': 0,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 26,
  //   'parentId': 4,
  //   'parentName': '菜单管理',
  //   'menuName': '删除',
  //   'menuUrl': null,
  //   'perms': 'sys:menu:delete',
  //   'type': 2,
  //   'icon': null,
  //   'orderNum': 0,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 27,
  //   'parentId': 1,
  //   'parentName': '系统管理',
  //   'menuName': '参数管理',
  //   'menuUrl': 'sys/config',
  //   'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
  //   'type': 1,
  //   'icon': 'config',
  //   'orderNum': 6,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 29,
  //   'parentId': 1,
  //   'parentName': '系统管理',
  //   'menuName': '系统日志',
  //   'menuUrl': 'sys/log',
  //   'perms': 'sys:log:list',
  //   'type': 1,
  //   'icon': 'log',
  //   'orderNum': 7,
  //   'open': null,
  //   'list': null
  // },
  // {
  //   'menuId': 30,
  //   'parentId': 1,
  //   'parentName': '系统管理',
  //   'menuName': '文件上传',
  //   'menuUrl': 'oss/oss',
  //   'perms': 'sys:oss:all',
  //   'type': 1,
  //   'icon': 'oss',
  //   'orderNum': 6,
  //   'open': null,
  //   'list': null
  // }
]
var navDataList = [
  {
    'menuId': 1,
    'parentId': 0,
    'parentName': null,
    'menuName': '系统管理',
    'menuUrl': null,
    'perms': null,
    'type': 0,
    'icon': 'system',
    'orderNum': 0,
    'open': null,
    'list': [
      {
        'menuId': 2,
        'parentId': 1,
        'parentName': null,
        'menuName': '管理员列表',
        'menuUrl': 'sys/user',
        'perms': null,
        'type': 1,
        'icon': 'admin',
        'orderNum': 1,
        'open': null,
        'list': null
      },
      {
        'menuId': 3,
        'parentId': 1,
        'parentName': null,
        'menuName': '测试测试1',
        'menuUrl': 'sys/echarts',
        'perms': null,
        'type': 1,
        'icon': 'admin',
        'orderNum': 1,
        'open': null,
        'list': null
      }
      // ,
      // {
      //   'menuId': 3,
      //   'parentId': 1,
      //   'parentName': null,
      //   'menuName': '角色管理',
      //   'menuUrl': 'sys/role',
      //   'perms': null,
      //   'type': 1,
      //   'icon': 'role',
      //   'orderNum': 2,
      //   'open': null,
      //   'list': null
      // },
      // {
      //   'menuId': 4,
      //   'parentId': 1,
      //   'parentName': null,
      //   'menuName': '菜单管理',
      //   'menuUrl': 'sys/menu',
      //   'perms': null,
      //   'type': 1,
      //   'icon': 'menu',
      //   'orderNum': 3,
      //   'open': null,
      //   'list': null
      // },
      // {
      //   'menuId': 5,
      //   'parentId': 1,
      //   'parentName': null,
      //   'menuName': 'SQL监控',
      //   'menuUrl': 'http://localhost:8080/renren-fast/druid/sql.html',
      //   'perms': null,
      //   'type': 1,
      //   'icon': 'sql',
      //   'orderNum': 4,
      //   'open': null,
      //   'list': null
      // },
      // {
      //   'menuId': 6,
      //   'parentId': 1,
      //   'parentName': null,
      //   'menuName': '定时任务',
      //   'menuUrl': 'job/schedule',
      //   'perms': null,
      //   'type': 1,
      //   'icon': 'job',
      //   'orderNum': 5,
      //   'open': null,
      //   'list': null
      // },
      // {
      //   'menuId': 27,
      //   'parentId': 1,
      //   'parentName': null,
      //   'menuName': '参数管理',
      //   'menuUrl': 'sys/config',
      //   'perms': 'sys:config:list,sys:config:info,sys:config:save,sys:config:update,sys:config:delete',
      //   'type': 1,
      //   'icon': 'config',
      //   'orderNum': 6,
      //   'open': null,
      //   'list': null
      // },
      // {
      //   'menuId': 30,
      //   'parentId': 1,
      //   'parentName': null,
      //   'menuName': '文件上传',
      //   'menuUrl': 'oss/oss',
      //   'perms': 'sys:oss:all',
      //   'type': 1,
      //   'icon': 'oss',
      //   'orderNum': 6,
      //   'open': null,
      //   'list': null
      // },
      // {
      //   'menuId': 29,
      //   'parentId': 1,
      //   'parentName': null,
      //   'menuName': '系统日志',
      //   'menuUrl': 'sys/log',
      //   'perms': 'sys:log:list',
      //   'type': 1,
      //   'icon': 'log',
      //   'orderNum': 7,
      //   'open': null,
      //   'list': null
      // }
    ]
  }
]

// 获取导航菜单列表 / 权限
export function nav () {
  return {
    // isOpen: false,
    url: '/sys/menu/nav',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menuList': navDataList,
      'permissions': [
        'sys:schedule:info',
        'sys:menu:update',
        'sys:menu:delete',
        'sys:config:info',
        'sys:menu:list',
        'sys:config:save',
        'sys:config:update',
        'sys:schedule:resume',
        'sys:user:delete',
        'sys:config:list',
        'sys:user:update',
        'sys:role:list',
        'sys:menu:info',
        'sys:menu:select',
        'sys:schedule:update',
        'sys:schedule:save',
        'sys:role:select',
        'sys:user:list',
        'sys:menu:save',
        'sys:role:save',
        'sys:schedule:log',
        'sys:role:info',
        'sys:schedule:delete',
        'sys:role:update',
        'sys:schedule:list',
        'sys:user:info',
        'sys:schedule:run',
        'sys:config:delete',
        'sys:role:delete',
        'sys:user:save',
        'sys:schedule:pause',
        'sys:log:list',
        'sys:oss:all'
      ]
    }
  }
}

// 获取菜单列表
export function list () {
  return {
    // isOpen: false,
    url: '/sys/menu/list',
    type: 'get',
    data: dataList
  }
}

// 获取上级菜单
export function select () {
  let dataList = JSON.parse(JSON.stringify(navDataList))
  dataList = dataList.concat(dataList[0].list)
  return {
    // isOpen: false,
    url: '/sys/menu/select',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menuList': dataList
    }
  }
}

// 获取菜单信息
export function info () {
  return {
    // isOpen: false,
    url: '/sys/menu/info',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'menu': dataList[0]
    }
  }
}

// 添加菜单
export function add () {
  return {
    // isOpen: false,
    url: '/sys/menu/save',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 修改菜单
export function update () {
  return {
    // isOpen: false,
    url: '/sys/menu/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除菜单
export function del () {
  return {
    // isOpen: false,
    url: '/sys/menu/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
