import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should rendet NotFoundPage correctly', () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();
});
