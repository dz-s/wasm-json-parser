export interface JValue {
    JString: string;
    JNumber: f32;
    JBool: bool;
    JNull: null;
    JObject: Map<string, JValue>;
    JArray: Array<JValue>;
}

export type JNull = null;
export type JBool = bool;