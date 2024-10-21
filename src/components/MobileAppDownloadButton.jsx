import { isMobile } from "react-device-detect"

export const MobileAppDownloadButton = () => {
    const downloadURL = "https://apps.apple.com/app/apple-store/id6446048195"
    return (
        isMobile && (
            <a
            className="flex gap-2 items-center font-satoshi p-4 text-lg bg-black text-white rounded-xl"
            target='_blank'
            rel='noopener noreferrer'
            href={downloadURL}>
                <p className="font-satoshi font-bold">Download on the App Store!</p>
            </a>
        )
    )
}