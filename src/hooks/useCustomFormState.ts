import { useState } from "react";

interface IField {
  name: string;
  value: string;
}

const useCustomFormState = (
  defaultFields: IField[]
): [
  IField[],
  {
    addField: (name: string, value?: string) => void;
    editField: (name: string, value: string) => void;
    deleteField: (name: string) => void;
  }
] => {
  const [fields, setFields] = useState(defaultFields);

  const addField = (name: string, value: string = "") => {
    setFields([...fields, { name, value }]);
  };

  const editField = (name: string, value: string) => {
    setFields(
      fields.map((field) => {
        if (field.name === name) {
          field.value = value;
        }
        return field;
      })
    );
  };

  const deleteField = (name: string) => {
    const newValues = fields.filter((field) => {
      return field.name !== name ? field : false;
    });
    setFields(newValues);
  };

  return [fields, { addField, editField, deleteField }];
};

export default useCustomFormState;
