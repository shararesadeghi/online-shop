const shorten = (title) =>{
    const splitedTitle = title.split(" ");
    const newtTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newtTitle;
}
export {shorten};