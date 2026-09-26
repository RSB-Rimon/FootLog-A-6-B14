import Banner from "@/components/Banner";
import WorkoutsPages from "./workouts/page";
import BannerHadding from "@/components/BannerHadding";


export default function Home() {
  return (
    <div>
   <Banner />
  <BannerHadding />
   <WorkoutsPages />
    </div>
  );
}
