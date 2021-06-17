import { mount, shallowMount } from '@vue/test-utils'
import BarReviews from '../../src/modules/bars/barReviews.vue'
import ReviewsList from '../../src/modules/reviews/components/reviewsList.vue'
import AddReview from '../../src/modules/reviews/components/addReview.vue'
import * as Vue from "vue"

const mockRoute = {
    params: {
        id: 1
    }
}

describe('barReviews.vue', () => {
    it('should display reviews cards', () => {
        const wrapper = shallowMount(BarReviews, {
            propsData: {
                name: 'Test Bar'
            },
            global: {
                mocks: {
                    $route: mockRoute,
                }
            }
        })
        expect(wrapper.findComponent(ReviewsList))
    })
})

describe('barReviews.vue', () => {
    it('should display bar name', () => {
        const wrapper = shallowMount(BarReviews, {
            propsData: {
                name: 'Test Bar'
            },
            global: {
                mocks: {
                    $route: mockRoute,
                }
            }
        })

        const title = wrapper.find("ion-title")
        expect(title.text()).toBe("Test Bar")
    })
})

describe('reviewList.vue', () => {
    it('should have data as props', () => {
        const wrapper = shallowMount(ReviewsList, {
            propsData: {
                datas: [{
                    content: "Super bar !!!!!!",
                    rating: 4,
                    barId: 1,
                    userId: 1,
                    date: "2021-05-25T08:02:03.000Z",
                    user: { id: 1, pseudo: "Bob" },
                    bar: { id: 1, name: "Test Bar" }
                }],
                bar: true,
            }
        })
        expect(wrapper.props().datas).toBeDefined()
        expect(wrapper.props().datas[0].rating).toBe(4)
        const content = wrapper.find(".content")
        expect(content.text()).toBe("Super bar !!!!!!")
        const barName = wrapper.find(".home-name")
        expect(barName.exists()).toBe(true)
    })
})

describe('reviewList.vue', () => {
    it('should not display bar name when not true', () => {
        const wrapper = shallowMount(ReviewsList, {
            propsData: {
                datas: [{
                    content: "Super bar !!!!!!",
                    rating: 4,
                    barId: 1,
                    userId: 1,
                    date: "2021-05-25T08:02:03.000Z",
                    user: { id: 1, pseudo: "Bob" },
                    bar: { id: 1, name: "Test Bar" }
                }],
            }
        })
        const barName = wrapper.find(".home-name")
        expect(barName.exists()).toBe(false)
    })
})

describe('addReviews.vue', async () => {
    it('should not accept too short reviews', async() => {
        const wrapper = mount(AddReview, {
            global: {
                mocks: {
                    $route: mockRoute,
                }
            }
        })
        expect(wrapper.vm.v$.review.$error).toBe(false)
        const button = wrapper.find("ion-button")
        
        button.trigger('submit.prevent')
        await Vue.nextTick()
        
        expect(wrapper.vm.v$.review.$error).toBe(true)
    })
})