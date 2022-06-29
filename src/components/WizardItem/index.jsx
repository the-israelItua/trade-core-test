import { ItemWrapper, ItemStep, ItemText } from "./styles";

const WizardItem = ({ active, item, loading }) => {
  return (
    <ItemWrapper>
      <ItemStep active={active}>{loading ? "..." : item?.step}</ItemStep>
      <ItemText active={active}>{item?.label}</ItemText>
    </ItemWrapper>
  );
};

export default WizardItem;
