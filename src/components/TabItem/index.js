import './index.css'

const TabItem = props => {
  const {tabDetails, isTabClicked, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    isTabClicked(tabId)
  }

  const topColor = isActive ? 'topColor' : ''

  return (
    <li className={`li-list ${topColor}`} onClick={onClickTab}>
      <p className="tab-text">{displayText}</p>
    </li>
  )
}

export default TabItem
