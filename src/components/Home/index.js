import {Component} from 'react'
import Navbar from '../Navbar'
import TabItem from '../TabItem'
import PlanItem from '../PlanItem'
import LargeDeviceView from '../LargeDeviceView'

import './index.css'

const tabsList = [
  {tabId: 1, displayText: 'Basic'},
  {tabId: 2, displayText: 'Shopify'},
  {tabId: 3, displayText: 'Advanced'},
]

const planDetails = [
  {
    tabId: 1,
    plan: 'Basic',
    subHeading: 'FOR INDIVIDUALS & SMALL BUSINESSES',
    description:
      'Everything you need to create your store, ship products, and process payments',
    price: '1,994',
    reports: 'Basic reports',
    limit: '2 staff accounts',
  },
  {
    tabId: 2,
    plan: 'Shopify',
    subHeading: 'FOR SMALL BUSINESSES',
    description:
      'Level up your business with professional reporting and more staff accounts',
    price: '7,447',
    reports: 'Professional reports',
    limit: '5 staff accounts',
  },
  {
    tabId: 3,
    plan: 'Advanced',
    subHeading: 'FOR MEDIUM TO LARGE BUSINESSES',
    description:
      'Get the best of Shopify with custom reporting and our lowest transaction fees ',
    price: '30,164',
    reports: 'Custom report builder',
    limit: '15 staff accounts',
  },
]

class Home extends Component {
  state = {isId: tabsList[0].tabId}

  ChangelistItems = id => {
    this.setState({isId: id})
  }

  getActivePlanDetails = () => {
    const {isId} = this.state
    const filteredResult = planDetails.filter(
      eachItem => eachItem.tabId === isId,
    )

    return filteredResult
  }

  render() {
    const {isId} = this.state
    const getActivePlan = this.getActivePlanDetails()
    console.log(getActivePlan)

    return (
      <div>
        <Navbar />
        <div className="bottom-container">
          <ul className="tabs-ul">
            {tabsList.map(eachItem => (
              <TabItem
                isActive={isId === eachItem.tabId}
                isTabClicked={this.ChangelistItems}
                key={eachItem.tabId}
                tabDetails={eachItem}
              />
            ))}
          </ul>

          <div>
            <ul className="plan-container">
              {getActivePlan.map(eachItem => (
                <PlanItem key={eachItem.tabId} details={eachItem} />
              ))}
            </ul>
          </div>

          <div className="plan-large-container">
            <div className="pay-monthly-container">
              <div className="pay-monthly-bg-container">
                <p className="pay-monthly-text">Pay Monthly</p>
                <p className="yearly-text">Pay Yearly (Save 25%)</p>
              </div>
            </div>
            <ul className="large-view-plan-container">
              {planDetails.map(eachItem => (
                <LargeDeviceView key={eachItem.tabId} details={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
