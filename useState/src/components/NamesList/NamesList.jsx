import {useMemo, useState, useDeferredValue, useTransition} from 'react';
import data from '../../generated';

const NamesList = () => {
	const [names, setNames] = useState(data);
	const [filter, setFilter] = useState('');
	//*вариант оптимизации отрисовки компонента useDeferredValue()
	const defferedValue = useDeferredValue(filter);

	//*вариант оптимизации отрисовки компонента useTransition();
	// const [isPending, startTransition] = useTransition();

	const list = useMemo(() => {
		return names.filter((item) => item.name.toLowerCase().includes(defferedValue));
	}, [defferedValue]);

	const onValueChange = (e) => {
		// startTransition(() => {
			setFilter(e.target.value)
		// })
	}

	return (
		<div>
			<input type="text" value={filter} onChange={onValueChange}/>
			<ul> {/* ---isPending ? <h3>Loading...</h3> :  вставить перед list.map для работы с useTransition */}
				{list.map((item, i) => {
						return (
							<li key={item.id}>
								{i + 1} {item.name}
							</li>
						)
					})}
			</ul>
		</div>
	);
};

export default NamesList;
