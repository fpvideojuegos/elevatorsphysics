import ImageFrameConfig = Phaser.Types.Loader.FileTypes.ImageFrameConfig;

const IMAGE_LOCATION = 'assets/images';
const SPRITE_LOCATION = 'assets/sprites';

/**
 * General images, not counting sprites.
 */
export class Images {
    // Logos
    public static readonly logo: ImageAsset = {key: 'logo', location: `${IMAGE_LOCATION}/logo/main-logo.png`};
    public static readonly animatedLogo: ImageAsset = {key: 'animatedLogo', location: `${IMAGE_LOCATION}/logo/main-animado.gif`};

    // Backgrounds
    public static readonly testBackground: ImageAsset = {key: 'testBackground', location: `${IMAGE_LOCATION}/background.png`};
    public static readonly mainBackground: ImageAsset = {key: 'mainBackground', location: `${IMAGE_LOCATION}/frame.png`};
    // Elevator
    public static readonly elevatorMainBody: ImageAsset = {key: 'elevatorMainBody', location: `${IMAGE_LOCATION}/elevator/main-body.png`};
    public static readonly elevatorFrame: ImageAsset = {key: 'elevatorFrame', location: `${IMAGE_LOCATION}/elevator/fronta-frame.png`};
    public static readonly elevatorLeftDoor: ImageAsset = {key: 'elevatorLeftDoor', location: `${IMAGE_LOCATION}/elevator/left-door.png`};
    public static readonly elevatorRightDoor: ImageAsset = {key: 'elevatorRightDoor', location: `${IMAGE_LOCATION}/elevator/right-door.png`};
    // Elevator lights
    public static readonly lightsOn: ImageAsset = {key: 'lightsOn', location: `${IMAGE_LOCATION}/lights/lights-on.png`};
    public static readonly lightsOff: ImageAsset = {key: 'lightsOff', location: `${IMAGE_LOCATION}/lights/lights-off.png`};
    public static readonly lightsUp: ImageAsset = {key: 'lightsUp', location: `${IMAGE_LOCATION}/lights/lights-up.png`};
    public static readonly lightsDown: ImageAsset = {key: 'lightsDown', location: `${IMAGE_LOCATION}/lights/lights-down.png`};


    public static toArray(): Array<ImageAsset> {
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
            this.lightsDown,
        ];
    }
}

/**
 * Sprites. They can have animations.
 */
export class SpriteSheets {
    // Persons
    public static readonly personFran: SpriteSheetAsset = {
        key: 'fran',
        location: `${SPRITE_LOCATION}/fran-char.png`,
        spriteConfig: {
            frameHeight: 256,
            frameWidth: 128
        }
    };
    public static readonly personAlberto: SpriteSheetAsset = {
        key: 'alberto',
        location: `${SPRITE_LOCATION}/albe-char.png`,
        spriteConfig: {
            frameHeight: 256,
            frameWidth: 128
        }
    };
    public static readonly personDavid: SpriteSheetAsset = {
        key: 'david',
        location: `${SPRITE_LOCATION}/david-char.png`,
        spriteConfig: {
            frameHeight: 256,
            frameWidth: 128
        }
    };
    public static readonly personCristian: SpriteSheetAsset = {
        key: 'cristian',
        location: `${SPRITE_LOCATION}/cris-char.png`,
        spriteConfig: {
            frameHeight: 256,
            frameWidth: 128
        }
    };


    public static personsArray(): Array<SpriteSheetAsset> {
        return [
            this.personFran,
            this.personAlberto,
            this.personCristian,
            this.personDavid
        ];
    }

    public static toArray(): Array<SpriteSheetAsset> {
        const array = this.personsArray();
        return array;
    }
}

export interface ImageAsset {
    key: string,
    location: string
}

export interface SpriteSheetAsset extends ImageAsset {
    spriteConfig: ImageFrameConfig
}
