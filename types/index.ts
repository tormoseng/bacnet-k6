export type ObjectListType = {
  value: {
    arrayOfObjectIdentifier: {
      objectType: number;
      instance: number;
    }[]
  }
}

export type ObjectTypesType = {
  objectTypes: string[]
}

export type EnvType = {
  environments: {
    [environment: string]: {
      host: string;
    };
  };
};

export type PropertyType = {
  value: {
    real?: number;
    string?: string;
    enumerated?: 0 | 1;
  }
}