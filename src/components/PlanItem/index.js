// eslint-disable-next-line import/no-extraneous-dependencies
import {TiTick} from 'react-icons/ti'

import './index.css'

const PlanItem = props => {
  const {details} = props
  const {plan, price, reports, limit} = details

  return (
    <div className="planItem-container">
      <div className="price-container">
        <h1 className="price-text">
          <span>&#8377;</span>
          {price}{' '}
        </h1>
        <h1 className="INR-text">
          INR <br /> /mo
        </h1>
      </div>
      <div className="green-container">
        <p className="green-text">
          Get your first three months for &#8377;20/mo
        </p>
      </div>

      <div className="plan-details-container">
        <p className="plan-text">What's included in {plan}</p>
        <div className="details-container">
          <TiTick className="tick-icon" />
          <p className="details-text">{reports}</p>
        </div>

        <div className="details-container">
          <TiTick className="tick-icon" />
          <p className="details-text">Up to 1,000 inventory locations</p>
        </div>

        <div className="details-container">
          <TiTick className="tick-icon" />
          <p className="details-text">{limit}</p>
        </div>
      </div>

      <button className="try-button" type="button">
        Try for free
      </button>
    </div>
  )
}

export default PlanItem
