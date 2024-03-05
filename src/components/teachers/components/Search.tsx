import c from "classnames";
import { forwardRef, useState } from "react";

import { Flare } from "@/utils/Flare";

import { TextInputControl } from "./SearchInputControl";

export interface SearchBarProps {
  placeholder?: string;
  
}

export const SearchBarInput = forwardRef<HTMLInputElement, SearchBarProps>(
  (props, ref) => {
    const [focused, setFocused] = useState(false);

    

    return (
      <Flare.Base
        className={c({
          "hover:flare-enabled group flex flex-col rounded-[28px] transition-colors sm:flex-row sm:items-center relative":
            true,
          "bg-search-background": !focused,
          "bg-search-focused": focused,
        })}
      >
        <Flare.Light
          flareSize={400}
          enabled={focused}
          className="rounded-[28px]"
          backgroundClass={c({
            "transition-colors": true,
            "bg-search-background": !focused,
            "bg-search-focused": focused,
          })}
        />
        <Flare.Child className="flex flex-1 flex-col">
          <div className="pointer-events-none absolute bottom-0 left-5 top-0 flex max-h-14 items-center text-search-icon">
          </div>

          <TextInputControl
            ref={ref}
           
            onFocus={() => setFocused(true)}
            
            className="w-full flex-1 bg-transparent px-4 py-4 pl-12 text-search-text placeholder-search-placeholder focus:outline-none sm:py-4 sm:pr-2 bg-slate-900"
            placeholder={props.placeholder}
          />

          
        </Flare.Child>
      </Flare.Base>
    );
  },
);
