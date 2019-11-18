export const Images: AssetCollection = {
    testBackground: {
        key: 'testBackground',
        location: 'assets/images/background.png'
    }, mainBackground: {
        key: 'mainBackground',
        location: 'A'
    }
};

interface AssetCollection {
    [key: string]: Asset
}

interface Asset {
    key: string,
    location: string
}
