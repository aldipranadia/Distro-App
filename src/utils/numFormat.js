//Buat bikin harga jadi ada titiknya 14000 -> 14.000
//fungsi untuk memformat number

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}