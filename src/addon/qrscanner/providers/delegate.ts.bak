/**
 * Interface that all qr code handlers must implement.
 */
export interface AddonQRCodeData {
	/**
     * Type of the Qr code.
     * @type {string}
     */
	type?: string;
	/**
     * Value of the Qr code.
     * @type {any}
     */
	value?: any; 	
} 
/**
 * 
 */
export class AddonQRCodeDataHandle { 
	/**
     * Type of the Qr code.
     * @type {string}
     */
	private _type: string;
	/**
     * Value of the Qr code.
     * @type {any}
     */
	private _value: any; 
	constructor(obj: {type: any, value: any}) {
		this._type = obj.type;
		this._value = obj.value;
	}
	create(obj: any): boolean {
		var a = this.check(obj);
		console.log(a);
		return a;
	}
	check(obj: any): boolean {
		console.log(this);
		return true;
		// let result;
		// for (const el in obj) {
		// 	result = this.dataType.hasOwnProperty(el);
		// }
		// return result;
	}
	get type(): string {
		return this._type;
	}
	get value(): any {
		return this._value;
	}
}