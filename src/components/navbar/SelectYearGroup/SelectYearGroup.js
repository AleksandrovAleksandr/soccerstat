import {connect, useDispatch} from 'react-redux'

import {Select} from 'antd'
import {setSeason} from '../../../redux/actions/actions'

const {Option} = Select

const SelectYearGroup = props => {
  const dispatch = useDispatch()

  const handleChange = value => {
    dispatch(setSeason(value))
  }
  return (
    <label>
      Выберите год:
      <Select defaultValue={props.season} onChange={handleChange}>
        <Option value="2015">2015</Option>
        <Option value="2016">2016</Option>
        <Option value="2017">2017</Option>
        <Option value="2018">2018</Option>
        <Option value="2019">2019</Option>
        <Option value="2020">2020</Option>
        <Option value="2021">2021</Option>
      </Select>
    </label>
  )
}

const mapStateToProps = state => ({
  season: state.userSetting.season,
})

export default connect(mapStateToProps, {setSeason})(SelectYearGroup)
