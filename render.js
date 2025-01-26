export const renderImage=(body,img)=>{
    
    
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.alt = 'Anime Image';
    body.appendChild(imgElement);
}
export const renderButton=(button)=>{
    button.addEventListener('click',()=>{ location.reload();})
}