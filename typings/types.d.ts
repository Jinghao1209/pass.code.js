export declare type ASCII = number[];
export declare type MaybeKey<K> = {
    [key in keyof K]?: K[key];
};
