import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoMdRefresh } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const token = localStorage.getItem("token"); // your login token

  // fetch notifications
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/Notification", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNotifications(res.data.notifications || []);
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.message || "Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  };

  // ✅ mark as read
  // const markAsRead = async (id) => {
  //   try {
  //     await axios.put(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/Notification/${id}/read`,
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     // update UI
  //     setNotifications((prev) =>
  //       prev.map((n) => (n._id === id ? { ...n, isRead: true } : n))
  //     );
  //   } catch (err) {
  //     alert("Failed to mark as read");
  //   }
  // };

  //delete notification
  const deleteNotification = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/Notification/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setNotifications((prev) => prev.filter((n) => n._id !== id));
    } catch {
      alert("Failed to delete notification");
    }
  };

  useEffect(() => {
    fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/users")} className="text-xl">
              <IoIosArrowBack />
            </button>
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>
          <button
            onClick={fetchNotifications}
            className="px-3 py-2 text-[30px] rounded-lg text-black"
          >
            <IoMdRefresh />
          </button>
        </div>

        {/* Loading */}
        {loading && <p className="text-gray-600">Loading notifications...</p>}

        {/* Error */}
        {error && <p className="text-red-600">{error}</p>}

        {/* No Notifications */}
        {!loading && notifications.length === 0 && (
          <p className="text-gray-500 text-center">No notifications found</p>
        )}

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((n) => (
            <div
              key={n._id}
              className={`p-4 rounded-lg border flex justify-between items-start gap-4 ${n.isRead ? "bg-gray-50" : "bg-yellow-50 border-yellow-300"
                }`}
            >
              <div>
                <h3 className="font-semibold">{n.title}</h3>
                <p className="text-gray-600 text-sm">{n.message}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(n.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {/* {!n.isRead && (
                  <button
                    onClick={() => markAsRead(n._id)}
                    className="px-3 py-1 text-sm rounded bg-green-600 text-white hover:bg-green-700"
                  >
                    Mark Read
                  </button>
                )} */}

                <button
                  onClick={() => deleteNotification(n._id)}
                  className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
