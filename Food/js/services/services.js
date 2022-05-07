"use strict";

const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST', headers: {
			'Content-type': 'application/json' //для JSON
		}, body: data
	});
	return await res.json();
};

// функция для создания карточек с товаром из db.json
const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
	console.log(res);
    return await res.json();
};


export {postData};

export {getResource};