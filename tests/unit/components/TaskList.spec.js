import { mount, shallowMount } from '@vue/test-utils'
import TaskList from '@/components/TaskList'

describe('TaskList', () => {
  it('renders a message when task list is empty', () => {
    const emptyMessage = 'Todas as tartefas feitas.'
    const wrapper = shallowMount(TaskList, { propsData: { tasks: [] } })
    expect(wrapper.find('[data-test="empty-list-message"]').text()).toMatch(emptyMessage)
  })

  it('renders issue tasks when list is not empty', () => {
    const tasks = [
      { status: 'pending', description: 'Drink water' },
      { status: 'done', description: 'Buy milk' }
    ]
    const wrapper = shallowMount(TaskList, { propsData: { tasks: tasks } })
    expect(wrapper.find('[data-test="empty-list-message"]').exists()).toBeFalsy()
    expect(wrapper.findAll('[data-test="task-card"]').length).toBe(2)
  })

  it('change card status when changeStatus event is emmited by a TaskCard component', async () => {
    const tasks = [{ status: 'pending', description: 'Drink water' }]
    const wrapper = mount(TaskList, { propsData: { tasks: tasks } })
    wrapper.find('.task-card').trigger('click')
    await wrapper.vm.$nextTick()
    expect(tasks[0].status).toMatch('done')
  })
})
