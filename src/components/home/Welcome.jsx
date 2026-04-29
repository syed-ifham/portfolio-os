import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const FONT_WEIGHTS = {
    subtitle: { min: 300, max: 700, default: 300 },
    title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={`inline-block ${className}`}
            style={{ fontWeight: baseWeight }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const Welcome = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        if (!container) return;

        const subtitleLetters = container.querySelectorAll("p span");
        const titleLetters = container.querySelectorAll("h1 span");

        const handleMouseMove = (e) => {
            const mouseX = e.clientX;

            subtitleLetters.forEach((letter) => {
                const rect = letter.getBoundingClientRect();
                const letterCenterX = rect.left + rect.width / 2;
                const distance = Math.abs(mouseX - letterCenterX);

                const intensity = Math.exp(-(distance ** 2.5) / 20_000);
                const targetWeight = FONT_WEIGHTS.subtitle.min + (FONT_WEIGHTS.subtitle.max - FONT_WEIGHTS.subtitle.min) * intensity;

                gsap.to(letter, {
                    duration: 0.05,
                    ease: "none",
                    fontWeight: Math.round(targetWeight),
                    overwrite: "auto",
                });
            });

            titleLetters.forEach((letter) => {
                const rect = letter.getBoundingClientRect();
                const letterCenterX = rect.left + rect.width / 2;
                const distance = Math.abs(mouseX - letterCenterX);

                const intensity = Math.exp(-(distance ** 2) / 20000);
                const targetWeight = FONT_WEIGHTS.title.min + (FONT_WEIGHTS.title.max - FONT_WEIGHTS.title.min) * intensity;

                gsap.to(letter, {
                    duration: 0.05,
                    ease: "none",
                    fontWeight: Math.round(targetWeight),
                    overwrite: "auto",
                });
            });
        };

        const handleMouseLeave = () => {
            gsap.to(subtitleLetters, {
                duration: 0.3,
                ease: "power2.out",
                fontWeight: FONT_WEIGHTS.subtitle.default,
                overwrite: "auto",
            });

            gsap.to(titleLetters, {
                duration: 0.4,
                ease: "power2.out",
                fontWeight: FONT_WEIGHTS.title.default,
                overwrite: "auto",
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className="fixed top-1/2 left-1/2 transform pointer-events-none -translate-x-1/2 -translate-y-1/2 text-center select-none z-0">

            <div
                ref={containerRef}
                className="flex flex-col items-center pointer-events-auto py-12 px-10">
                <p
                    className="text-blac mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    {renderText("hey, I'm Ifham welcome to my", "text-3xl tracking-tight", FONT_WEIGHTS.subtitle.default)}
                </p>

                <h1
                    className="text-black mt-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {renderText("portfolio.", "text-8xl leading-none italic tracking-tight", FONT_WEIGHTS.title.default)}
                </h1>
            </div>
        </section>
    );
}

export default Welcome;