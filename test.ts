let nama : string ="reki"
let umur : number =27
let kondisi :boolean=false

let hari :string[]=['senin','selasa','rabu','kamis','juma\'at','sabtu','minggu']
let tanggal :Array<number>=[1,2,3,4,5,6,7]
// tuple Array
let product:[string,number,boolean]=['windows',11,true]

// let productError:[string,number]=['windows',11,"nama"]


function panggilNama(umur:number, nama : string,kondisi:boolean) {
   if(kondisi==true){
      return `hai nama kamu ${nama} dan umur ${umur} ?`;
   }else{
      return umur&&nama? `hai nama kamu ${nama} dan umur ${umur} ?`:'aguments salah'
   }
}

if (kondisi) {
   console.log( panggilNama(umur,nama,true) );
}else{
   console.log( panggilNama(27,"acong",false) );
}