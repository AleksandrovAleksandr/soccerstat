import {connect} from 'react-redux'
import {setSeason} from '../../redux/actions/actions'
import Navbar from './Navbar'
import SelectYearGroup from './SelectYearGroup/SelectYearGroup'

const NavbarContainer = ({season}) => (
  <div>
    <Navbar season={season} />
    <SelectYearGroup />
  </div>
)

const mapStateToProps = state => ({season: state.userSetting.season})

export default connect(mapStateToProps, {setSeason})(NavbarContainer)
