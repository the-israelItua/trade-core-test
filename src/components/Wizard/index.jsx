import { Fragment } from "react";
import { usePage } from "context/page-context";
import { WizardWrapper } from "./styles";
import WizardItem from "../WizardItem";

const Wizard = () => {
  const { currentStep, pagelist } = usePage();

  return (
    <WizardWrapper>
      {pagelist.map((item) => (
        <Fragment key={item.step}>
          <WizardItem active={item.step === currentStep} item={item} />
          <span />
        </Fragment>
      ))}
      {currentStep < 3 && <WizardItem loading />}
    </WizardWrapper>
  );
};

export default Wizard;
