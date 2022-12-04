import React from 'react';
import { useNavigate } from 'react-router-dom';
import AttractieForm from './AttractieForm';

const VoegAttractieToe = () => {
	const navigate = useNavigate();
	const handleOnSubmit = async (attractie : any) => {
		await fetch('attractie', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(attractie),
		});
		navigate('/attracties');
	};

	return (
		<>
			<AttractieForm handleOnSubmit={handleOnSubmit} />
		</>
	);
};

export default VoegAttractieToe;
