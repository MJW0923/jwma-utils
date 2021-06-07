/**
 * 深拷贝
 */
export const deepClone = (obj: any) => {
	try {
		if (!obj) {
			return obj;
		}
		if (obj instanceof Date) {
			return obj;
		}
		if (obj instanceof String || Number || Boolean) {
			return obj.valueOf();
		}
		let newObj: any = obj instanceof Array ? [] : {};
		for (let i in obj) {
			if (obj.hasOwnProperty(i)) {
				newObj[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
			}
		}
		return newObj;
	} catch (e) {
		throw new Error(e);
	}
};
