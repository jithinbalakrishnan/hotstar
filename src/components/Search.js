import { memo } from "react"

const Search = (props) => {
    const {onChange} = props
    console.log('search component is rendered')
    return <input data-testid="search-input" onChange={onChange}></input>
}
export default memo(Search)