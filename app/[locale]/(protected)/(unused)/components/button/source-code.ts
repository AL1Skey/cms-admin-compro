export const basicButton=`import { Button } from "@/components/ui/button";
const BasicButton = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="info">Info</Button>
            <Button color="warning">Warning</Button>
            <Button color="destructive">Destructive</Button>
        </div>
    );
};

export default BasicButton;`

export const outlineButton=`import { Button } from '@/components/ui/button';
const OutlineButton = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      <Button variant="outline">Default</Button>
      <Button color="primary" variant="outline" >Primary</Button>
      <Button color="secondary" variant="outline">Secondary</Button>
      <Button color="success" variant="outline">Success</Button>
      <Button color="info" variant="outline">Info</Button>
      <Button color="warning" variant="outline">Warning</Button>
      <Button color="destructive" variant="outline">Destructive</Button>
    </div>
  );
};

export default OutlineButton;`

export const softButton=`import { Button } from "@/components/ui/button";
const SoftButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="soft">Primary</Button>
      <Button color="primary" variant="soft" >Primary</Button>
      <Button color="secondary" variant="soft">Secondary</Button>
      <Button color="success" variant="soft">Success</Button>
      <Button color="info" variant="soft">Info</Button>
      <Button color="warning" variant="soft">Warning</Button>
      <Button color="destructive" variant="soft">Destructive</Button>
    </div>
  )
};

export default SoftButton;
`
export const shadowButton=`import { Button } from "@/components/ui/button";
const ShadowButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button shadow="sm">Primary</Button>
      <Button color="secondary" shadow="md">Secondary</Button>
      <Button color="success" shadow="lg">Success</Button>
      <Button color="info" shadow="xl">Info</Button>
    </div>
  );
};

export default ShadowButton;`
export const roundedButton=`import { Button } from '@/components/ui/button';

const RoundedButton = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      <Button rounded="sm">DEfault</Button>
      <Button color="primary" rounded="md" >Primary</Button>
      <Button color="secondary" rounded="lg" >Scondary</Button>
      <Button color="warning" rounded="full" >Warning</Button>
    </div>
  );
};

export default RoundedButton;  `

export const roundedOutline=`import { Button } from '@/components/ui/button';

const RoundedOutline = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      <Button variant="outline" rounded="full">Default</Button>
      <Button color="primary" variant="outline" rounded="full">Primary</Button>
      <Button color="secondary" variant="outline" rounded="full">Secondary</Button>
      <Button color="success" variant="outline" rounded="full">Success</Button>
      <Button color="info" variant="outline" rounded="full">Info</Button>
      <Button color="warning" variant="outline" rounded="full">Warning</Button>
      <Button color="destructive" variant="outline" rounded="full">Destructive</Button>
    </div>
  );
};

export default RoundedOutline;  `

export const iconButtons=`import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";

const IconButtons = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <Newspaper className="w-4 h-4 me-2" />
        Left Icon
      </Button>
      <Button color="primary">
        Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
      <Button color="secondary">
        <Newspaper className="w-4 h-4 me-2" />
        Left Icon
      </Button>
      <Button color="success" variant="outline">
        Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
      <Button variant="outline" color="primary" size="icon">
        <Newspaper className="w-5 h-5" />
      </Button>
      <Button  size="icon">
        <Newspaper className="w-5 h-5" />
      </Button>
      <Button  size="icon" color="primary" variant="soft">
        <Newspaper className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default IconButtons;`

export const iconRounded=`import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";

const IconRounded = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button rounded="full">
        <Newspaper className="w-4 h-4 me-2" />
        Left Icon
      </Button>
      <Button color="primary"  rounded="full">
        Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
      <Button color="secondary"  rounded="full">
        <Newspaper className="w-4 h-4 me-2" />
        Left Icon
      </Button>
      <Button color="success" variant="outline"  rounded="full">
        Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
      <Button variant="outline" color="primary" size="icon"  rounded="full">
        <Newspaper className="w-5 h-5" />
      </Button>
      <Button  size="icon"  rounded="full">
        <Newspaper className="w-5 h-5" />
      </Button>
      <Button  size="icon" color="primary" variant="soft"  rounded="full">
        <Newspaper className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default IconRounded;`

export const sizesButton=`import { Button } from "@/components/ui/button";
const SizesButton = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="lg">Large</Button>
      <Button>Default</Button>
      <Button size="md">Midium</Button>
      <Button size="sm">Small</Button>
    </div>
  );
};

export default SizesButton;`

export const disabledButton=`import { Button } from "@/components/ui/button";
const DisabledButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Default</Button>
      <Button color="primary" disabled>Primary</Button>
      <Button color="secondary" disabled>Secondary</Button>
      <Button color="success" disabled>Success</Button>
      <Button color="info" disabled>Info</Button>
      <Button color="warning" disabled>Warning</Button>
      <Button color="destructive" disabled>Destructive</Button>
    </div>
  );
};

export default DisabledButton;`

export const loadingButton=`import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
const LoadingButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Default
      </Button>
      <Button color="primary">
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Primary
      </Button>
      <Button color="secondary">
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Secondary
      </Button>
      <Button color="success">
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Success
      </Button>
      <Button color="info">
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Info
      </Button>
      <Button color="warning">
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Warning
      </Button>
      <Button color="destructive">
        <Loader2 className="me-2 h-4 w-4 animate-spin" />
        Destructive
      </Button>
    </div>
  );
};

export default LoadingButton;`

export const blockButton=`import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";
const BlockButton = () => {
  return (
    <div className="space-y-3">
      <Button size="block">Primary</Button>
      <Button color="secondary"  size="block">
        <Newspaper className="w-4 h-4 me-2" /> Left Icon
      </Button>
      <Button color="success"  size="block"> Right Icon
        <Newspaper className="w-4 h-4 ms-2" />
      </Button>
    </div>
  );
};

export default BlockButton;`

export const linkButton=`import { Button } from "@/components/ui/button";
import {Link} from '@/i18n/routing';
const LinkButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild>
        <Link href="#">Default</Link>
      </Button>
      <Button color="primary" asChild>
        <Link href="#">Primary</Link>
      </Button>
      <Button color="secondary" asChild>
        <Link href="#">Secondary</Link>
      </Button>
      <Button color="success" asChild>
        <Link href="#">Success</Link>
      </Button>
      <Button color="info" asChild>
        <Link href="#">Info</Link>
      </Button>
      <Button color="warning" asChild>
        <Link href="#">Warning</Link>
      </Button>
      <Button color="destructive" asChild>
        <Link href="#">Destructive</Link>
      </Button>
    </div>
  );
};

export default LinkButton;`

export const ghostButton=`import { Button } from "@/components/ui/button";
const GhostButton = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="ghost">Default</Button>
      <Button color="primary" variant="ghost">Primary</Button>
      <Button color="secondary" variant="ghost">Secondary</Button>
      <Button color="success" variant="ghost">Success</Button>
      <Button color="info" variant="ghost">Info</Button>
      <Button color="warning" variant="ghost">Warning</Button>
      <Button color="destructive" variant="ghost">Destructive</Button>
    </div>
  );
};

export default GhostButton;`