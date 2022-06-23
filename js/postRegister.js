function changeClass(){
    const menu = document.querySelector("#gameClass");
    const gameClass = menu.options[menu.selectedIndex].value;
    document.querySelector('#character').textContent = `Essé um ${gameClass} !`;
}