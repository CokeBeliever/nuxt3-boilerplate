import type { RouteRecordName } from '#vue-router'
import { useUserStore } from '@/stores'
import * as apisSso from '@/apis/sso'

/** 无需登录的路由名称列表 */
const publicRouteNameList: RouteRecordName[] = [
  'login',
  'register',
  'forgot-pwd',
]

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore()
  const qsIndex = from.fullPath.indexOf('?')
  const qs = qsIndex !== -1 ? from.fullPath.slice(qsIndex) : ''

  if (userStore.isLogin) {
    if (to.name === 'login') {
      return navigateTo(`/${qs}`)
    }

    if (!userStore.user) {
      try {
        const res = await apisSso.getAuthProfile()
        userStore.user = res.data
      } catch (error) {
        console.error('middleware auth error', error)
        userStore.logout()
        return navigateTo(`/login${qs}`)
      }
    }
  } else {
    if (!publicRouteNameList.includes(to.name)) {
      return navigateTo(`/login${qs}`)
    }
  }
})
