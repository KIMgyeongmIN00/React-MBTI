import RecentTests from "../components/profile/MyTests";
import ProfileHeader from "../components/profile/ProfileHeader";

export default function Profile() {
  return (
    <div className="container mx-auto p-4 max-w-2xl pb-20">
      <ProfileHeader />
      <RecentTests />
    </div>
  );
}
