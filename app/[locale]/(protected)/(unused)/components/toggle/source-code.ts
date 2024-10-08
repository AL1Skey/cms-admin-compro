export const basicToggle=`import { Bold } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const BasicToggle = () => {
  return (
    <div className="flex justify-center">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default BasicToggle;`

export const outlineToggle=`import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const OutlineToggle = () => {
  return (
    <div className="flex justify-center">
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default OutlineToggle;`

export const toggleWithText=`import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
const ToggleWithText = () => {
  return (
    <div className="flex justify-center">
      <Toggle aria-label="Toggle italic">
        <Italic className="mr-2 h-4 w-4" />
        Italic
      </Toggle>
    </div>
  );
};

export default ToggleWithText;`

export const sizeToggle=`import { Italic } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
const SizeToggle = () => {
  return (
    <div className="flex gap-5 justify-center">
      <Toggle size="sm" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic default">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default SizeToggle;`

export const disabledToggle=`import { Underline } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

const DisabledToggle = () => {
  return (
    <div className="flex justify-center">
      <Toggle aria-label="Toggle underline" disabled>
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default DisabledToggle;`

export const toggleGroups=`import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

const ToggleGroups = () => {
  return (
    <div>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ToggleGroups;`