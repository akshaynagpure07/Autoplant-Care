import { SubNav, WateredAreas } from "../Components";

function WateredAreasPage() {
  return (
    <div className="main flex flex-col justify-between gap-14 items-center min-h-screen">
      
      <section className="Areas flex-grow">
        <WateredAreas />
      </section>
    </div>
  );
}

export default WateredAreasPage;
