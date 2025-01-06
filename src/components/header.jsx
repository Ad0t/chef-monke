import './header.css'
import chefClaudeIcon from '/src/assets/chef-claude-icon.png'
import chefMonkeIcon from '/src/assets/chef-monke.png'


function NavBar () {
    return (
        <div className="header">
            <span className='header-box'>
                <img className="logo-img" src={chefMonkeIcon} alt="chef-logo" />
                <h1>Chef Monke</h1>
            </span>
        </div>
    )
}

export default NavBar