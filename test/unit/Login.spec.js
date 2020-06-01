import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Login from '../../src/views/auth/Login.vue'

describe('Login.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = shallowMount(Login)
    // wrapper.find('button').trigger('click')
    // expect(wrapper.find('div').text()).contains('1')
  })
})

