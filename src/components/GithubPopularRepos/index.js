import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const GithubPopularRepos = () => {
  const [activeLanguage, setActiveLanguage] = useState('ALL')
  const [reposList, setReposList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  useEffect(() => {
    getRepos()
  }, [activeLanguage])

  const getRepos = async () => {
    setApiStatus(apiStatusConstants.loading)

    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguage}`
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      const updatedRepos = data.popular_repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        issuesCount: repo.issues_count,
        forksCount: repo.forks_count,
        starsCount: repo.stars_count,
        avatarUrl: repo.avatar_url,
      }))

      setReposList(updatedRepos)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  const updateLanguage = id => {
    setActiveLanguage(id)
  }

  const renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  const renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-text">Something Went Wrong</h1>
    </div>
  )

  const renderSuccessView = () => (
    <ul className="repos-list">
      {reposList.map(repo => (
        <RepositoryItem key={repo.id} repoDetails={repo} />
      ))}
    </ul>
  )

  const renderResult = () => {
    switch (apiStatus) {
      case apiStatusConstants.loading:
        return renderLoader()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <div className="app-container">
      <h1 className="heading">Popular</h1>

      <ul className="filters-container">
        {languageFiltersData.map(each => (
          <LanguageFilterItem
            key={each.id}
            filterDetails={each}
            updateLanguage={updateLanguage}
            isActive={each.id === activeLanguage}
          />
        ))}
      </ul>

      {renderResult()}
    </div>
  )
}

export default GithubPopularRepos
