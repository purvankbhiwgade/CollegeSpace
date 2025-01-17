import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import { useForm } from '../UI elements/useForm'

const initialValues = {
    type: 'all',
    year: 'all',
    branch: 'all',
}

const Filters = () => {
    const { values, setValues, handleChange } = useForm(initialValues)


    return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Material</FormLabel>
                <RadioGroup name="type" value={values.type} onChange={handleChange} style={{ flexDirection: 'row'}}>
                    <FormControlLabel value="books" control={<Radio />} label="Books" />
                    <FormControlLabel value="papers" control={<Radio />} label="Test Papers" />
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                </RadioGroup>
                <FormLabel component="legend">Year</FormLabel>
                <RadioGroup name="year" value={values.year} onChange={handleChange} style={{ flexDirection: 'row'}}>
                    <FormControlLabel value="fy" control={<Radio />} label="First Year" />
                    <FormControlLabel value="sy" control={<Radio />} label="Second Year" />
                    <FormControlLabel value="ty" control={<Radio />} label="Third Year" />
                    <FormControlLabel value="4y" control={<Radio />} label="Fourth Year" />
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                </RadioGroup>
                <FormLabel component="legend">Branch</FormLabel>
                <RadioGroup name="branch" value={values.branch} onChange={handleChange} style={{ flexDirection: 'row'}}>
                    <FormControlLabel value="comps" control={<Radio />} label="Computer Engineering" />
                    <FormControlLabel value="it" control={<Radio />} label="Information Technology" />
                    <FormControlLabel value="extc" control={<Radio />} label="Electronics and Telecommunication" />
                    <FormControlLabel value="etrx" control={<Radio />} label="Electronics" />
                    <FormControlLabel value="electrical" control={<Radio />} label="Electrical Engineering" />
                    <FormControlLabel value="prod" control={<Radio />} label="Production Engineering" />
                    <FormControlLabel value="civil" control={<Radio />} label="Civil Engineering" />
                    <FormControlLabel value="mech" control={<Radio />} label="Mechnanical Engineering" />
                    <FormControlLabel value="text" control={<Radio />} label="Textile Engineering" />
                </RadioGroup>
            </FormControl>)
}

export default Filters