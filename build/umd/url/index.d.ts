/**
 * 通过参数名获取url中的参数值
 * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
 * @param  {string} name 参数名
 * @param  {boolean} hash 是否是hash
 * @return {string}  参数值
 */
export declare function getQueryString(name: string, hash?: string): string | null;
