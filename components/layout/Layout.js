import { useContext } from "react";
import NotificationContext from "../../store/notificationContext";
import MainHeader from "./MainHeader/MainHeader";
import Notification from "../ui/Notification/Notification";

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
