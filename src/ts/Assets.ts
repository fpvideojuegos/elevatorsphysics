/**
 * Atlas files
 */
export class AtlasAssets {
    public static readonly main: Atlas = {
        key: {value: 'ElevatorRush'},
        imageFolder: 'assets/images/spritesheets/',
        jsonFile: 'assets/images/spritesheets/main.json'
    };

    public static toArray(): Array<Atlas> {
        return [AtlasAssets.main];
    };
}

export class MainImages {
    private static readonly mainAtlas: AtlasKey = {value: 'ElevatorRush'};

    // Characters
    public static readonly characterAlberto: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'characters/albe-char.png'}};
    public static readonly characterCristian: AtlasImage = {atlas: MainImages.mainAtlas, key: {value:'characters/cris-char.png'}};
    public static readonly characterDavid: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'characters/david-char.png'}};
    public static readonly characterFernando: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'characters/Fer-char.png'}};
    public static readonly characterFran: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'characters/fran-char.png'}};
    public static readonly characterJuanAntonio: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'characters/main-char_JA.png'}};

    // Dynamic
    public static readonly dynamicBothButtonsOn: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'dynamic/Buttons-both.png'}};
    public static readonly dynamicBothButtonsOff: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'dynamic/Buttons-main.png'}};
    public static readonly dynamicTopButtonOn: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'dynamic/Buttons-red.png'}};
    public static readonly dynamicBottomButtonOn: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'dynamic/Buttons-white.png'}};
    public static readonly dynamicElevatorBothLightsOn: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'dynamic/lights-on.png'}};
    public static readonly dynamicElevatorBothLightsOff: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'dynamic/lights-off.png'}};
    public static readonly dynamicElevatorUpLightOn: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'dynamic/lights-up.png'}};
    public static readonly dynamicElevatorDownLightOn: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'dynamic/lights-down.png'}};

    // Static
    public static readonly elevatorLeftDoor: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'static/door-left.png'}};
    public static readonly elevatorRightDoor: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'static/door-right.png'}};
    public static readonly elevatorInterior: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'static/elevator-inside.png'}};
    public static readonly elevatorFrames: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'static/frame.png'}};
    public static readonly wallDoors: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'static/wall-doors.png'}};
    public static readonly wallTiled: AtlasImage = {atlas: MainImages.mainAtlas, key: {value: 'static/wall-tiled.png'}};

    public static getCharactersArray(): Array<AtlasImage> {
        return [
            this.characterAlberto,
            this.characterCristian,
            this.characterDavid,
            this.characterFernando,
            this.characterFran,
            this.characterJuanAntonio
        ];
    }
}

export interface AtlasKey {
    value: string;
}

export interface VisualAssetKey {
    value: string;
}

export interface Atlas {
    key: AtlasKey;
    imageFolder: string;
    jsonFile: string;
}

export interface AtlasImage {
    atlas: AtlasKey;
    key: VisualAssetKey;
}
