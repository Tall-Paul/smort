export interface Device {
    name: string;
    deviceClass: string;
    target: string;
    data: {
        value: string | undefined;
        Temperature: string | undefined;
        temperature: string | undefined;
        LocalTemperature: string | undefined;
        BatteryPercentage: string | undefined;
        brightness: string | undefined;
        Occupancy: string | undefined;
        LinkQuality: string | undefined;
        Dimmer: string | undefined;
    }

  }