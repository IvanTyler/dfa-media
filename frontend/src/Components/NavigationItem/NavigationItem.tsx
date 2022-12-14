import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BACKEND_HOST } from '../../Constants/constants';
import { INavigation } from "../../Interfaces/interface";
import { getNavigationItemId } from '../../Redux/action/dataAction';
import style from './NavigationItem.module.scss'

interface NavigationItemProps {
    item: INavigation,
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
    const dispatch = useDispatch()

    const changeStatusHandlet = (id: string) => {
        dispatch(getNavigationItemId(id))
    }
    return (
        <li className={item.active ?
            style.sectionNavigationList__borderRight + ' ' + style.sectionNavigationList__item :
            style.sectionNavigationList__item}
        >
            <Link to={item.link} className={style.sectionNavigationList__link} onClick={() => changeStatusHandlet(item.id)}>
                <div className={style.sectionNavigationList__wrapperIcon}>
                    <img className={style.sectionNavigationList__icon} src={`${BACKEND_HOST}${item.image}`} />
                </div>
                <span className={style.sectionNavigationList__text}>{item.name}</span>
            </Link>
        </li >
    )
}