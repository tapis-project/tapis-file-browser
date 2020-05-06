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
 * @interface TransferTask
 */
export interface TransferTask {
    /**
     * @type {number}
     * @memberof TransferTask
     */
    id?: number;
    /**
     * @type {string}
     * @memberof TransferTask
     */
    tenantId?: string;
    /**
     * @type {string}
     * @memberof TransferTask
     */
    username?: string;
    /**
     * @type {string}
     * @memberof TransferTask
     */
    sourceSystemId?: string;
    /**
     * @type {string}
     * @memberof TransferTask
     */
    sourcePath?: string;
    /**
     * @type {string}
     * @memberof TransferTask
     */
    destinationSystemId?: string;
    /**
     * @type {string}
     * @memberof TransferTask
     */
    destinationPath?: string;
    /**
     * @type {number}
     * @memberof TransferTask
     */
    totalBytes?: number;
    /**
     * @type {number}
     * @memberof TransferTask
     */
    bytesTransferred?: number;
    /**
     * Unique ID of the task.
     * @type {string}
     * @memberof TransferTask
     */
    uuid?: string;
    /**
     * The status of the task, such as PENDING, IN_PROGRESS, COMPLETED, CANCELLED
     * @type {string}
     * @memberof TransferTask
     */
    status?: TransferTaskStatusEnum;
    /**
     * Timestamp in UTC of task creation.
     * @type {number}
     * @memberof TransferTask
     */
    created?: number;
}

/**
 * @export
 * @enum {string}
 */
export enum TransferTaskStatusEnum {
    ACCEPTED = 'ACCEPTED',
    INPROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED'
}

