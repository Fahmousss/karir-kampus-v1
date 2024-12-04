import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FlatList } from "react-native";

type InputSelectProps = {
  placeholder: string; // Placeholder for the select
  label: string; // Label for the group
  data: { label: string; value: string }[]; // Data for the select options
  onChange: (value: string) => void; // Handler for change events
};

export const InputSelect: React.FC<InputSelectProps> = ({
  placeholder,
  label,
  data,
  onChange,
}) => {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <Select>
      {/* Trigger with Custom Placeholder */}
      <SelectTrigger>
        <SelectValue
          className="text-foreground text-sm w-[100px]"
          placeholder={placeholder}
          style={{
            fontFamily: "Outfit_400Regular",
          }}
        />
      </SelectTrigger>

      {/* Content and Options */}
      <SelectContent insets={contentInsets}>
        <SelectGroup>
          {/* Dynamic Label */}
          <SelectLabel style={{ fontFamily: "Outfit_600SemiBold" }}>
            {label}
          </SelectLabel>

          {/* Map through Data */}
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <SelectItem
                key={index}
                label={item.label}
                value={item.value}
                onPress={() => onChange(item.value)} // Trigger onChange with the selected value
              >
                {item.label}
              </SelectItem>
            )}
          />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
