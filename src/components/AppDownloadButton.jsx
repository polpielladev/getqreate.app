import { QRCode } from 'react-qrcode-logo';

export const AppDownloadButton = () => {
    const downloadURL = "https://apps.apple.com/app/apple-store/id6446048195"
    return (
        <>
            <a
                data-popover-target="popover-default"
                className="flex gap-2 items-center font-satoshi px-4 py-2 bg-black text-white rounded-xl"
                target='_blank'
                rel='noopener noreferrer'
                href={downloadURL}
            >
                <p className="font-satoshi font-bold">Get the app!</p>
            </a>
            <div data-popover id="popover-default" role="tooltip" className="absolute z-10 invisible inline-block transition-opacity">
                <div className="shadow-lg bg-white">
                    <QRCode value={downloadURL} />
                </div>
            </div>
        </>

    )
}