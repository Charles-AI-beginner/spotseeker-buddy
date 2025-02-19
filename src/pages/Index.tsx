
import { Header } from "@/components/Header";
import { SearchFilters } from "@/components/SearchFilters";
import { BookingForm } from "@/components/BookingForm";
import { ParkingSpots } from "@/components/ParkingSpots";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <SearchFilters />
        <BookingForm />
        <ParkingSpots />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
