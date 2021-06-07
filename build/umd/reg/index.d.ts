/**
 * 去除首尾空格
 * @param str
 */
export declare const replaceSESpace: (str: string) => string;
/**
 * 去所有空格
 * @param str
 */
export declare const replaceAllSpace: (str: string) => string;
/**
 * URL格式校验
 * @param url
 */
export declare const IsURL: (url: string) => boolean;
/**
 * 邮箱格式校验
 * @param email
 */
export declare const checkEmail: (email: string) => boolean;
/**
 * 银行卡格式校验
 * @param bankno
 */
export declare const luhnCheck: (bankno: string | number) => boolean;
