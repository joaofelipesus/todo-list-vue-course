import TaskCard from '@/components/TaskCard'
const { shallowMount } = require('@vue/test-utils')

describe('TaskCard', () => {
  it('render task description', () => {
    const task = { status: 'pending', description: 'Some cool task' }
    const wrapper = shallowMount(TaskCard, { propsData: { task } })
    expect(wrapper.find('[data-test="description"]').text()).toMatch('Some cool task')
  })

  it('render background color red when task is pending', () => {
    const task = { status: 'pending', description: 'Some cool task' }
    const wrapper = shallowMount(TaskCard, { propsData: { task } })
    expect(wrapper.classes()).toContain('pending')
  })

  it('render background color green when task is done', () => {
    const task = { status: 'done', description: 'Some cool task' }
    const wrapper = shallowMount(TaskCard, { propsData: { task } })
    expect(wrapper.classes()).toContain('done')
  })

  it('render task description cut when task is done', () => {
    const task = { status: 'done', description: 'Some cool task' }
    const wrapper = shallowMount(TaskCard, { propsData: { task } })
    expect(wrapper.find('[data-test="marked-description"]').exists()).toBeTruthy()
  })
})
