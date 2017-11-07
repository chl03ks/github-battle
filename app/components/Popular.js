const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');

function SelectedLanguage (props) {
  let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map((lang) => {
        return ( 
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
            onClick={ props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
    )
}

function RepoGrid (props) { 
  return (
    <ul className='popular-list '>
      {props.repos.map((repo, index) => {
        return(
          <li key={repo.name} className='popular-item'>
          <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img className='avatar'src={repo.owner.avatar_url} />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
          </ul>
          </li>
        );
      })}
    </ul>
  )
}

SelectedLanguage.proTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLanguage: 'All',
      repose: null,

    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  
  updateLanguage(lang) {
      this.setState(() => ({selectedLanguage: lang, repos: null }));
      api.fetchPopularRepos(lang)
        .then((repos) => this.setState(() => ({repos}) ));
  }

  render() {
    return (
    <div>
      <SelectedLanguage 
        selectedLanguage={this.state.selectedLanguage} 
        onSelect={this.updateLanguage}
      />
      {!this.state.repos ? <p className='loading'> Loading </p> : <RepoGrid repos={this.state.repos} /> }
    </div>
    )
  }
}


  module.exports = Popular;