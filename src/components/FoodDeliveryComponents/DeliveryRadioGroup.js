import RadioItem from "../RadioGroup/RadioItem";
import RadioGroup from "../RadioGroup/RadioGroup";

const DeliveryRadioGroup = () => {
  return (
    <RadioGroup>
      <RadioItem
        content="Door delivery"
      />
      <RadioItem
        content="Pick up"
      />
    </RadioGroup>
  )
}

export default DeliveryRadioGroup;