import './header.css'
import chefClaudeIcon from '/src/assets/chef-claude-icon.png'


function NavBar () {
    return (
        <div className="header">
            <span className='header-box'>
                <img className="logo-img" src={chefClaudeIcon} alt="chef-logo" />
                <h1>Chef Claude</h1>
            </span>
        </div>
    )
}

export default NavBar