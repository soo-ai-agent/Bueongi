import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { RouteErrorBoundary } from "./components/RouteErrorBoundary";
import { Onboarding } from "./pages/Onboarding";
import { Home } from "./pages/Home";
import { RouteComparison } from "./pages/RouteComparison";
import { RouteDetail } from "./pages/RouteDetail";
import { NavigationScreen } from "./pages/Navigation";
import { ShareStatus } from "./pages/ShareStatus";
import { MyPage } from "./pages/MyPage";
import { PlaceSearch } from "./pages/PlaceSearch";
import { ConfirmLocation } from "./pages/ConfirmLocation";
import { EmergencyContact } from "./pages/EmergencyContact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, Component: Onboarding },
      { path: "home", Component: Home },
      { path: "search", Component: RouteComparison },
      { path: "place-search", Component: PlaceSearch },
      { path: "confirm-location", Component: ConfirmLocation },
      { path: "route/:id", Component: RouteDetail },
      { path: "navigate", Component: NavigationScreen },
      { path: "share", Component: ShareStatus },
      { path: "mypage", Component: MyPage },
      { path: "emergency-contacts", Component: EmergencyContact },
    ],
  },
]);
