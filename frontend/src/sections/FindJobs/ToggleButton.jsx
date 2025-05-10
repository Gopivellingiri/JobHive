// ToggleButton.jsx
import { Switch } from "@headlessui/react";

const ToggleButton = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-slate-600">{label}</span>
      <Switch
        checked={checked}
        onChange={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors interactive sm:cursor-pointer ${
          checked ? "bg-teal-500" : "bg-slate-100"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </Switch>
    </div>
  );
};

export default ToggleButton;
