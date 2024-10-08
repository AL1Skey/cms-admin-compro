import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const BasicResizable = () => {
  return (
    <div className="flex justify-center">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[300px] max-w-xl rounded-lg border border-default-200 dark:border-default-300"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="border border-default-200 dark:border-default-300"/>
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
export default BasicResizable;