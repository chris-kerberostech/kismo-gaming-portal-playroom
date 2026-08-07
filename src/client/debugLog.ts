const isDevelopment = (() => {
	if (typeof process !== "undefined" && process.env?.NODE_ENV) {
		return process.env.NODE_ENV === "development";
	}

	if (typeof import.meta !== "undefined") {
		const env = (import.meta as ImportMeta & { env?: Record<string, unknown> }).env;
		if (typeof env?.DEV === "boolean") return env.DEV;
		if (typeof env?.MODE === "string") return env.MODE === "development";
		if (typeof env?.NODE_ENV === "string") return env.NODE_ENV === "development";
	}

	if (typeof window !== "undefined") {
		return (
			window.location.hostname === "localhost" ||
			window.location.hostname === "127.0.0.1"
		);
	}

	return false;
})();

export const debugLog = (...args: Parameters<typeof console.debug>) => {
	if (!isDevelopment) return;
	console.debug(...args);
};

export const debugWarn = (...args: Parameters<typeof console.warn>) => {
	if (!isDevelopment) return;
	console.warn(...args);
};
