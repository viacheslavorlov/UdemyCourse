import React, {useEffect, useRef, useState, memo} from "react";



const Bank = memo(({setAmount, amount, setValue, setValute, valute, value}) => {
	const valueRef = useRef(document.querySelector('#valute'));
	const onValueChange = () => {
		setValute(valueRef.current.value);
	};
	const amountRef = useRef();

	const onAmountChange = () => {
		if (amountRef.current.value > 0) {
			setAmount(amountRef.current.value);
		} else {
			setAmount(0);
			amountRef.current.value = 0;
		}
	}

	// console.log('render')

	return (
		<div className="app">
			<div>
				<h1>Валютный калькулятор</h1>
				<label htmlFor="amount">Количество: </label>
				<input ref={amountRef} id="amount" type="number" onInput={onAmountChange}/>
				<label htmlFor="valute">Выбор валюты: </label>
				<select ref={valueRef} name="valute" id="valute" onInput={onValueChange}>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
				</select>
				<br/>
				<div>{amount} {valute} = {value} рублей</div>
			</div>
		</div>
	)
})

export default Bank;