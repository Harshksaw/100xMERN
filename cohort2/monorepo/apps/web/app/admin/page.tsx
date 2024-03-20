import Admin from "@repo/ui/admin";
import { InputBox } from '../../../../../turborepo/packages/ui/src/input-box';

export default function Page(): JSX.Element {
  return (
    <div>
      hi form admin page
      <Admin />
      <InputBox />
    </div>
  );
}
