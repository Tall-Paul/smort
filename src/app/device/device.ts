export interface Device {
    name: string;
    deviceClass: string;
    target: string;
    data: {
        value: string | undefined;
        Temperature: string | undefined;
        BatteryPercentage: string | undefined;
    }

  }