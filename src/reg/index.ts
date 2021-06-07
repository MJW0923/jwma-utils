/**
 * 去除首尾空格
 * @param str
 */
export const replaceSESpace = (str: string) => {
	return str.replace(/(^\s*)|(\s*$)/g, "");
};
/**
 * 去所有空格
 * @param str
 */
export const replaceAllSpace = (str: string) => {
	return str.replace(/\s+/g, "");
};

/**
 * URL格式校验
 * @param url
 */
export const IsURL = (url: string) => {
	if (!url) {
		return false;
	}
	const strRegex =
		"^((https|http|ftp|rtsp|mms)?://)" +
		"?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + //ftp的user@
		"(([0-9]{1,3}.){3}[0-9]{1,3}" + // IP形式的URL- 199.194.52.184
		"|" + // 允许IP和DOMAIN（域名）
		"([0-9a-z_!~*'()-]+.)*" + // 域名- www.
		"([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + // 二级域名
		"[a-z]{2,6})" + // first level domain- .com or .museum
		"(:[0-9]{1,4})?" + // 端口- :80
		"((/?)|" + // a slash isn't required if there is no file name
		"(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	const re = new RegExp(strRegex);
	if (re.test(url)) {
		return true;
	} else {
		return false;
	}
};

/**
 * 邮箱格式校验
 * @param email
 */
export const checkEmail = (email: string) => {
	if (!email) {
		return false;
	}
	let reg = /^([a-zA-Z]|[0-9])(\w|\-|\.)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/g;
	let result = reg.test(email);
	return result;
};

/**
 * 银行卡格式校验
 * @param bankno
 */
export const luhnCheck = (bankno: string | number) => {
	if (!bankno) {
		return false;
	}
	let lastNum: string = bankno
		.toString()
		.substr(bankno.toString().length - 1, 1); //取出最后一位（与luhn进行比较）
	let first15Num: string = bankno
		.toString()
		.substr(0, bankno.toString().length - 1); //前15或18位
	let newArr: Array<any> = new Array();
	for (let i = first15Num.length - 1; i > -1; i--) {
		//前15或18位倒序存进数组
		newArr.push(first15Num.substr(i, 1));
	}
	let arrJiShu = new Array(); //奇数位*2的积 <9
	let arrJiShu2 = new Array(); //奇数位*2的积 >9
	let arrOuShu = new Array(); //偶数位数组
	for (let j = 0; j < newArr.length; j++) {
		if ((j + 1) % 2 == 1) {
			//奇数位
			if (parseInt(newArr[j]) * 2 < 9) arrJiShu.push(parseInt(newArr[j]) * 2);
			else arrJiShu2.push(parseInt(newArr[j]) * 2);
		} //偶数位
		else arrOuShu.push(newArr[j]);
	}
	let jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
	let jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
	for (let h = 0; h < arrJiShu2.length; h++) {
		jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
		jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
	}
	let sumJiShu: number = 0; //奇数位*2 < 9 的数组之和
	let sumOuShu: number = 0; //偶数位数组之和
	let sumJiShuChild1: number = 0; //奇数位*2 >9 的分割之后的数组个位数之和
	let sumJiShuChild2: number = 0; //奇数位*2 >9 的分割之后的数组十位数之和
	let sumTotal: number = 0;
	for (let m = 0; m < arrJiShu.length; m++) {
		sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
	}
	for (let n = 0; n < arrOuShu.length; n++) {
		sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
	}
	for (let p = 0; p < jishu_child1.length; p++) {
		sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
		sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
	}
	//计算总和
	sumTotal =
		parseInt(sumJiShu + "") +
		parseInt(sumOuShu + "") +
		parseInt(sumJiShuChild1 + "") +
		parseInt(sumJiShuChild2 + "");
	//计算luhn值
	let k: number =
		parseInt(sumTotal + "") % 10 == 0 ? 10 : parseInt(sumTotal + "") % 10;
	let luhn: number = 10 - k;
	if (+lastNum === luhn) {
		// $("#banknoInfo").html("luhn验证通过");
		return true;
	} else {
		// $("#banknoInfo").html("银行卡号必须符合luhn校验");
		return false;
	}
};
