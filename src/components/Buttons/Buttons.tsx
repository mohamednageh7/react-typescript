import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Props} from './interface'


 const Buttons: React.FC<Props> = ({label}) => {
  return ( 
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
          {label.map((item,i) => (
        <FormControlLabel key={i} value={item.value} control={<Radio />} label={item.label} />
          ))}
      </RadioGroup>
    </FormControl>
  );
}

export default Buttons