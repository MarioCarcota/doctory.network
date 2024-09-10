import CandidatePage from "@/components/candidate/candidatePage";
import RenderCandidate from "@/components/candidate/rendererCandidate";
import { FadeAn } from "@/components/transitions/FadeTransition";
import { dataDoctory } from "@/public/data/dataFile";
export default async function ProfessionalUser({ params: { user } }) {
  const passedNpi = Number(user);

  // FAKE RETRIEVIG DATA FROM DB SERVER SIDE
  const userData = dataDoctory.find((doctor) => doctor.npi === passedNpi);

  return (
    <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center px-3 lg:px-6">
      <FadeAn className={"w-full"}>
        <RenderCandidate user={userData} />
      </FadeAn>
    </main>
  );
}
