import { Editor, rootCtx, defaultValueCtx } from "@milkdown/core";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";
import { gfm } from "@milkdown/preset-gfm";
import { history } from "@milkdown/plugin-history";
import { listener, listenerCtx } from "@milkdown/plugin-listener";

const MilkdownEditor = () => {
  const { contactsMd, setContactsMd } = useStore((state) => ({
    contactsMd: state.contactsMd,
    setContactsMd: state.setContactsMd
  }));

  useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, contactsMd);
        ctx
          .get(listenerCtx)
          .mounted((ctx) => {
            const wrapper = ctx.get(rootCtx) as HTMLDivElement;
            const editor = wrapper.querySelector(
              ".editor[role='textbox']"
            ) as HTMLDivElement;
            wrapper.onclick = () => editor?.focus();
          })
          .markdownUpdated((_, markdown) => setContactsMd(markdown));

        root.className =
          "installed bg-white dark:bg-gray-800 text-c-700 h-full overflow-y-scroll";
      })
      .use(listener)
      .use(commonmark)
      .use(gfm)
      .use(history)
  );

  return <Milkdown />;
};

export default function Contacts() {
  return (
    <>
      <MilkdownProvider>
        <div className="size-full bg-white/80 overflow-auto">
          <UserContactsTable />
        </div>
      </MilkdownProvider>
    </>
  );
}
