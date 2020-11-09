declare module 'launchdarkly-api'

export class FeatureFlag {
    'key'?: string;
    /**
    * Name of the feature flag.
    */
    'name'?: string;
    /**
    * Description of the feature flag.
    */
    'description'?: string;
    /**
    * Whether the feature flag is a boolean flag or multivariate.
    */
    'kind'?: string;
    /**
    * A unix epoch time in milliseconds specifying the creation time of this flag.
    */
    'creationDate'?: number;
    'includeInSnippet'?: boolean;
    /**
    * Whether or not this flag is temporary.
    */
    'temporary'?: boolean;
    /**
    * The ID of the member that should maintain this flag.
    */
    'maintainerId'?: string;
    /**
    * An array of tags for this feature flag.
    */
    'tags'?: Array<string>;
    /**
    * The variations for this feature flag.
    */
    'variations'?: Array<Variation>;
    /**
    * An array goals from all environments associated with this feature flag
    */
    'goalIds'?: Array<string>;
    'version'?: number;
    /**
    * A mapping of keys to CustomProperty entries.
    */
    'customProperties'?: { [key: string]: CustomProperty; };
    'links'?: Links;
    'maintainer'?: Member;
    'environments'?: { [key: string]: FeatureFlagConfig; };
    /**
    * A unix epoch time in milliseconds specifying the archived time of this flag.
    */
    'archivedDate'?: number;
    /**
    * Whether or not this flag is archived.
    */
    'archived'?: boolean;
    'clientSideAvailability'?: ClientSideAvailability;
    'defaults'?: Defaults;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "number"
        },
        {
            "name": "includeInSnippet",
            "baseName": "includeInSnippet",
            "type": "boolean"
        },
        {
            "name": "temporary",
            "baseName": "temporary",
            "type": "boolean"
        },
        {
            "name": "maintainerId",
            "baseName": "maintainerId",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "variations",
            "baseName": "variations",
            "type": "Array<Variation>"
        },
        {
            "name": "goalIds",
            "baseName": "goalIds",
            "type": "Array<string>"
        },
        {
            "name": "version",
            "baseName": "_version",
            "type": "number"
        },
        {
            "name": "customProperties",
            "baseName": "customProperties",
            "type": "{ [key: string]: CustomProperty; }"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "Links"
        },
        {
            "name": "maintainer",
            "baseName": "_maintainer",
            "type": "Member"
        },
        {
            "name": "environments",
            "baseName": "environments",
            "type": "{ [key: string]: FeatureFlagConfig; }"
        },
        {
            "name": "archivedDate",
            "baseName": "archivedDate",
            "type": "number"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "clientSideAvailability",
            "baseName": "clientSideAvailability",
            "type": "ClientSideAvailability"
        },
        {
            "name": "defaults",
            "baseName": "defaults",
            "type": "Defaults"
        }    ];

    static getAttributeTypeMap() {
        return FeatureFlag.attributeTypeMap;
    }
}

export class FeatureFlagBody {
    /**
    * A human-friendly name for the feature flag. Remember to note if this flag is intended to be temporary or permanent.
    */
    'name': string;
    /**
    * A unique key that will be used to reference the flag in your code.
    */
    'key': string;
    /**
    * A description of the feature flag.
    */
    'description'?: string;
    /**
    * An array of possible variations for the flag.
    */
    'variations': Array<Variation>;
    /**
    * Whether or not the flag is a temporary flag.
    */
    'temporary'?: boolean;
    /**
    * Tags for the feature flag.
    */
    'tags'?: Array<string>;
    /**
    * Whether or not this flag should be made available to the client-side JavaScript SDK.
    */
    'includeInSnippet'?: boolean;
    'clientSideAvailability'?: ClientSideAvailability;
    'defaults'?: Defaults;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "variations",
            "baseName": "variations",
            "type": "Array<Variation>"
        },
        {
            "name": "temporary",
            "baseName": "temporary",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "includeInSnippet",
            "baseName": "includeInSnippet",
            "type": "boolean"
        },
        {
            "name": "clientSideAvailability",
            "baseName": "clientSideAvailability",
            "type": "ClientSideAvailability"
        },
        {
            "name": "defaults",
            "baseName": "defaults",
            "type": "Defaults"
        }    ];

    static getAttributeTypeMap() {
        return FeatureFlagBody.attributeTypeMap;
    }
}

export class FeatureFlagConfig {
    'on'?: boolean;
    'archived'?: boolean;
    'salt'?: string;
    'sel'?: string;
    'lastModified'?: number;
    'version'?: number;
    'targets'?: Array<Target>;
    'rules'?: Array<Rule>;
    'fallthrough'?: Fallthrough;
    'offVariation'?: number;
    'prerequisites'?: Array<Prerequisite>;
    /**
    * Set to true to send detailed event information for this flag.
    */
    'trackEvents'?: boolean;
    /**
    * Set to true to send detailed event information when targeting is enabled but no individual targeting rule is matched.
    */
    'trackEventsFallthrough'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "on",
            "baseName": "on",
            "type": "boolean"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "salt",
            "baseName": "salt",
            "type": "string"
        },
        {
            "name": "sel",
            "baseName": "sel",
            "type": "string"
        },
        {
            "name": "lastModified",
            "baseName": "lastModified",
            "type": "number"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "targets",
            "baseName": "targets",
            "type": "Array<Target>"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<Rule>"
        },
        {
            "name": "fallthrough",
            "baseName": "fallthrough",
            "type": "Fallthrough"
        },
        {
            "name": "offVariation",
            "baseName": "offVariation",
            "type": "number"
        },
        {
            "name": "prerequisites",
            "baseName": "prerequisites",
            "type": "Array<Prerequisite>"
        },
        {
            "name": "trackEvents",
            "baseName": "trackEvents",
            "type": "boolean"
        },
        {
            "name": "trackEventsFallthrough",
            "baseName": "trackEventsFallthrough",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return FeatureFlagConfig.attributeTypeMap;
    }
}
