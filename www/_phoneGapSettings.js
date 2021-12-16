function _phoneGapSettings() { 
 return {
    "appId": "com.yourCompany.yourApp",
    "preferences": {
        "permissions": "none",
        "orientation": "default",
        "target-device": "universal",
        "fullscreen": "false",
        "webviewbounce": "true",
        "prerendered-icon": "true",
        "stay-in-webview": "false",
        "ios-statusbarstyle": "black-opaque",
        "detect-data-types": "true",
        "exit-on-suspend": "false",
        "auto-hide-splash-screen": "true",
        "disable-cursor": "false",
        "android-minSdkVersion": "26",
        "android-installLocation": "auto",
        "phonegap-version": "cli-9.0.0",
        "EnableViewportScale": "true",
        "MediaPlaybackRequiresUserAction": "true",
        "AllowInlineMediaPlayback": "false",
        "TopActivityIndicator": "gray",
        "BackupWebStorage": "none",
        "iosPersistentFileLocation": "Library",
        "KeyboardDisplayRequiresUserAction": "true",
        "SuppressesIncrementalRendering": "true",
        "android-maxSdkVersion": "",
        "android-targetSdkVersion": "",
        "KeepRunning": "true",
        "ErrorUrl": "error.html",
        "LoadingDialog": "Please wait, the app is loading.",
        "LoadingPageDialog": "Please wait, the data is loading.",
        "LoadUrlTimeoutValue": "20000",
        "AndroidPersistentFileLocation": "Internal",
        "android-build-tool": "gradle",
        "AutoHideSplashScreen": "true",
        "SplashScreenDelay": "3000",
        "FadeSplashScreen": "true",
        "FadeSplashScreenDuration": "500",
        "ShowSplashScreenSpinner": "true",
        "SplashMaintainAspectRatio": "true",
        "SplashShowOnlyFirstTime": "false",
        "SplashScreenSpinnerColor": "white",
        "pgb-builder-version": "2",
        "splash-screen-duration": "5000",
        "AndroidXEnabled": "false"
    },
    "plugins": {
        "cordova-plugin-device": "npm",
        "cordova-plugin-network-information": "npm",
        "cordova-plugin-splashscreen": "npm",
        "cordova-plugin-whitelist": "npm"
    }
};
}