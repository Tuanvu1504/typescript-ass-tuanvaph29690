
import Header from "../components/Header";

const ProfilePage = () => {
    return (
        <>
            <Header />
            <div className="max-w-md m-auto">
                <a
                    href="#"
                    className="group relative block bg-black h-max place-content-center"
                >
                    <img
                        alt="Developer"
                        src="../bg.png"
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                            Student
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Vu ANh Tuan
                        </p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-6 group-hover:opacity-100">
                                <div className="text-white">
                                    <h5>Age: 22</h5>
                                    <h5>Hometown: Thuong Tin - Ha Noi</h5>
                                    <h5>
                                        Career orientation: Fullstack Developer
                                    </h5>
                                    <h5>Language: C, C#, JS, PHP, reactjs, nodejs</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
};

export default ProfilePage;

