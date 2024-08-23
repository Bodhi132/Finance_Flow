import { Crypto,columns } from "./columns";
import { DataTable } from "./data-table";

type HomeProps = {
  coins: Crypto[];
}


async function getCryptoData(): Promise< Crypto[] > {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': 'coinrankingfaa380787230ec92fb33fde09af64321f19928b46d18395b',
    },
  };
  const res = await fetch(
    'https://api.coinranking.com/v2/coins',options
  )
  const data = await res.json()
  
  const coins:Crypto[] = data.data.coins.map((coin:any)=>({
    name: coin.name,
    symbol: coin.symbol,
    price: coin.price,
    marketCap: coin.marketCap,
    volume: coin['24hVolume'],
    website: coin.coinrankingUrl,
    image: coin.iconUrl,
  }))
  
  return coins;

}

export default async function Token() {
  const data = await getCryptoData()
 
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}