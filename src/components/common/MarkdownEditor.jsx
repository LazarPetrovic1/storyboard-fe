import { useMemo } from "react"
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactDOMServer from "react-dom/server";
import MarkdownRenderer from 'react-markdown-renderer';

function MarkdownEditor({ additionalOptions, id, onChange, placeholder, ...rest }) {
  const options = useMemo(() => ({
    previewImagesInEditor: true,
    syncSideBySidePreviewScroll: true,
    placeholder,
    autofocus: true,
    autosave: {
      enabled: true,
      uniqueId: id,
      delay: 1000,
    },
    previewRender() {
      return ReactDOMServer.renderToString(
        <MarkdownRenderer markdown={rest.value.replaceAll('\n', '\n\n')} />
      );
    },
    ...additionalOptions
    // eslint-disable-next-line
  }), [])
  return (
    <SimpleMDE
      {...rest}
      onChange={onChange}
      style={{ background: "#ddd" }}
      value={rest.value}
      options={options}
    />
  )
}

export default MarkdownEditor