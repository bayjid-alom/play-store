const loading = () => {
    return (
        <div>

            <div className='min-h-screen items-center flex justify-center mx-auto'>
                {/* Somehow not working Hashloader */}
                {/* <HashLoader color='#632EE3' size={35}></HashLoader> */}
                <span className="loading loading-dots loading-xl"></span>
            </div>

        </div>
    );
};

export default loading;