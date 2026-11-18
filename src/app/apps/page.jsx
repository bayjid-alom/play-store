import TrendingApps from "@/components/homepage/TrendingApps";

export const metadata = {
    title: "Play Store | Apps ",
    description: "This is a apps page of Play Store website",
};

const AppsPage = () => {
    return (
        <div className="">
            {/* This is apps page */}
            <TrendingApps from="apps"></TrendingApps>

        </div>
    );
};

export default AppsPage;