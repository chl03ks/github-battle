const React = require('react');
const PropTypes = require('prop-types');

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

SelectedLanguage.proTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  
  updateLanguage(lang) {
      this.setState(() => {
        return { selectedLanguage: lang }
      });
  }

  render() {
    return (
    <div>
      <SelectedLanguage 
        selectedLanguage={this.state.selectedLanguage} 
        onSelect={this.updateLanguage}
      />
    </div>
    )
  }
}


  module.exports = Popular;