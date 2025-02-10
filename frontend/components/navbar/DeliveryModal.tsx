import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

export default function DeliveryModal({ onClose, onLocationSubmit }) {
  const [zipCode, setZipCode] = useState(''); // State for zip code input
  const [dropdownSelection, setDropdownSelection] = useState(''); // State for dropdown selection
  const [isZipEntered, setIsZipEntered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to detect the current theme

  useEffect(() => {
    // Check the presence of the 'dark' class on the HTML element
    const htmlElement = document.documentElement;
    setIsDarkMode(htmlElement.classList.contains('dark'));
  }, []);

  const handleZipSubmit = () => {
    if (zipCode) {
      onLocationSubmit(zipCode); // Pass zip code as the location
      setIsZipEntered(true);
    }
  };

  const handleDropdownChange = (e) => {
    const selectedLocation = e.target.value;
    setDropdownSelection(selectedLocation);
    onLocationSubmit(selectedLocation); // Pass dropdown selection as the location
  };

  const handleEditZip = () => {
    setIsZipEntered(false);
    setZipCode('');
  };

  if (typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-[1000] ${
        isDarkMode ? 'dark' : ''
      }`}
      style={{ width: '100vw', height: '100vh', padding: 0 }}
    >
      <div
        className={`${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        } rounded-lg w-80 p-6 shadow-lg relative z-[1100]`}
      >
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          &times;
        </button>

        <h2 className="text-lg font-bold mb-2">Choose your location</h2>
        <p className="text-sm mb-4">
          Delivery options and delivery speeds may vary for different locations.
        </p>

        {isZipEntered && !dropdownSelection ? (
          <div
            className={`flex items-center justify-between border ${
              isDarkMode
                ? 'border-gray-600 bg-gray-700'
                : 'border-blue-600 bg-blue-50'
            } p-2 rounded-md mb-4`}
          >
            <div className="flex items-center space-x-2">
              <input type="radio" checked readOnly className="text-blue-600" />
              <span className="text-sm">Deliver to</span>
              <span className="text-sm font-bold">{zipCode}</span>
            </div>
            <button onClick={handleEditZip} className="text-blue-500 text-sm">
              EDIT
            </button>
          </div>
        ) : (
          <div
            className={`flex items-center justify-between border ${
              isDarkMode ? 'border-gray-600' : 'border-blue-600'
            } p-2 rounded-md mb-4`}
          >
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className={`focus:outline-none w-full ${
                isDarkMode ? 'bg-gray-700 text-white' : 'text-black'
              }`}
              placeholder="Enter your zip code here"
            />
            <button
              onClick={handleZipSubmit}
              className="text-blue-500 text-sm"
            >
              Submit
            </button>
          </div>
        )}

        <div className="flex items-center my-2">
          <hr className="w-full border-t" />
          <span className="px-2 text-sm">OR</span>
          <hr className="w-full border-t" />
        </div>

        <select
          className={`w-full border p-2 rounded-md mb-4 ${
            isDarkMode
              ? 'border-gray-600 bg-gray-700 text-white'
              : 'border-gray-300 bg-white text-black'
          }`}
          value={dropdownSelection}
          onChange={handleDropdownChange}
        >
          <option value="" disabled>
            Select a location
          </option>
          <option value="Outside the US">Ship Outside the US</option>
          <option value="Canada">Canada</option>
          <option value="Europe">Europe</option>
        </select>

        <button
          onClick={onClose}
          className={`w-full py-2 rounded-md ${
            isDarkMode
              ? 'bg-orange-600 hover:bg-orange-500'
              : 'bg-orange-500 hover:bg-orange-400'
          } text-white font-semibold`}
        >
          Done
        </button>
      </div>
    </div>,
    document.body
  );
}
