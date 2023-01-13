import { Icon, Card, DateSelect } from "~/components"


export const Profile = () => (
    <>

        <header className="bg-red-500 text-white">
            <div className="container max-w-3xl flex justify-between p-4">
                <img src="./imgs/logo/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
            </div>
        </header>

        <main className="space-y-6">
            <section id="header" className="bg-red-500 text-white ">
                <div className="container max-w-3xl space-y-2 p-4">
                    <a href="/Dashboard">
                        <Icon name="backLogin" className="w-10"></Icon>
                    </a>
                    <h3 className="text-2xl font-bold"> Gustavo Pereira</h3>
                </div>
            </section>

            <section id="content" className="container justify-center max-w-3xl p-4 space-y-4">

                <h2 className="text-red-500 text-xl font-bold">Seus Palpites</h2>
                <div>
                    <DateSelect />
                </div>
                <div className=" space-y-4">
                    <Card
                        timeA={{ slug: 'sui' }}
                        timeB={{ slug: 'cam' }}
                        match={{ slug: '7:00' }}
                    />

                    <Card
                        timeA={{ slug: 'uru' }}
                        timeB={{ slug: 'cor' }}
                        match={{ slug: '7:00' }}
                    />

                    <Card
                        timeA={{ slug: 'por' }}
                        timeB={{ slug: 'gan' }}
                        match={{ slug: '7:00' }}

                    />
                </div>
            </section>

        </main>

    </>
)