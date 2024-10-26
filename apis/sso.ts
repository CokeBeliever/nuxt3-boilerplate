import utilsRequestSso from '@/utils/request-sso'

export const getAuthProfile = (query = {}) => {
  // return utilsRequestSso.get({
  //   url: '/auth/profile',
  //   query,
  // })

  return Promise.resolve({
    code: 200,
    data: {
      id: '5',
      username: 'read-only1',
      mobile: '18028592716',
      email: '811258684@qq.com',
      name: '游客1',
      sex: 'MALE',
      enabled: true,
      birthday: '2024-10-11 00:00:00',
      createdAt: '2024-10-10 14:54:49',
      updatedAt: '2024-10-10 15:03:04',
      permissionCodes: [],
    },
    message: '操作成功',
  })
}
