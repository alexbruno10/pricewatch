import Logo from '../../../assets/Logo.svg'

export default function Header() {
    return(
        <>
            <header>
                <div className='flex bg-cover bg-header bg-no-repeat w-full h-72'>
                    <div className='m-auto justify-center'>
                        <img src={Logo} alt="" />
                        <span className='flex justify-center'>Cotação de moedas</span>
                    </div>
                </div>
            </header>
        </>
    )
};
