// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * (EXPERIMENTAL) Use this data source to get the content of an existing item's attachment.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as bitwarden from "@pulumi/bitwarden";
 *
 * const sshPrivateKey = bitwarden.getAttachment({
 *     id: "4d6a41364d6a4dea8ddb1a",
 *     itemId: "59575167-4d36-5a58-466e-d9021926df8a",
 * });
 * ```
 */
export function getAttachment(args: GetAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAttachmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("bitwarden:index/getAttachment:getAttachment", {
        "id": args.id,
        "itemId": args.itemId,
    }, opts);
}

/**
 * A collection of arguments for invoking getAttachment.
 */
export interface GetAttachmentArgs {
    /**
     * Identifier.
     */
    id: string;
    /**
     * Identifier of the item the attachment belongs to
     */
    itemId: string;
}

/**
 * A collection of values returned by getAttachment.
 */
export interface GetAttachmentResult {
    /**
     * Content of the attachment
     */
    readonly content: string;
    /**
     * Identifier.
     */
    readonly id: string;
    /**
     * Identifier of the item the attachment belongs to
     */
    readonly itemId: string;
}
/**
 * (EXPERIMENTAL) Use this data source to get the content of an existing item's attachment.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as bitwarden from "@pulumi/bitwarden";
 *
 * const sshPrivateKey = bitwarden.getAttachment({
 *     id: "4d6a41364d6a4dea8ddb1a",
 *     itemId: "59575167-4d36-5a58-466e-d9021926df8a",
 * });
 * ```
 */
export function getAttachmentOutput(args: GetAttachmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAttachmentResult> {
    return pulumi.output(args).apply((a: any) => getAttachment(a, opts))
}

/**
 * A collection of arguments for invoking getAttachment.
 */
export interface GetAttachmentOutputArgs {
    /**
     * Identifier.
     */
    id: pulumi.Input<string>;
    /**
     * Identifier of the item the attachment belongs to
     */
    itemId: pulumi.Input<string>;
}
