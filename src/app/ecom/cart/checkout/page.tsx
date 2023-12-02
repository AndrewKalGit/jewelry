const page = () => {
    return (
        <div className="h-screen flex justify-center">
            <div className="bg-gray-50 drop-shadow-md rounded-md p-4 absolute bottom-2/3 items-center text-center">
                <h1 className="pb-4 text-gray-700 font-semibold text-xl">
                    Sucessfully Purchased
                </h1>
                <p className="pb-4 text-lg text-gray-800">
                    Thank you!
                </p>
                <button className="font-semibold text-gray-800 border-gray-700 border p-1 rounded-md hover:bg-gray-100">
                    <a href="/"> Continue Shopping </a>
                </button>
            </div>
        </div>
    )
}

export default page;