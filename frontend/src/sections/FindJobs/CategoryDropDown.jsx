import * as Select from "@radix-ui/react-select";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function CategoryDropdown({ options, value, onChange }) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className="
          relative flex w-full items-center justify-between
          bg-gray-100 hover:bg-gray-200
          rounded-full px-4 py-3
          text-gray-700
          outline-none focus:ring-2 focus:ring-teal-300
        "
      >
        <div className="flex items-center gap-2">
          <HiOutlineSquares2X2 className="w-5 h-5 text-gray-500" />
          <Select.Value placeholder="Select category" />
        </div>
        <Select.Icon>
          <MdOutlineKeyboardArrowDown className="w-5 h-5 text-gray-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content className="mt-2 rounded-lg bg-white shadow-lg">
        <Select.Viewport className="p-2">
          {options.map((opt) => (
            <Select.Item
              key={opt}
              value={opt}
              className="
                relative flex cursor-pointer select-none items-center
                rounded px-4 py-2 text-gray-700
                focus:bg-teal-50
              "
            >
              <Select.ItemText>{opt}</Select.ItemText>
              <Select.ItemIndicator className="absolute right-4">
                {/* You can insert a check icon here */}✓
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
}
