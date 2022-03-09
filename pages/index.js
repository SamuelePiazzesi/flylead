import CeoContent from "../components/ui/ceo-content";
import Cta from "../components/ui/cta";
import Grid from "../components/ui/grid";
import Help from "../components/ui/help";
import Hero from "../components/ui/hero";
import Metrics from "../components/ui/metrics";
import Support from "../components/ui/support";
import Layout from "../components/_layout";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Grid />
			<Metrics />
			<Support />
			<CeoContent />
			<Cta />
		</Layout>
	);
}
