import PriceOption from "./PriceOption";
const PrieOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "Access to all basic membership features",
        "Group fitness classes included",
        "Sauna and steam room access",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Access to all standard membership features",
        "Personal training session included",
        "Towel service included",
        "Nutritional counseling session included",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl text-center font-bold my-6">Best Prices in Your City</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PrieOptions;
