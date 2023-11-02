interface Attributes {
    commentAttr: any;
    usageAttr: any;
}
/**
 * Создает отсоединенную подпись хеша по отпечатку сертификата
 *
 * @param thumbprint - отпечаток сертификата
 * @param messageHash - хеш подписываемого сообщения, сгенерированный по ГОСТ Р 34.11-2012 256 бит
 * @param attributes = { commentAttr - примечание, usageAttr - тип подписи } - атрибуты подписи
 * @returns подпись в формате PKCS#7
 */
export declare const createDetachedSignature: (thumbprint: string, messageHash: string, attributes?: Attributes) => Promise<string>;
export {};
