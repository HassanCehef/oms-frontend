import { expect } from 'chai'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Login from '../../src/views/auth/Login.vue'

const login = shallowMount(Login)

describe('Login.vue', () => {
  it('trims the username at login time', () => {
    login.setData({data: {username: 'this@example.org'}})
    login.vm.login()
    expect(login.vm.$data.data.username).to.equal("this@example.org")
  })
  it('trims the username at login time', () => {
    login.setData({data: {username: 'extraspace@example.org   '}})
    login.vm.login()
    expect(login.vm.$data.data.username).to.equal("extraspace@example.org")
  })
})

