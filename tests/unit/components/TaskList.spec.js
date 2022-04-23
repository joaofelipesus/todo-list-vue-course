import { shallowMount } from "@vue/test-utils"
import TaskList from '@/components/TaskList'

describe('TaskList', () => {
  it('renders a message when task list is empty', () => {
    const emptyMessage = 'Todas as tartefas feitas.'
    const wrapper = shallowMount(TaskList, { propsData: { tasks: [] }})
    expect(wrapper.find('[data-test="empty-list-message"]').text()).toMatch(emptyMessage)
  })

  it('renders issue tasks when list is not empty', () => {
    const tasks = [
      {status: 'pending', description: 'Drink water'},
      {status: 'done', description: 'Buy milk'}
    ]
    const wrapper = shallowMount(TaskList, { propsData: { tasks: tasks }})
    expect(wrapper.find('[data-test="empty-list-message"]').exists()).toBeFalsy()
    expect(wrapper.findAll('[data-test="task-card"]').length).toBe(2)
  })
})
