import React from 'react';
import {useNavigate } from 'react-router-dom';

function useChangePage() {
	const navigate = useNavigate();
	const [IN, setIN] = React.useState(true);
	const changePage = React.useCallback((location: string) => {
		setIN(false);
		setTimeout(() => {
			navigate(location);
			setIN(true);
		}, 300);
	}, []);
	return [IN, changePage];
}

export default useChangePage as ()=>[boolean,(val: string)=>void];