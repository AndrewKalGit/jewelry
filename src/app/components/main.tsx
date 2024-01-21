const main = () => {
    return (
        <div className="banner drop-shadow-xl">
            <section
                className="relative bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/40 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="bg-gray-200/80 drop-shadow-xl p-5 rounded-md max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Header

                            <strong className="block font-extrabold text-gray-700">
                                Sub Header
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="/ecom"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
                            >
                                ecom. demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const getServerSideProps = async () => {
    return {
        props: {}
    }
}

export default main
