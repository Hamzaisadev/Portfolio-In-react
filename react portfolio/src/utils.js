export const getUrlImage = (path) => {
    return new URL(`/assets/${path}`,import.meta.url).href
}