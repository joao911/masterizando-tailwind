import { SettingsTabs } from './components/SettingsTabs'
import * as Input from './components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Root } from './components/form/fileInput/Root'
import { ImagePreview } from './components/form/fileInput/ImagePreview'
import { Trigger } from './components/form/fileInput/Trigger'
import { Control } from './components/form/fileInput/Control'
import { FileList } from './components/form/fileInput/FileList'
import { SelectComponent } from './components/form/SelectComponent'
import { SelectItem } from './components/form/SelectComponent/SelectItem'
import { TextArea } from './components/form/TextArea'
import { Button } from './components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Settings</h1>

      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h1 className="text-lg font-medium text-zinc-900">Personal Info</h1>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">save</Button>
          </div>
        </div>
        <form
          id="form"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Nome
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.InputRoot>
                <Input.InputControl id="firstName" defaultValue="João" />
              </Input.InputRoot>
              <Input.InputRoot>
                <Input.InputControl defaultValue="Paulo" />
              </Input.InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <div className="grid gap-6">
              <Input.InputRoot>
                <Input.InputPrefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.InputPrefix>
                <Input.InputControl
                  id="email"
                  defaultValue="joaopaulolacerda911@gmail.com"
                />
              </Input.InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>
            <div className="flex items-start gap-5">
              <Root className="flex w-full items-start gap-2">
                <ImagePreview />
                <Trigger />
                <Control />
              </Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <div className="grid gap-6">
              <Input.InputRoot>
                <Input.InputControl
                  id="role"
                  defaultValue="Desenvolvedor front end"
                />
              </Input.InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <SelectComponent placeholder="Select a country">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="Portugal" value="pt" />
              <SelectItem text="USA" value="us" />
              <SelectItem text="Germany" value="de" />
            </SelectComponent>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="zone" className="text-sm font-medium text-zinc-700">
              Time zone
            </label>
            <SelectComponent placeholder="Select a time zone">
              <SelectItem text="GMT-3" value="gmt-3" />
              <SelectItem text="GMT-2" value="gmt-2" />
              <SelectItem text="GMT-1" value="gmt-1" />
            </SelectComponent>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <SelectComponent placeholder="Normal" defaultValue="normal">
                  <SelectItem text="Normal" value="normal" />
                </SelectComponent>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={4} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={4} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={4} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={4} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={4}
                    />
                  </Button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="I'm a product designer based in Melbourne, Australia. I specialise in interactive prototyping and user-friendly interfaces. Let's work together!"
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>
            <div className="flex items-start gap-5">
              <Root className="flex w-full flex-col items-start gap-2">
                <Trigger />
                <Control multiple />
                <FileList />
              </Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
