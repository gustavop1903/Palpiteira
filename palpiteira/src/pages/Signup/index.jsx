import { Icon, Input } from "~/components"

export const Signup = () => {
    return (
        <div className="">
            <header className="flex justify-center p-4 border-b border-red-300">
                <div className="max-w-xl flex justify-center flex">
                    <img src="./imgs/logo/logo-fundo-vermelho.svg" className="w-32 md:w-40" />
                </div>
            </header>

            <main className="container max-w-xl p-4">
                <div className="p-4 flex space-x-4 items-center">
                    <a href="/">
                        <Icon name='backLogin' className='h-6' />
                    </a>
                    <h2 className="text-xl font-bold">
                        Crie sua conta
                    </h2>
                </div>

                <form className="p-4 space-y-6">
                    <Input
                        type='text'
                        name='name'
                        label='Seu nome'
                        placehoder='Digite seu nome'
                    />
                    <Input
                        type='text'
                        name='username'
                        label='Seu nome de usuario'
                        placehoder='Digite um nome de usuario'
                    />
                    <Input
                        type='text'
                        name='email'
                        label='Seu e-mail'
                        placehoder='Digite seu e-mail'
                    />
                    <Input
                        type='password'
                        name='password'
                        label='Sua senha'
                        placehoder='Digite sua senha'
                    />
                    <button className="w-full text-white bg-red-500 px-6 py-3 rounded-xl">
                        Fazer login
                    </button>
                </form>
            </main>


        </div>
    )
}