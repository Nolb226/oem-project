import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AllRoute } from './Routes';

function Routes() {
	return <RouterProvider router={AllRoute} />;
}

export default Routes;
