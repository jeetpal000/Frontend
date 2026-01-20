import React from 'react'
import { toast } from 'react-toastify';

const ConfirmPopUp = ({setIsConfirmOpen, handleLogout}) => {
  return (
    <div className="fixed inset-0 bg-[#0000007d] backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-[9999]">
              <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4 text-black">
                  Confirm Logout
                </h2>
                <p className="text-black">Are you sure you want to logout?</p>
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={() => setIsConfirmOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:opacity-80"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={async () => {
                      await handleLogout();
                      setIsConfirmOpen(false);
                      toast.success("Logged out successfully!");
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:opacity-80"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
  )
}

export default ConfirmPopUp