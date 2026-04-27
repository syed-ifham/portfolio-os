import dayjs from "dayjs";
import {STATUS_BAR_ICONS} from "#constants";

const NavbarRight = () => {

    return (
        <div className="flex items-center gap-4">

            <div className="flex items-center gap-3">

                {
                    STATUS_BAR_ICONS.map((item)=>{
                    const IconComponent = item.Icon;
                    return (
                        <IconComponent
                            key={item.id}
                            size={item.size}
                            strokeWidth={item.strokeWidth}
                            className="cursor-pointer"
                        />
                    );
                })

                }

            </div>

            <time className="text-sm">
                {dayjs().format('ddd MMM D h:mm A')}
            </time>

        </div>
    );
}

export default NavbarRight;