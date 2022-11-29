import React from 'react';
import {
	InputAdornment, TextField 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar({
	placeholderText,
	setSearchTermValue,
	searchTermValue
}:
	{
		placeholderText: string,
		setSearchTermValue: (val: string) => void
		searchTermValue : string
	})
{
	const [val,setVal] = React.useState(searchTermValue);
	const handleChange = React.useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
		setVal(event.target.value);
	}, [setVal]);
	React.useEffect(() => {
		const delayDebounceFn = setTimeout(async () => {
			setSearchTermValue(val);
		}, 400);

		return () => clearTimeout(delayDebounceFn);

	},[val,setSearchTermValue]);
	
	return (
		<TextField 
			id='search-bar'
			label={placeholderText}
			size='small'
			defaultValue={searchTermValue}
			onChange={handleChange}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				)

			}}
			sx={{
				bgcolor: '#ffffff15'
			}}
		/>
	);
}
