function get(cookieName) {
	const cookies = document.cookie.split(';');
	let finalCookie;

	for (let cookie of cookies) {
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1, cookie.length);
		}

		if (cookie.indexOf(`${cookieName}=`) !== 0) return;

		finalCookie = cookie.substring(cookieName.length + 1, cookie.length);

		break;
	}

	if (finalCookie === 'null' || finalCookie === 'undefined') {
		return null;
	}

	return finalCookie;
}

function set(cookieName, cookieValue) {
	document.cookie = `${cookieName}=${cookieValue}; path=/`;
}

export default { get, set };
