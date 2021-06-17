/* eslint-disable @typescript-eslint/camelcase */
import { mount, shallowMount } from '@vue/test-utils'
import BarList from '../../src/modules/bars/barList.vue'
import BarCard from '../../src/modules/bars/components/barCard.vue'
import BarDetail from '../../src/modules/bars/barDetail.vue'
import ReviewsList from '../../src/modules/reviews/components/reviewsList.vue'
import AddReview from '../../src/modules/reviews/components/addReview.vue'
import HourModal from "../../src/modules/bars/components/hourModal.vue";

describe('barList.vue', () => {
    it('should display bars cards', () => {
        const wrapper = mount(BarList);
        expect(wrapper.findComponent(BarCard))
        const barByName = wrapper.findComponent({ name: 'BarCard' }) // => finds Bar by `name`
        expect(barByName.exists()).toBe(true)
    })
})

describe('barList.vue', () => {
    it('has data', () => {
        expect(typeof BarList.data).toBe('function')
    })
})

describe('barList.vue', () => {
    it('has variables', () => {
        const wrapper = mount(BarList);
        expect(wrapper.vm.bars).toBeDefined()
        expect(wrapper.vm.sort).toBe(0)
    })
})

describe('barCard.vue', () => {
    it('should have data as props', () => {
        const wrapper = shallowMount(BarCard, {
            propsData: {
                data: [{
                    name: "TestName",
                    description: "TestDescription",
                    city: "Testville",
                    zip_code: 12345,
                    address: "1 rue test",
                    pictures: [],
                    rating: {}
                }]
            }
        })
        expect(wrapper.props().data).toBeDefined()
        expect(wrapper.props().data[0].name).toBe("TestName")
        const title = wrapper.find("ion-card-title")
        const desc = wrapper.find("ion-card-content")
        expect(title.html()).toBe("<ion-card-title>TestName</ion-card-title>")
        expect(desc.html()).toBe("<ion-card-content>TestDescription</ion-card-content>")
    })
})


const mockRoute = {
    params: {
        id: 1
    }
}


describe('barDetail.vue', () => {
    it('should have data', () => {
        const wrapper = mount(BarDetail, {
            global: {
                mocks: {
                    $route: mockRoute,
                }
            }
        })
        expect(typeof BarDetail.data).toBe('function')
        expect(wrapper.vm.id).toBe(1)
    })
})

describe('barDetail.vue', () => {
    it('can display and add reviews', () => {
        const wrapper = mount(BarDetail, {
            global: {
                mocks: {
                    $route: mockRoute,
                }
            }
        })
        expect(wrapper.findComponent(ReviewsList))
        expect(wrapper.findComponent(AddReview))
    })
})

describe('barDetail.vue', async () => {
    it('can display bar data', async () => {
        const wrapper = mount(BarDetail, {
            global: {
                mocks: {
                    $route: mockRoute,
                }
            }
        })

        await wrapper.setData({
            bar: {
                name: "TestName",
                description: "TestDescription",
                city: "Testville",
                zip_code: 12345,
                address: "1 rue test",
                pictures: [],
                rating: {}
            }
        })
        const title = wrapper.find("ion-title")
        expect(title.text()).toBe("TestName")
    })
})

describe('hourModal.vue', () => {
    it('should have data as props', () => {
        const wrapper = shallowMount(HourModal, {
            propsData: {
                hours: {
                    fri: [
                        "07:00",
                        "22:00"
                    ],
                    mon: [
                        "07:00",
                        "20:00"
                    ],
                    sat: [
                        "10:00",
                        "19:00"
                    ],
                    sun: [
                        null,
                        null
                    ],
                    thu: [
                        "07:00",
                        "20:00"
                    ],
                    tue: [
                        "07:00",
                        "20:00"
                    ],
                    wed: [
                        "07:00",
                        "20:00"
                    ]
                },
            }
        })
        expect(wrapper.props().hours).toBeDefined()
        expect(wrapper.props().hours.mon[0]).toBe("07:00")
    })
})