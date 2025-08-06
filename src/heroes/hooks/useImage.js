/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useImage = (url) => {
    const [src, setSrc] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!url) {
            setSrc(null);
            return;
        }

        const fetchImage = async () => {
            setIsLoading(true);
            setHasError(false);

            try {
                const response = await fetch(url); // Cambia la ruta según tu API

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const blob = await response.blob();

                // Validar que sea imagen
                if (!blob.type.startsWith("image/")) {
                    throw new Error("File is not an image");
                }

                const objectUrl = URL.createObjectURL(blob);
                setSrc(objectUrl);
            } catch (error) {
                console.error("Error loading image:", error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImage();

        // Cleanup: liberar memoria
        return () => {
            if (src) {
                URL.revokeObjectURL(src);
            }
        };
    }, [url]);

    return {
        src,
        isLoading,
        hasError,
    };
};