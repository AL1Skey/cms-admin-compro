import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const BasicDialog = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Default</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Default</DialogTitle>
          </DialogHeader>
          <DialogDescription className="pb-8">
            <h3 className="text-base font-medium text-default-950 my-2 mt-3">Buy me a coffe.</h3>
            <p className="text-base text-default-500 mt-2">We  enables fans to financially support their favorite creators through donations.</p>
            <p className="text-base  text-default-500 mt-2">The platform allows supporters to make one-time or recurring contributions to their favorite creators,
              enhancing the financial stability and creative freedom of artists, writers, developers, and more.</p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" color="warning">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" color="primary">Primary</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Primary</DialogTitle>
          </DialogHeader>
          <DialogDescription className="pb-8">
            <h3 className="text-base font-medium text-default-950 my-2 mt-3">Buy me a coffe.</h3>
            <p className="text-base text-default-500 mt-2">We  enables fans to financially support their favorite creators through donations.</p>
            <p className="text-base  text-default-500 mt-2">The platform allows supporters to make one-time or recurring contributions to their favorite creators,
              enhancing the financial stability and creative freedom of artists, writers, developers, and more.</p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" color="warning">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="primary">Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" color="secondary">Secondary</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Secondary</DialogTitle>
          </DialogHeader>
          <DialogDescription className="pb-8">
            <h3 className="text-base font-medium text-default-950 my-2 mt-3">Buy me a coffe.</h3>
            <p className="text-base text-default-500 mt-2">We  enables fans to financially support their favorite creators through donations.</p>
            <p className="text-base  text-default-500 mt-2">The platform allows supporters to make one-time or recurring contributions to their favorite creators,
              enhancing the financial stability and creative freedom of artists, writers, developers, and more.</p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" color="warning">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="secondary">Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" color="success">Success</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success</DialogTitle>
          </DialogHeader>
          <DialogDescription className="pb-8">
            <h3 className="text-base font-medium text-default-950 my-2 mt-3">Buy me a coffe.</h3>
            <p className="text-base text-default-500 mt-2">We  enables fans to financially support their favorite creators through donations.</p>
            <p className="text-base  text-default-500 mt-2">The platform allows supporters to make one-time or recurring contributions to their favorite creators,
              enhancing the financial stability and creative freedom of artists, writers, developers, and more.</p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" color="warning">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="success">Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" color="info">Info</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Info</DialogTitle>
          </DialogHeader>
          <DialogDescription className="pb-8">
            <h3 className="text-base font-medium text-default-950 my-2 mt-3">Buy me a coffe.</h3>
            <p className="text-base text-default-500 mt-2">We  enables fans to financially support their favorite creators through donations.</p>
            <p className="text-base  text-default-500 mt-2">The platform allows supporters to make one-time or recurring contributions to their favorite creators,
              enhancing the financial stability and creative freedom of artists, writers, developers, and more.</p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" color="warning">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="info">Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" color="warning">Warning</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Warning</DialogTitle>
          </DialogHeader>
          <DialogDescription className="pb-8">
            <h3 className="text-base font-medium text-default-950 my-2 mt-3">Buy me a coffe.</h3>
            <p className="text-base text-default-500 mt-2">We  enables fans to financially support their favorite creators through donations.</p>
            <p className="text-base  text-default-500 mt-2">The platform allows supporters to make one-time or recurring contributions to their favorite creators,
              enhancing the financial stability and creative freedom of artists, writers, developers, and more.</p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" color="warning">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="warning">Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" color="destructive">Destructive</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Destructive</DialogTitle>
          </DialogHeader>
          <DialogDescription className="pb-8">
            <h3 className="text-base font-medium text-default-950 my-2 mt-3">Buy me a coffe.</h3>
            <p className="text-base text-default-500 mt-2">We  enables fans to financially support their favorite creators through donations.</p>
            <p className="text-base  text-default-500 mt-2">The platform allows supporters to make one-time or recurring contributions to their favorite creators,
              enhancing the financial stability and creative freedom of artists, writers, developers, and more.</p>
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" color="warning">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button color="destructive">Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  
    </div>
  );
};

export default BasicDialog;