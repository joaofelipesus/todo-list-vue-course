import { shallowMount } from '@vue/test-utils'
import ProgressBar from '@/components/ProgressBar'

describe('ProgressBar', () => {
  it('set class all-done when received percentage is equal to 100', () => {
    const wrapper = shallowMount(ProgressBar, { propsData: { percentage: 100 } })
    expect(wrapper.find('[data-test="progress-bar"]').classes()).toContain('all-done')
  })

  it('set class almost-done when received percentage is higher than to 75', () => {
    const wrapper = shallowMount(ProgressBar, { propsData: { percentage: 87 } })
    expect(wrapper.find('[data-test="progress-bar"]').classes()).toContain('almost-done')
  })

  it('set class a-lot-to-do when received percentage is less than 75', () => {
    const wrapper = shallowMount(ProgressBar, { propsData: { percentage: 42 } })
    expect(wrapper.find('[data-test="progress-bar"]').classes()).toContain('a-lot-to-do')
  })
})
