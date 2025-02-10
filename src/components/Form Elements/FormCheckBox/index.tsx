import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React from 'react';

const FormCheckBox = ({ control, rules, name, label, options }) => {
  return (
    <FormField
      control={control}
      rules={rules}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{label}</FormLabel>
          </div>
          {options.map((item) => (
            <FormField
              key={item.value}
              control={control}
              name={name}
              render={({ field }) => {
                const value = field.value || [];
                return (
                  <FormItem
                    key={item.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={value.includes(item.value)} 
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...value, item.value]); 
                          } else {
                            field.onChange(value.filter((v) => v !== item.value)); 
                          }
                        }}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">{item.text}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormCheckBox;
