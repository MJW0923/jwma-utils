/*
 * @Author: Jwma
 * @Date: 2021-08-30 14:23:08
 * @LastEditors: Jwma
 * @LastEditTime: 2021-08-30 14:36:06
 * @FilePath: \jwma-utils\src\request\config.ts
 */
export interface ReqConfig {
	type: "get" | "post" | "put";
	url: string;
	params?: any;
	headers?: any;
	timeout?: number;
}
