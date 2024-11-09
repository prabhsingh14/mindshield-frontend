import React from 'react';

const AboutPage = () => {
    return (
        <div className="text-white p-8 md:p-14 lg:p-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header Section */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
                    About <span className="text-blue-500">mindSHIELD</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-center mb-16 leading-relaxed max-w-3xl mx-auto text-gray-300">
                    mindSHIELD is engineered to elevate helmet safety by merging technology with intuitive design. With features like real-time tracking, 
                    collision detection, and user management, it provides a seamless, connected experience to ensure safety, convenience, and peace of mind.
                </p>

                {/* Vision Section */}
                <div className="bg-gray-800/80 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">Our Vision</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                        To create a safer riding experience for everyone by integrating smart technology with user-centered design, offering immediate 
                        assistance in emergencies and empowering riders with reliable protection.
                    </p>
                </div>

                {/* Feature Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Real-Time Tracking</h2>
                        <p className="text-md text-gray-700">
                            Stay connected with real-time location tracking, giving loved ones peace of mind while ensuring user safety with instant updates.
                        </p>
                    </div>

                    <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Collision Detection</h2>
                        <p className="text-md text-gray-700">
                            Equipped with sensors to detect impacts, instantly notifying emergency contacts and accelerating help when every second counts.
                        </p>
                    </div>

                    <div className="bg-white text-black p-8 rounded-2xl shadow-lg w-full md:w-1/3 text-center hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">User Management</h2>
                        <p className="text-md text-gray-700">
                            Simplified user management to control access, monitor usage, and manage contacts, all from one convenient platform.
                        </p>
                    </div>
                </div>

                {/* Innovation Section */}
                <div className="bg-gray-800/80 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">Innovation and Technology</h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                        mindSHIELD uses advanced IoT and sensor technologies for an intelligent, responsive experience. Regular updates and 
                        improvements ensure that users have the latest features to stay safe on every journey.
                    </p>
                </div>

                {/* Closing Section */}
                <div className="text-center pt-10">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
                        Join us in making every journey safer and more secure. <br /> With mindSHIELD, protect what matters.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;