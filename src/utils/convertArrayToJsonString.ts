interface KeyValue {
    key: string;
    value: any;
  }
  
  export function convertArrayToJsonString(array: KeyValue[]): string {
    const jsonObject: { [key: string]: any } = {};
    array.forEach(item => {
      jsonObject[item.key] = item.value;
    });
    return JSON.stringify(jsonObject);
  }
  