import logo from "/assets/TestLogo.svg";

const NavItems = () => {
  const items = [
    { sectionName: 'Overview', image:"/assets/home_FILL0_wght300_GRAD0_opsz24.svg"},
    { sectionName: 'Patients', image: "/assets/group_FILL0_wght300_GRAD0_opsz24.svg" },
    { sectionName: 'Schedule', image: "/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" },
    { sectionName: 'Message', image: "/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" },
    { sectionName: 'Transactions', image: "/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg" },
  ]
  return (
    <ul className="nav-ul m-0">
      {items.map((item) => <li key={item.sectionName}><a rel="stylesheet" href="/"><img src={item.image} alt="home" />{item.sectionName}</a></li>)}
    </ul>
  )
}

const Navbar = () => {
  return (
    <header className="nav-header">
      <div className="flex">
        <div className="col-3">
          <a href="/">
            <img src={logo} alt="Tech Care logo" />
          </a>
        </div>

        <nav className="col-6 flex ">
          <NavItems />
        </nav>

        <div className="flex col-3">
          <div className="flex">
            <div className="m-0 mr-1 ">
              <a href="/">
                <img className="m-0"src="\assets\senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png" alt="doctor profile image" />
              </a>
            </div>
            <div className="nav-profile">
              <p className="m-0">Dr. Jose Simmons</p>
              <p className="m-0">General Practictitioner</p>
            </div>
          </div>

          <div className="nav-btn-container">
            <button className="nav-setting-btn"><img src="/assets/settings_FILL0_wght300_GRAD0_opsz24.svg" alt="setting" /></button>
            <button className="nav-more-btn"><img src="/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="more" /></button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar;
