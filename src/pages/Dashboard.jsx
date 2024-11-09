import React, { useState } from 'react';
import helmet from '../assets/new-helmet.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [contacts, setContacts] = useState([]);
    const [liveLocationEnabled, setLiveLocationEnabled] = useState(false);
    const [newContact, setNewContact] = useState({ name: '', phone: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [upgradeInfo, setUpgradeInfo] = useState({ model: '', features: '' });

    const handleAddContact = () => {
        if (newContact.name && newContact.phone) {
            const isDuplicate = contacts.some(contact =>
                (contact.name === newContact.name && contact.phone === newContact.phone)
            );

            if (isDuplicate) {
                toast.error("This contact (name and phone number) already exists.");
                return;
            }

            setContacts([...contacts, newContact]);
            setNewContact({ name: '', phone: '' });
            toast.success("Contact added successfully!");
        } else {
            toast.error("Please fill in both fields.");
        }
    };

    const handleDeleteContact = (contactToDelete) => {
        setContacts(contacts.filter(contact => contact !== contactToDelete));
        toast.success("Contact deleted successfully!");
    };

    const toggleLiveLocation = () => {
        if (liveLocationEnabled) {
            setLiveLocationEnabled(false);
            toast.warning("Live location is required in case of accidents, please enable it.");
        } else {
            setLiveLocationEnabled(true);
        }
    };

    const handleUpgradeClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setUpgradeInfo({ model: '', features: '' }); // Reset fields when closing the modal
    };

    const handleUpgradeSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle the upgrade logic (e.g., API call)
        toast.success("Upgrade information submitted successfully!");
        handleModalClose();
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-4">
                <h2 className="text-lg font-semibold text-white">Emergency Contacts</h2>
                <br />
                <input
                    type="text"
                    placeholder="Name"
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    className="border rounded p-2 mb-2 w-full"
                />
                <br />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={newContact.phone}
                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    className="border rounded p-2 mb-2 w-full"
                />
                <br />
                <button onClick={handleAddContact} className="text-black rounded p-2 mb-4 bg-yellow-400">
                    Add Contact
                </button>

                <h3 className="text-md font-semibold mb-2 text-white">Existing Contacts</h3>
                <ul>
                    {contacts.length === 0 ? (
                        <li className="text-gray-500">No contacts added yet.</li>
                    ) : (
                        contacts.map((contact, index) => (
                            <li key={index} className="flex justify-between items-center mb-2 text-white">
                                <span>{contact.name} - {contact.phone}</span>
                                <button onClick={() => handleDeleteContact(contact)} className="text-red-500">Delete</button>
                            </li>
                        ))
                    )}
                </ul>
            </div>

            <div className="w-full md:w-1/3 p-4 text-white">
                <h2 className="text-lg font-semibold mb-6">Live Location</h2>
                <button onClick={toggleLiveLocation} className={`bg-${liveLocationEnabled ? 'red' : 'green'}-500 text-white rounded p-2 mb-4`}>
                    {liveLocationEnabled ? 'Disable Live Location' : 'Enable Live Location'}
                </button>

                {liveLocationEnabled && (
                    <div className="flex flex-col items-center">
                        <div id="map" className="h-64 w-full bg-gray-300 mb-4">
                            <p className="text-center text-black">Your live location will be displayed here.</p>
                        </div>
                        <p>Live location is currently enabled. Please ensure to keep it on for safety during rides.</p>
                    </div>
                )}
                <ToastContainer />
            </div>

            <div className='w-full md:w-1/3 p-4'>
                <h2 className='text-white mb-4 font-bold text-xl'>NEW LAUNCHES</h2>
                
                <img 
                    src={helmet}
                    alt="Smart Helmet Updates"
                    className='rounded-lg mb-4 object-cover w-[300px] h-[300px]'
                />
                
                <ul className='text-white list-disc pl-5'>
                    <li className='mb-2'>Battery health monitoring</li>
                    <li className='mb-2'>Customizable safety alerts</li>
                    <li className='mb-2'>Crash reporting</li>
                    <li className='mb-2'>Navigation assistance</li>
                    <li className='mb-2'>Smart visibility features</li>
                </ul>

                <div className='flex flex-col md:flex-row space-x-0 md:space-x-4 mt-4'>
                    <button className='bg-yellow-400 text-black rounded px-4 py-2 transition duration-300 hover:bg-yellow-500 mb-2 md:mb-0'>
                        Buy New
                    </button>
                    <button onClick={handleUpgradeClick} className='bg-blue-600 text-white rounded px-4 py-2 transition duration-300 hover:bg-blue-700'>
                        Upgrade Existing
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
                        <h2 className="text-lg font-semibold mb-4">Upgrade Helmet</h2>
                        <form onSubmit={handleUpgradeSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2">Helmet model number:</label>
                                <input
                                    type="number"
                                    value={upgradeInfo.model}
                                    onChange={(e) => setUpgradeInfo({ ...upgradeInfo, model: e.target.value })}
                                    className="border rounded p-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Phone number:</label>
                                <textarea
                                    value={upgradeInfo.features}
                                    onChange={(e) => setUpgradeInfo({ ...upgradeInfo, features: e.target.value })}
                                    className="border rounded p-2 w-full h-[45px]"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleModalClose} className="text-gray-500 hover:text-gray-700 mr-4">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;