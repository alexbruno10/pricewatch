import Dollar from '../../../assets/Dollar.svg'

export default function CoinList() {
  return (
    <>
      <div className="px-128 pt-8 pb-8">
        <div className="flex justify-end mt-5 gap-4 text-center">
          <span className="atualization" />
          <span>Última atualização as 21:00h</span>
        </div>
        <div className="flex pt-10 gap-5 items-center">
          <p>Cotações</p>
          <hr />
        </div>
        <div className="grid gap-14 grid-cols-2 pt-10">

          <div className="bg-gray flex items-center pl-8 w-full h-32 border-none rounded-lg">
          <div className="flex items-center gap-4">
            <img src={Dollar} />
            <div className='grid'>
                <strong className='text-2xl'>Dólar Comercial</strong>
                <span className='text-2xl'>R$ 5,20</span>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
