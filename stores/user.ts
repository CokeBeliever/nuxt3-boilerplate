import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore(
  'user',
  () => {
    const accessToken = ref('')
    const refreshToken = ref('')
    const tokenType = ref('')
    const user = ref<any>(null)
    const username = ref('')
    const email = ref('')
    const mobile = ref('')
    const isLogin = computed(() => Boolean(accessToken.value))
    const permissionCodeMap = computed(() => {
      return Object.fromEntries(
        (user.value?.permissionCodes ?? []).map((item) => [item, true]),
      )
    })

    const login = (data) => {
      accessToken.value = data.access_token
      refreshToken.value = data.refresh_token
      tokenType.value = data.token_type
    }

    const logout = () => {
      accessToken.value = ''
      refreshToken.value = ''
      tokenType.value = ''
      user.value = null
    }

    return {
      accessToken,
      refreshToken,
      tokenType,
      user,
      username,
      email,
      mobile,
      isLogin,
      permissionCodeMap,
      login,
      logout,
    }
  },
  {
    persist: {
      paths: [
        'accessToken',
        'refreshToken',
        'tokenType',
        'username',
        'email',
        'mobile',
      ],
    },
  },
)
