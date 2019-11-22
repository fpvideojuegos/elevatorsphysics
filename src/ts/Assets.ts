const IMAGE_LOCATION = 'assets/images';

export class Images {
    // Logos
    public static readonly logo: Asset = {key: 'logo', location: `${IMAGE_LOCATION}/logo/main-logo.png`};
    public static readonly animatedLogo: Asset = {key: 'animatedLogo', location: `${IMAGE_LOCATION}/logo/main-animado.gif`};

    // Backgrounds
    public static readonly testBackground: Asset = {key: 'testBackground', location: `${IMAGE_LOCATION}/background.png`};
    public static readonly mainBackground: Asset = {key: 'mainBackground', location: `${IMAGE_LOCATION}/frame.png`};
    // Elevator
    public static readonly elevatorMainBody: Asset = {key: 'elevatorMainBody', location: `${IMAGE_LOCATION}/elevator/main-body.png`};
    public static readonly elevatorFrame: Asset = {key: 'elevatorFrame', location: `${IMAGE_LOCATION}/elevator/fronta-frame.png`};
    public static readonly elevatorLeftDoor: Asset = {key: 'elevatorLeftDoor', location: `${IMAGE_LOCATION}/elevator/left-door.png`};
    public static readonly elevatorRightDoor: Asset = {key: 'elevatorRightDoor', location: `${IMAGE_LOCATION}/elevator/right-door.png`};
    // Elevator lights
    public static readonly lightsOn: Asset = {key: 'lightsOn', location: `${IMAGE_LOCATION}/lights/lights-on.png`};
    public static readonly lightsOff: Asset = {key: 'lightsOff', location: `${IMAGE_LOCATION}/lights/lights-off.png`};
    public static readonly lightsUp: Asset = {key: 'lightsUp', location: `${IMAGE_LOCATION}/lights/lights-up.png`};
    public static readonly lightsDown: Asset = {key: 'lightsDown', location: `${IMAGE_LOCATION}/lights/lights-down.png`};


    public static toArray(): Array<Asset> {
        return [
            this.logo,
            this.animatedLogo,
            this.testBackground,
            this.mainBackground,
            this.elevatorMainBody,
            this.elevatorFrame,
            this.elevatorLeftDoor,
            this.elevatorRightDoor,
            this.lightsOn,
            this.lightsOff,
            this.lightsUp,
            this.lightsDown
        ];
    }
}

export interface Asset {
    key: string,
    location: string
}
