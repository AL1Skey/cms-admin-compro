
async function imageUrlToFile(imageUrl: string, fileName: string): Promise<File> {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const image = new File([blob], fileName);
    console.log(image);
    return image;
}

export default imageUrlToFile;