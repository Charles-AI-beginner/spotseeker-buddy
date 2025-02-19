
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

export const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <div className="py-6 glass rounded-lg animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Vehicle Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="motorcycle">Motorcycle</SelectItem>
              <SelectItem value="truck">Truck</SelectItem>
            </SelectContent>
          </Select>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price Range</label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={100}
              step={1}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Features" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cctv">CCTV</SelectItem>
              <SelectItem value="24/7">24/7 Access</SelectItem>
              <SelectItem value="covered">Covered Parking</SelectItem>
              <SelectItem value="security">Security Guard</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="3">3+ Stars</SelectItem>
              <SelectItem value="2">2+ Stars</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
