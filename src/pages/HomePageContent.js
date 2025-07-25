import DeliveryServicesSection from "../components/DeliveryServiceSection";
import HeroBanner from "../components/HeroBanner";
import WelcomeSection from "../components/WelcomeSection";
import ProductGridSection from "../components/ProductGridSection";

const HomePageContent = () => {
//   // Sample products for ProductGridSection
//   const lowerPriceProducts = [
//     { name: 'TROXHULT Wall shelf', price: '19.99', oldPrice: '24.99', image: 'https://www.ikea.com/us/en/images/products/troxhult-wall-shelf-white__0910000_pe698000_s5.jpg?f=s' },
//     { name: 'SKRUVBY TV unit', price: '99.00', oldPrice: '119.00', image: 'https://www.ikea.com/us/en/images/products/skruvby-tv-unit-white__1087401_pe860601_s5.jpg?f=s' },
//     { name: 'LÅNESPELARE Floor protector', price: '9.99', oldPrice: '12.99', image: 'https://www.ikea.com/us/en/images/products/lanespelare-floor-protector-dark-grey__1033000_pe772000_s5.jpg?f=s' },
//     { name: 'KALLAX Shelf unit', price: '34.99', oldPrice: '39.99', image: 'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-white__0644723_pe702847_s5.jpg?f=s' },
//   ];

  return (
    <>
      <HeroBanner />
      <WelcomeSection />
      <ProductGridSection />
      <DeliveryServicesSection />
  
    </>
  );
};
export default HomePageContent;