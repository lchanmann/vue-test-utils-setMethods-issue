import { mount } from '@vue/test-utils'

describe('setMethods', () => {
  it('calls stub when event is triggered', () => {
    const TestComponent = {
      template: '<button @click="clickMethod">Click here</button>',
      methods: {
        clickMethod() {
          console.log('clickMethod')
        }
      }
    }
    const wrapper = mount(TestComponent)
    const clickMethodStub = jest.fn()
    wrapper.setMethods({ clickMethod: clickMethodStub })
    wrapper.find('button').trigger('click')
    expect(clickMethodStub).toHaveBeenCalled()
  })
})
