import { IconType } from "react-icons";

type BadgeProps = {
   Icon: IconType;
   text: string;
};

export function Badge({ Icon, text }: BadgeProps) {
   return (
      <div className="flex items-center justify-center space-x-2">
         <Icon size="2em" />
         <h3>{text}</h3>
      </div>
   );
}
