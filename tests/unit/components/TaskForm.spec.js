import TaskForm from '@/components/TaskForm'
import { shallowMount } from '@vue/test-utils'

describe('TaskForm', () => {
  it('emit event and clean field on add button click', async () => {
    const wrapper = shallowMount(TaskForm)
    wrapper.find('[data-test="description-field"]').setValue('Do the dishes')
    wrapper.find('[data-test="add-task-button"]').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('addTask')).toBeTruthy()
    expect(wrapper.emitted().addTask).toEqual([[{ description: 'Do the dishes', status: 'pending' }]])
  })

  it('emit event and clean field on enter click', async () => {
    const wrapper = shallowMount(TaskForm)
    wrapper.find('[data-test="description-field"]').setValue('Do the dishes')
    wrapper.find('[data-test="description-field"]').trigger('keyup.enter')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted('addTask')).toBeTruthy()
    expect(wrapper.emitted().addTask).toEqual([[{ description: 'Do the dishes', status: 'pending' }]])
  })
})
