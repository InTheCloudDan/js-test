import { AxiosResponse } from 'axios'
import * as ld from 'ld-test'


class LDFeatureFlag {
    projectKey: string
    flagKey: string
    api: ld.FeatureFlagsApi
    constructor(projectKey: string, flagKey: string, token: string){
        this.projectKey = projectKey
        this.flagKey = flagKey
        this.api = this.newClient(token)
    }

    newClient(token: string, apiHost: string = "https://app.launchdarkly.com"): ld.FeatureFlagsApi {
        const APIVersion = "20191212"
        //const basePath = `${apiHost}/api/v2/flags`
        const configParams: ld.ConfigurationParameters = {
            apiKey: token,
            basePath: apiHost
        }
        //const cfg = new ld.Configuration(configParams)

        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //Token.apiKeyPrefix = 'Token';

        var apiInstance = new ld.FeatureFlagsApi(newld.Configuration(configParams));

        var callback = function(error: any, data: string, response: any) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data);
        }
        };
        return apiInstance
    }

    setTags(tags: Array<string>): Promise<AxiosResponse<ld.FeatureFlag>> {
        const patch: ld.PatchOperation = {
            op: "replace",
            path: "/tags",
            value: tags
        }
        const comment = {
            comment: "test",
            patch: [patch]
        }

        const apiCall = this.api.patchFeatureFlag(this.projectKey, this.flagKey, comment)
        console.log(apiCall)
        return apiCall
    }
}


const testCall = new LDFeatureFlag("demo-dan-110620-1", "chatbox", "CHANGE_ME")

testCall.setTags(["blue", "orange", "yellow"]).then(flag => {
    console.log(flag)
}).catch((error) => {
    console.log(error)
})
