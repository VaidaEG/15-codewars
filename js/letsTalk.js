function pasisveikinimas(pasnekovas) {
    /*
    - issiaiskinti, kokia kalba kalba mano pasnekovas
    - patikrinti, ar as moku tokia kalba
        - jei taip:
            - issitraukiu sarasa galimu pasisveikinimu ta kalba
            - atsitiktine tvarka issirenku pasisveikinimo fraze
            - grazinu pasisveikinima
        - jei ne:
            - grazinu default pasisveikinima 'Hi'
    */

    const pasnekovoKalba = pasnekovas.lang
    const manoMokamosKalbos = ['lt', 'en'];
    const pasisveikinimai = {
        lt: ['Labas', 'Labukas', 'Sveiki', 'Ka tu?'],
        en: ['Hi', 'Hello', 'Watsup', 'How are you?']
    }
    
    if (manoMokamosKalbos.includes(pasnekovoKalba)) {
        const galimosFrazes = pasisveikinimai[pasnekovoKalba];
        const frazesIndex = Math.floor(Math.random() * galimosFrazes.length);
        const fraze = galimosFrazes[frazesIndex];
        return fraze;
        
    } else {
        return 'Hi';
    }
}

const drauge = {
    name: 'Vaida',
    lang: 'lt'
}

const response = pasisveikinimas(drauge);

console.log(response);

/*
KAIP VEIKIA RANDOM PAIESKA ARRAY:

random: [0..1)
0*4....0.99999*4
0....3.9999999
0....3
*/