import { useWindowStore } from "#store/window.jsx";

export const WindowsControls = ({ target }) => {
    const { closeWindow } = useWindowStore();

    return (
        <div className="flex items-center gap-2">

            <button
                onClick={() => closeWindow(target)}

                type="button"
                className="size-3 rounded-full bg-[#ff5f56] hover:bg-[#e0443e] transition-colors cursor-pointer"
                aria-label="Close"
            />

            <button
                type="button"
                className="size-3 rounded-full bg-[#ffbd2e] hover:bg-[#dea527] transition-colors cursor-pointer"
                aria-label="Minimize"
            />

            <button
                type="button"
                className="size-3 rounded-full bg-[#27c93f] hover:bg-[#1aab29] transition-colors cursor-pointer"
                aria-label="Maximize"
            />
        </div>
    );
};