import { useCallback, useEffect, useState } from "react";
import Dollar from "../../../../assets/USD.svg";
import { api } from "../../../../lib/axios";
import { formatMoney } from "../../../../utils/formatedMoney";
import { TrendUp, TrendDown } from "phosphor-react"

interface ICoin {
  bid: string;
  code: string;
  name: string;
  varBid: string;
}

export default function CoinList() {
  const [coin, setCoin] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);

  const date = new Date().toLocaleTimeString('pt-BR');

  async function getPosts() {
    try {
      setLoading(true);
      const response = await api.get(
        `/USD-BRL,EUR-BRL,BTC-BRL,ARS-BRL,AUD-BRL,CAD-BRL,GBP-BRL`
      );

      const usd = response.data.USDBRL;
      const eur = response.data.EURBRL;
      const btc = response.data.BTCBRL;
      const ars = response.data.ARSBRL;
      const aud = response.data.AUDBRL;
      const cad = response.data.CADBRL;
      const gbp = response.data.GBPBRL;

      const coins = [usd, eur, btc, ars, aud, cad, gbp];

      console.log(response.data);

      setCoin(coins);
    } finally {
      console.log(coin);
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
    console.log(coin);
  }, []);

  return (
    <>
      <div className="container pt-8 pb-8 mx-auto">
        <div className="flex sm:justify-center md:justify-center lg:justify-end xl:justify-end mt-5 gap-4 text-center items-center">
          <span className="atualization" />
          <span className="sm:text-xs md:text-base">
            Última atualização às {date}
          </span>
        </div>
        <div className="flex pt-10 gap-2 items-center text-gray-dark">
          <p>Cotações</p>
          <hr />
        </div>

        <div className="mx-auto grid sm:gap-2 md:gap-4 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 pt-10">
          {coin.map((item) => (
            <div key={item.code} className="bg-gray flex items-center pl-8 w-full sm:h-28 md:h-32 border-none rounded-lg">
              <div className="flex items-center gap-4">
                <img src={`src/assets/${item.code}.svg`} className="sm:w-16 sm:h-16 md:w-20 md:h-20" />
                <div className="grid">
                  <strong className="md:text-base sm:text-sm lg:text-lg xl:text-xl">
                    {item.name}
                  </strong>

                  <div className="flex gap-4">
                    
                  <span className="md:text-base sm:text-sm lg:text-lg xl:text-xl">
                    R$ {formatMoney(item.bid)}
                  </span>

                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
