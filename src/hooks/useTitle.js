import { useEffect } from "react";
export const useTitle = (title) => {
    //useTitle("Cart");

    useEffect(() => {
        document.title = `${title} | Shopping Cart`
    }, [title]);

    return null;
}
