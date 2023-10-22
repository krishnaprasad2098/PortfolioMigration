import React from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Icon } from "@iconify/react";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleIcon = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Listbox
        value={props.selectedoption}
        onChange={props.setSelectedoption}
        as="div"
        className="px-4 py-2 rounded-md border-2 border-purple-400"
      >
        <Listbox.Button
          onClick={handleIcon}
          className="flex justify-between w-full items-center text-semibold text-lg"
        >
          {props.selectedoption.name}

          <Icon
            icon="fluent:chevron-down-12-filled"
            className={isOpen ? "rotate-0" : "rotate-180"}
          />
        </Listbox.Button>
        <Listbox.Options>
          {props.service.map((person) => (
            <Listbox.Option key={person.id} value={person} onClick={handleIcon}>
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default Dropdown;
