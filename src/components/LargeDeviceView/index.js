// eslint-disable-next-line import/no-extraneous-dependencies
import {TiTick} from 'react-icons/ti'

import './index.css'

const LargeDeviceView = props => {
  const {details} = props
  const {plan, subHeading, description, price, reports, limit} = details

  const popular = plan === 'Basic' ? 'border-change' : ''

  return (
    <div className={`large-planItem-container ${popular}`}>
      <h1 className="large-plan-text">{plan}</h1>
      <h1 className="large-subHeading">{subHeading}</h1>
      <p className="large-description">{description}</p>
      <div className="price-container">
        <h1 className="large-price-text">
          <span>&#8377;</span>
          {price}{' '}
        </h1>
        <h1 className="large-INR-text">
          INR <br /> /mo
        </h1>
      </div>
      <div className="large-green-container">
        <p className="large-green-text">
          Get your first three months for &#8377;20/mo
        </p>
      </div>

      <div className="plan-details-container">
        <p className="plan-text-large">What's included in {plan}</p>
        <div className="details-container">
          <TiTick className="large-tick-icon" />
          <p className="large-details-text">{reports}</p>
        </div>

        <div className="details-container">
          <TiTick className="large-tick-icon" />
          <p className="large-details-text">Up to 1,000 inventory locations</p>
        </div>

        <div className="details-container">
          <TiTick className="large-tick-icon" />
          <p className="large-details-text">{limit}</p>
        </div>
      </div>

      <button className="large-try-button" type="button">
        Try for free
      </button>
    </div>
  )
}

export default LargeDeviceView
