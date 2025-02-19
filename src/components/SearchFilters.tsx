
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";

export const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[180px]">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Sort & Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 p-4">
            <DropdownMenuLabel>Sort By</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
              <DropdownMenuItem>Rating: Highest First</DropdownMenuItem>
              <DropdownMenuItem>Distance: Nearest First</DropdownMenuItem>
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuLabel>Vehicle Type</DropdownMenuLabel>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenuLabel className="mt-4">Price Range</DropdownMenuLabel>
            <div className="px-2 py-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100}
                step={1}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <DropdownMenuLabel className="mt-2">Features</DropdownMenuLabel>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select features" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cctv">CCTV</SelectItem>
                <SelectItem value="24/7">24/7 Access</SelectItem>
                <SelectItem value="covered">Covered Parking</SelectItem>
                <SelectItem value="security">Security Guard</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenuLabel className="mt-4">Rating</DropdownMenuLabel>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select minimum rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4+ Stars</SelectItem>
                <SelectItem value="3">3+ Stars</SelectItem>
                <SelectItem value="2">2+ Stars</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-6 flex justify-end">
              <Button>Apply Filters</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
