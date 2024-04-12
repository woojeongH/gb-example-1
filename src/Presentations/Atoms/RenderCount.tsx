
import { useRenderCount } from "@uidotdev/usehooks";

const RenderCount = () => {

  const render = useRenderCount();

  return <> 
    랜더링: {render}
  </>
}

export default RenderCount;