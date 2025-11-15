import './index.css'

const LanguageFilterItem = props => {
  const {filterDetails, updateLanguage, isActive} = props
  const {id, language} = filterDetails

  const onClickFilter = () => {
    updateLanguage(id)
  }

  const btnClass = isActive ? 'filter-btn active-btn' : 'filter-btn'

  return (
    <li className="filter-item">
      <button type="button" className={btnClass} onClick={onClickFilter}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
