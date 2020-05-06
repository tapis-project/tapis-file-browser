// tslint:disable
/**
 * Tapis Files API
 * My API
 *
 * The version of the OpenAPI document: 0.0
 * Contact: cicsupport@tacc.utexas.edu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface TransferTaskRequest
 */
export interface TransferTaskRequest {
    /**
     * ID of source system
     * @type {string}
     * @memberof TransferTaskRequest
     */
    sourceSystemId: string;
    /**
     * Path to file/folder in source system
     * @type {string}
     * @memberof TransferTaskRequest
     */
    sourcePath: string;
    /**
     * ID of destination system
     * @type {string}
     * @memberof TransferTaskRequest
     */
    destinationSystemId: string;
    /**
     * Path to file/folder in destination system
     * @type {string}
     * @memberof TransferTaskRequest
     */
    destinationPath: string;
}