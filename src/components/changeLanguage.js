import React, {useContext} from 'react';
import LocaleContext from '../contexts/locale';

const ChangeLanguage = () => {
	const {setLocale} = useContext(LocaleContext);

	return (
		<select onChange={e => setLocale(e.target.value)}>
			<option value="en">English</option>
			<option value="de">German</option>
		</select>
	);
};

export default ChangeLanguage;
