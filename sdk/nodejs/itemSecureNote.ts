// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Manages a Vault Secure Note item.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as bitwarden from "@maienm/pulumi-bitwarden";
 *
 * const exampleservice_configuration = new bitwarden.ItemSecureNote("exampleservice-configuration", {
 *     collectionIds: ["c74d6067-50b0-4427-bec8-483f3270fde3"],
 *     favorite: true,
 *     fields: [
 *         {
 *             name: "this-is-a-text-field",
 *             text: "text-value",
 *         },
 *         {
 *             boolean: true,
 *             name: "this-is-a-boolean-field",
 *         },
 *         {
 *             hidden: "text-value",
 *             name: "this-is-a-hidden-field",
 *         },
 *     ],
 *     folderId: "3b985a2f-0eed-461e-a5ac-adf5015b00c4",
 *     notes: `[global]
 * secret = "<sensitive>"
 *
 * `,
 *     organizationId: "54421e78-95cb-40c4-a257-17231a7b6207",
 * });
 * ```
 *
 * ## Import
 *
 * Find the identifier of the resource you want to import# $ bw list items --search "SSH Private Key" | jq
 *
 * '.[] .id' ? Master password[hidden] # > "a9e19f26-1b8c-4568-bc09-191e2cf56ed6" # Provide this identifier to Terraform
 *
 * ```sh
 *  $ pulumi import bitwarden:index/itemSecureNote:ItemSecureNote ssh-private-key a9e19f26-1b8c-4568-bc09-191e2cf56ed6
 * ```
 */
export class ItemSecureNote extends pulumi.CustomResource {
    /**
     * Get an existing ItemSecureNote resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ItemSecureNoteState, opts?: pulumi.CustomResourceOptions): ItemSecureNote {
        return new ItemSecureNote(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bitwarden:index/itemSecureNote:ItemSecureNote';

    /**
     * Returns true if the given object is an instance of ItemSecureNote.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ItemSecureNote {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ItemSecureNote.__pulumiType;
    }

    /**
     * List of item attachments.
     */
    public /*out*/ readonly attachments!: pulumi.Output<outputs.ItemSecureNoteAttachment[]>;
    /**
     * Identifier of the collections the item belongs to.
     */
    public readonly collectionIds!: pulumi.Output<string[] | undefined>;
    /**
     * Date the item was created.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * Date the item was deleted.
     */
    public /*out*/ readonly deletedDate!: pulumi.Output<string>;
    /**
     * Mark as a Favorite to have item appear at the top of your Vault in the UI.
     */
    public readonly favorite!: pulumi.Output<boolean | undefined>;
    /**
     * Extra fields.
     */
    public readonly fields!: pulumi.Output<outputs.ItemSecureNoteField[] | undefined>;
    /**
     * Identifier of the folder.
     */
    public readonly folderId!: pulumi.Output<string | undefined>;
    /**
     * Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notes.
     */
    public readonly notes!: pulumi.Output<string | undefined>;
    /**
     * INTERNAL USE
     */
    public /*out*/ readonly object!: pulumi.Output<string>;
    /**
     * Identifier of the organization.
     */
    public readonly organizationId!: pulumi.Output<string | undefined>;
    /**
     * Require master password “re-prompt” when displaying secret in the UI.
     */
    public readonly reprompt!: pulumi.Output<boolean | undefined>;
    /**
     * Last time the item was updated.
     */
    public /*out*/ readonly revisionDate!: pulumi.Output<string>;
    /**
     * INTERNAL USE
     */
    public /*out*/ readonly type!: pulumi.Output<number>;

    /**
     * Create a ItemSecureNote resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ItemSecureNoteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ItemSecureNoteArgs | ItemSecureNoteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ItemSecureNoteState | undefined;
            resourceInputs["attachments"] = state ? state.attachments : undefined;
            resourceInputs["collectionIds"] = state ? state.collectionIds : undefined;
            resourceInputs["creationDate"] = state ? state.creationDate : undefined;
            resourceInputs["deletedDate"] = state ? state.deletedDate : undefined;
            resourceInputs["favorite"] = state ? state.favorite : undefined;
            resourceInputs["fields"] = state ? state.fields : undefined;
            resourceInputs["folderId"] = state ? state.folderId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notes"] = state ? state.notes : undefined;
            resourceInputs["object"] = state ? state.object : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["reprompt"] = state ? state.reprompt : undefined;
            resourceInputs["revisionDate"] = state ? state.revisionDate : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ItemSecureNoteArgs | undefined;
            resourceInputs["collectionIds"] = args ? args.collectionIds : undefined;
            resourceInputs["favorite"] = args ? args.favorite : undefined;
            resourceInputs["fields"] = args?.fields ? pulumi.secret(args.fields) : undefined;
            resourceInputs["folderId"] = args ? args.folderId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notes"] = args?.notes ? pulumi.secret(args.notes) : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
            resourceInputs["reprompt"] = args ? args.reprompt : undefined;
            resourceInputs["attachments"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["deletedDate"] = undefined /*out*/;
            resourceInputs["object"] = undefined /*out*/;
            resourceInputs["revisionDate"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["fields", "notes"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ItemSecureNote.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ItemSecureNote resources.
 */
export interface ItemSecureNoteState {
    /**
     * List of item attachments.
     */
    attachments?: pulumi.Input<pulumi.Input<inputs.ItemSecureNoteAttachment>[]>;
    /**
     * Identifier of the collections the item belongs to.
     */
    collectionIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Date the item was created.
     */
    creationDate?: pulumi.Input<string>;
    /**
     * Date the item was deleted.
     */
    deletedDate?: pulumi.Input<string>;
    /**
     * Mark as a Favorite to have item appear at the top of your Vault in the UI.
     */
    favorite?: pulumi.Input<boolean>;
    /**
     * Extra fields.
     */
    fields?: pulumi.Input<pulumi.Input<inputs.ItemSecureNoteField>[]>;
    /**
     * Identifier of the folder.
     */
    folderId?: pulumi.Input<string>;
    /**
     * Name.
     */
    name?: pulumi.Input<string>;
    /**
     * Notes.
     */
    notes?: pulumi.Input<string>;
    /**
     * INTERNAL USE
     */
    object?: pulumi.Input<string>;
    /**
     * Identifier of the organization.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * Require master password “re-prompt” when displaying secret in the UI.
     */
    reprompt?: pulumi.Input<boolean>;
    /**
     * Last time the item was updated.
     */
    revisionDate?: pulumi.Input<string>;
    /**
     * INTERNAL USE
     */
    type?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ItemSecureNote resource.
 */
export interface ItemSecureNoteArgs {
    /**
     * Identifier of the collections the item belongs to.
     */
    collectionIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Mark as a Favorite to have item appear at the top of your Vault in the UI.
     */
    favorite?: pulumi.Input<boolean>;
    /**
     * Extra fields.
     */
    fields?: pulumi.Input<pulumi.Input<inputs.ItemSecureNoteField>[]>;
    /**
     * Identifier of the folder.
     */
    folderId?: pulumi.Input<string>;
    /**
     * Name.
     */
    name?: pulumi.Input<string>;
    /**
     * Notes.
     */
    notes?: pulumi.Input<string>;
    /**
     * Identifier of the organization.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * Require master password “re-prompt” when displaying secret in the UI.
     */
    reprompt?: pulumi.Input<boolean>;
}
