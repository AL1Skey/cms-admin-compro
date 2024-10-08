export const  basicSeparator=`import { Separator } from "@/components/ui/separator"

const BasicSeparator = () => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Dashcode</h4>
        <p className="text-sm text-muted-foreground">
          Reusable Admin Ui Template
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}

export default BasicSeparator;`