import {
  SectionContainer,
  SectionDescription,
  SectionMain,
  SectionMainTitle,
  Table,
} from "@markfazzio/docs-ui-components";

import glossaryData from "../json/glossary-data.json";
import { GLOSSARY_COLUMNS } from "@/constants";

interface GlossaryDataItem {
  term: string;
  definition: string;
}

export const GlossarySection = () => (
  <SectionMain id="glossary">
    <SectionContainer>
      <SectionMainTitle label="Glossary" />
      <SectionDescription>A glossary of terms.</SectionDescription>
      <Table columns={GLOSSARY_COLUMNS} rows={glossaryData} />
    </SectionContainer>
  </SectionMain>
);
