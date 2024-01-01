
const fruits = [
  {
    id: 1,
    name: "Orange",
    image: "jeruk.png",
    price: 15000,
    color: "Orange",
  },

  {
    id: 2,
    name: "Grape",
    image: "anggur.png",
    price: 35000,
    color: "Purple",
  },
  {
    id: 3,
    name: "Cherry",
    image: "ceri.png",
    price: 50000,
    color: "Red",
  },
  {
    id: 4,
    name: "Durian",
    image: "durian.png",
    price: 25000,
    color: "Green",
  },
  {
    id: 5,
    name: "Apple",
    image: "Apel.png",
    price: 25000,
    color: "Red",
  },
  {
    id: 6,
    name: "Lychee",
    image: "leci.png",
    price: 50000,
    color: "Pink",
  },
  {
    id: 7,
    name: "Longan",
    image: "lengkeng.png",
    price: 17000,
    color: "Brown",
  },
  {
    id: 8,
    name: "Banana",
    image: "pisang.png",
    price: 19000,
    color: "yellow",
  },
];
  const names = "Lira 💕";
  // const names = null;

function Header(){
  return names ? <h3>Haii {names}</h3> : <h3>Tanpa Nama</h3>
}

function App() {
  const getImage = (imageName) => {
    return `./images/${imageName}`;
  };

  const detail=(details)=>{
    alert(
      `fruit name  : ${details.name}\nfruit prices  : Rp. ${details.price}\nfruit color   : ${details.color}`
    );
  }


  return (
    <>
      <div className="header1">
        <h2>🍒🍓Daftar Buah</h2>
        <Header></Header>
      </div>

      <div className="boox">

        {fruits.map((buah) => (
          <div className="conten" key={buah.id}>

            <img className="gambar" 
            src={getImage(buah.image)}
            alt={buah.name}/>

            <h4>{buah.name}</h4>
            <button onClick={() => detail(buah)}>
            <b>Lihat Selengkapnya</b>
            </button>
          </div>
          
        ))}

      </div>
    </>
  );
}

export default App;
